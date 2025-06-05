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

const ProjectCard = ({ children, id, title, thumbnail, stack }) => {
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

  return (
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <BaseCard
        p={0}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        role="group"
        tabIndex={0}
      >
        <Box
          w="100%"
          aspectRatio={[4 / 3, 16 / 7]}
          maxH="140px"
          position="relative"
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </Box>
        <Text
          mt={2}
          fontSize={["md", 18]}
          fontWeight="bold"
          color={headingTextColor}
          px={2}
        >
          {title}
        </Text>
        <Box px={2} pb={2} w="100%">
          <Text
            fontSize={15}
            color={bodyTextColor}
            minH="48px"
            textAlign="center"
          >
            {children}
          </Text>
          {stack && stack.length > 0 && (
            <Wrap spacing={1} mt={3} justify="center">
              {stack.map((tag, idx) => (
                <WrapItem key={idx}>
                  <Tag
                    size="sm"
                    colorScheme="orange"
                    bg={tagBgColor}
                    color={tagTextColor}
                    borderRadius="full"
                    px={2}
                    py={0.5}
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
