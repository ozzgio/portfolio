import {
  Box,
  Heading,
  Text,
  Image,
  Icon,
  Tag,
  Wrap,
  WrapItem,
  Flex,
  HStack,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import RatingStar from "../ratingstar";
import BaseCard from "../basecard";

function formatDate(rawDate) {
  if (!rawDate) return "";
  const date = new Date(rawDate);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

const BookCard = ({ title, author, rating, tags, cover, lesson, date, slug, source = "external", featured = false }) => {
  const { colors } = useTheme();
  const headingTextColor = useColorModeValue(
    colors.headingText.default,
    colors.headingText._dark
  );
  const bodyTextColor = useColorModeValue(
    colors.bodyText.default,
    colors.bodyText._dark
  );
  const tagBgColor = useColorModeValue(
    colors.tagBg.default,
    colors.tagBg._dark
  );
  const tagTextColor = useColorModeValue(
    colors.tagText.default,
    colors.tagText._dark
  );
  const iconColor = useColorModeValue("gray.500", "gray.400");
  const lessonBgColor = useColorModeValue("orange.50", "orange.900");
  const lessonTextColor = useColorModeValue("orange.800", "orange.100");
  const cardBorder = useColorModeValue(
    colors.cardBorder.default,
    colors.cardBorder._dark
  );

  const cardContent = (
    <BaseCard
      p={featured ? 6 : 5}
      borderColor={featured ? "orange.400" : undefined}
      cursor={source === "internal" ? "pointer" : "default"}
      _hover={source === "internal" ? { transform: "translateY(-2px)", boxShadow: "lg" } : undefined}
      transition="all 0.2s"
    >
      <Flex direction={featured ? { base: "column", md: "row" } : "column"} height="100%" gap={featured ? 6 : 0}>
        {cover && (
          <Box mb={featured ? 0 : 4} align="center" flexShrink={0}>
            <Image
              src={cover}
              alt={title}
              borderRadius="lg"
              maxH={featured ? "240px" : "180px"}
              objectFit="cover"
              boxShadow="xl"
              border="4px solid"
              borderColor={cardBorder}
            />
          </Box>
        )}
        <Flex direction="column" flex={1}>
        <Heading
          fontSize={featured ? "2xl" : "xl"}
          fontWeight="bold"
          textAlign={featured ? "left" : "center"}
          color={headingTextColor}
          mb={1}
          letterSpacing="tight"
        >
          {title}
        </Heading>
        <Text
          fontSize="md"
          textAlign={featured ? "left" : "center"}
          color={bodyTextColor}
          mb={1}
          fontWeight="medium"
        >
          <Icon as={FiBookOpen} mr={1} color={iconColor} />
          {author}
        </Text>
        {date && (
          <Text fontSize="xs" color={bodyTextColor} mb={3} textAlign={featured ? "left" : "center"}>
            Finished: {formatDate(date)}
          </Text>
        )}

        {lesson && lesson.trim() && (
          <Box
            bg={lessonBgColor}
            borderRadius="md"
            p={3}
            mb={3}
            display="flex"
            alignItems="center"
            boxShadow="sm"
          >
            <Icon as={FaQuoteLeft} color={lessonTextColor} boxSize={4} mr={2} />
            <Text fontSize="sm" fontStyle="italic" color={lessonTextColor}>
              {lesson}
            </Text>
          </Box>
        )}

        <HStack
          spacing={2}
          alignItems="center"
          justifyContent={featured ? "start" : "center"}
          mt={2}
          mb={2}
        >
          <RatingStar rating={rating} />
          <Text
            fontSize="md"
            color="orange.500"
            fontWeight="bold"
            lineHeight={1}
          >
            {rating}
          </Text>
        </HStack>

        {tags.length > 0 && (
          <Wrap spacing={2} mb={2} justify={featured ? "start" : "center"}>
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
        </Flex>
      </Flex>
    </BaseCard>
  );

  return source === "internal" && slug ? (
    <NextLink href={`/books/${slug}`} style={{ textDecoration: "none" }}>
      {cardContent}
    </NextLink>
  ) : (
    cardContent
  );
};

export default BookCard;
