import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  IoBookOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
  IoSparklesOutline,
  IoStar,
} from "react-icons/io5";
import BaseCard from "../basecard";

function formatDate(rawDate) {
  if (!rawDate) return "";

  try {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(rawDate));
  } catch {
    return rawDate;
  }
}

const BookCard = ({
  title,
  author,
  rating,
  tags = [],
  cover,
  lesson,
  summary,
  date,
  slug,
  source = "external",
  featured = false,
  url,
  ctaLabel,
}) => {
  const { colors } = useTheme();
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
  const metaText = useColorModeValue("gray.500", "gray.300");
  const featuredGlow = useColorModeValue("orange.50", "orange.900");
  const subtlePanel = useColorModeValue("blackAlpha.50", "whiteAlpha.100");
  const sourceBadgeBg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
  const coverPanelBg = useColorModeValue("blackAlpha.50", "blackAlpha.400");

  const href = source === "internal" ? `/books/${slug}` : url;
  const formattedDate = formatDate(date);

  return (
    <BaseCard
      p={0}
      maxW="none"
      h="100%"
      borderColor={featured ? "orange.400" : undefined}
      bgGradient={featured ? `linear(to-br, ${featuredGlow}, transparent)` : undefined}
    >
      <Box display="flex" flexDirection="column" h="100%">
        {cover && (
          <Box
            position="relative"
            minH={featured ? "280px" : "220px"}
            maxH={featured ? "380px" : "260px"}
            overflow="hidden"
            bg={featured ? coverPanelBg : undefined}
            p={featured ? { base: 4, md: 6 } : 0}
          >
            <Image
              src={cover}
              alt={title}
              width="100%"
              height="100%"
              objectFit={featured ? "contain" : "cover"}
              transition="transform 0.5s ease"
              _groupHover={{ transform: "scale(1.04)" }}
            />
            {!featured && (
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, blackAlpha.700, transparent 55%)"
              />
            )}
            {featured && (
              <Badge
                position="absolute"
                top={4}
                left={4}
                colorScheme="orange"
                px={3}
                py={1}
                borderRadius="full"
              >
                Featured book
              </Badge>
            )}
          </Box>
        )}

        <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} flex={1}>
          <HStack spacing={2} color={metaText} fontSize="sm" flexWrap="wrap">
            <HStack
              spacing={2}
              bg={subtlePanel}
              borderWidth="1px"
              borderColor="transparent"
              borderRadius="full"
              px={3}
              py={1}
            >
              <IoBookOutline />
              <Text>{author}</Text>
            </HStack>
            {formattedDate && (
              <HStack
                spacing={2}
                bg={subtlePanel}
                borderWidth="1px"
                borderColor="transparent"
                borderRadius="full"
                px={3}
                py={1}
              >
                <IoCalendarOutline />
                <Text>{formattedDate}</Text>
              </HStack>
            )}
            {typeof rating === "number" && rating > 0 && (
              <HStack
                spacing={2}
                bg={subtlePanel}
                borderWidth="1px"
                borderColor="transparent"
                borderRadius="full"
                px={3}
                py={1}
              >
                <IoStar color="#dd6b20" />
                <Text>{rating.toFixed(1)}</Text>
              </HStack>
            )}
          </HStack>

          <Badge
            colorScheme={source === "internal" ? "orange" : "gray"}
            bg={sourceBadgeBg}
            borderRadius="full"
            px={3}
            py={1}
          >
            {source === "internal" ? "Reading note" : "Library entry"}
          </Badge>

          <Heading
            fontSize={featured ? { base: "2xl", md: "3xl" } : "xl"}
            fontWeight="bold"
            color={headingTextColor}
            lineHeight="1.1"
          >
            {title}
          </Heading>

          {lesson && (
            <Text
              fontSize={featured ? "md" : "sm"}
              color={bodyTextColor}
              noOfLines={featured ? 3 : 2}
            >
              {lesson}
            </Text>
          )}

          {summary && summary !== lesson && (
            <Box
              w="100%"
              bg={subtlePanel}
              borderWidth="1px"
              borderColor="transparent"
              borderRadius="xl"
              px={4}
              py={3}
            >
              <HStack spacing={2} color={metaText} mb={2}>
                <IoDocumentTextOutline />
                <Text fontSize="xs" fontWeight="semibold" textTransform="uppercase">
                  Note preview
                </Text>
              </HStack>
              <Text
                fontSize={featured ? "md" : "sm"}
                color={bodyTextColor}
                noOfLines={featured ? 5 : 4}
              >
                {summary}
              </Text>
            </Box>
          )}

          {tags.length > 0 && (
            <Wrap spacing={2}>
              {tags.map((tag) => (
                <WrapItem key={tag}>
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

          {href && (
            <Box pt={2} mt="auto" w="100%">
              <Link
                as={source === "internal" ? NextLink : "a"}
                href={href}
                isExternal={source !== "internal"}
                _hover={{ textDecoration: "none" }}
                display="block"
              >
                <Button
                  rightIcon={source === "internal" ? undefined : <ExternalLinkIcon />}
                  leftIcon={featured ? <IoSparklesOutline /> : undefined}
                  colorScheme="orange"
                  variant={featured ? "solid" : "outline"}
                  size={featured ? "md" : "sm"}
                  w={featured ? { base: "100%", sm: "auto" } : "auto"}
                  _hover={{ transform: "translateY(-1px)", boxShadow: "md" }}
                  transition="all 0.2s ease-in-out"
                >
                  {ctaLabel || (source === "internal" ? "Read notes" : "Open link")}
                </Button>
              </Link>
            </Box>
          )}
        </VStack>
      </Box>
    </BaseCard>
  );
};

export default BookCard;
