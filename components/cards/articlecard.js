import {
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Tag,
  Link,
  Button,
  Image,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import BaseCard from "../basecard";

const ArticleCard = ({
  title,
  formattedDate,
  description,
  url,
  thumbnail,
  tags,
}) => {
  const { colors } = useTheme();
  const cardBorder = useColorModeValue("orange.200", "orange.400");
  const headingTextColor = useColorModeValue(
    colors.headingText.default,
    colors.headingText._dark,
  );
  const bodyTextColor = useColorModeValue(
    colors.bodyText.default,
    colors.bodyText._dark,
  );
  const tagBgColor = useColorModeValue(
    colors.tagBg.default,
    colors.tagBg._dark,
  );
  const tagTextColor = useColorModeValue(
    colors.tagText.default,
    colors.tagText._dark,
  );

  // Validate required props
  if (!url || !title) return null;

  return (
    <BaseCard p={5}>
      {thumbnail && (
        <Box mb={4} align="center">
          <Image
            src={thumbnail}
            alt={title}
            borderRadius="lg"
            maxH="140px"
            width="100%"
            objectFit="cover"
            boxShadow="xl"
            border="4px solid"
            borderColor={cardBorder}
          />
        </Box>
      )}
      <Heading
        fontSize="xl"
        fontWeight="bold"
        textAlign="center"
        color={headingTextColor}
        mb={1}
        letterSpacing="tight"
      >
        {title}
      </Heading>
      {formattedDate && (
        <Text fontSize="xs" color={bodyTextColor} mb={2} textAlign="center" suppressHydrationWarning>
          {formattedDate}
        </Text>
      )}
      {description && (
        <Text fontSize="sm" mb={3} color={bodyTextColor} textAlign="center">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </Text>
      )}
      {tags && Array.isArray(tags) && tags.length > 0 && (
        <Wrap spacing={2} mb={3} justify="center">
          {tags.map((tag, idx) => (
            <WrapItem key={idx}>
              <Tag
                size="md"
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
      <Box textAlign="center">
        <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
          <Button
            rightIcon={<ExternalLinkIcon />}
            colorScheme="orange"
            variant="solid"
            size="sm"
            _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
            transition="all 0.2s ease-in-out"
          >
            Read on LinkedIn
          </Button>
        </Link>
      </Box>
    </BaseCard>
  );
};

export default ArticleCard;
