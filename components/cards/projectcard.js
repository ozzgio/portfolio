import {
  Box,
  Text,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import NextLink from "next/link";
import BaseCard from "../basecard";
import Image from "next/image";

function formatDate(dateString) {
  if (!dateString) return "";
  const [year, month] = dateString.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

const ProjectCard = ({ children, id, title, thumbnail, stack, date }) => {
  const tagBgColor = useColorModeValue("tagBg.default", "tagBg._dark");
  const tagTextColor = useColorModeValue("tagText.default", "tagText._dark");
  const { colors } = useTheme();
  const headingTextColor = useColorModeValue(
    colors.headingText.default,
    colors.headingText._dark
  );
  const bodyTextColor = useColorModeValue(
    colors.bodyText.default,
    colors.bodyText._dark
  );
  const dateColor = useColorModeValue("gray.500", "gray.400");

  return (
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <BaseCard
        p={0}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        textAlign="center"
        role="group"
        tabIndex={0}
        h="100%"
      >
        <Box
          w="100%"
          aspectRatio={16 / 9}
          position="relative"
          bg={useColorModeValue("gray.50", "gray.700")}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          p={4}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={thumbnail?.endsWith('.png')}
          />
        </Box>
        <Box p={5} flex={1} display="flex" flexDirection="column">
          <Text
            fontSize={["lg", "xl"]}
            fontWeight="bold"
            color={headingTextColor}
            mb={2}
            lineHeight="tight"
          >
            {title}
          </Text>
          {date && (
            <Text fontSize="xs" color={dateColor} mb={3} fontWeight="medium">
              {formatDate(date)}
            </Text>
          )}
          <Text
            fontSize="sm"
            color={bodyTextColor}
            mb={4}
            textAlign="left"
            flex={1}
            lineHeight="tall"
          >
            {children}
          </Text>
          {stack && stack.length > 0 && (
            <Wrap spacing={2} mt="auto" justify="flex-start">
              {stack.map((tag, idx) => (
                <WrapItem key={idx}>
                  <Tag
                    size="sm"
                    colorScheme="orange"
                    bg={tagBgColor}
                    color={tagTextColor}
                    borderRadius="full"
                    px={3}
                    py={1}
                    fontWeight="semibold"
                  >
                    {tag}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          )}
        </Box>
      </BaseCard>
    </NextLink>
  );
};

export default ProjectCard;
