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
import { FiBookOpen } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import RatingStar from "../ratingstar";
import BaseCard from "../basecard";

function formatDate(rawDate) {
  if (!rawDate) return "";
  const date = new Date(rawDate);
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

const BookCard = ({ title, author, rating, tags, cover, lesson, date }) => {
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

  return (
    <BaseCard p={5}>
      <Flex direction="column" height="100%">
        {cover && (
          <Box mb={4} align="center">
            <Image
              src={cover}
              alt={title}
              borderRadius="lg"
              maxH="180px"
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
        <Text
          fontSize="md"
          textAlign="center"
          color={bodyTextColor}
          mb={1}
          fontWeight="medium"
        >
          <Icon as={FiBookOpen} mr={1} color={iconColor} />
          {author}
        </Text>
        {date && (
          <Text fontSize="xs" color={bodyTextColor} mb={3} textAlign="center">
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
          justifyContent="center"
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
          <Wrap spacing={2} mb={2} justify="center">
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
    </BaseCard>
  );
};

export default BookCard;
