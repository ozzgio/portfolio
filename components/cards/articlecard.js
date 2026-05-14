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
  Wrap,
  WrapItem,
  useColorModeValue,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { IoSparklesOutline, IoTimeOutline } from "react-icons/io5";
import BaseCard from "../basecard";

const ArticleCard = ({
  title,
  formattedDate,
  absoluteDate,
  description,
  url,
  slug,
  source = "external",
  thumbnail,
  tags,
  summary,
  featured = false,
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

  const href = source === "internal" ? `/articles/${slug}` : url;
  const leadText = description || summary || "No description provided.";

  if (!href || !title) return null;

  return (
    <BaseCard
      p={0}
      maxW="none"
      h="100%"
      borderColor={featured ? "orange.400" : undefined}
      bgGradient={featured ? `linear(to-br, ${featuredGlow}, transparent)` : undefined}
    >
      <Box display="flex" flexDirection="column" h="100%">
        {thumbnail && (
          <Box
            position="relative"
            minH={featured ? "280px" : "190px"}
            maxH={featured ? "380px" : "220px"}
            overflow="hidden"
          >
            <Image
              src={thumbnail}
              alt={title}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="transform 0.5s ease"
              _groupHover={{ transform: "scale(1.04)" }}
            />
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent 55%)"
            />
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
                Featured article
              </Badge>
            )}
          </Box>
        )}

        <VStack align="start" spacing={4} p={{ base: 5, md: 6 }} flex={1}>
          <HStack
            spacing={2}
            color={metaText}
            fontSize="sm"
            flexWrap="wrap"
            suppressHydrationWarning
            bg={subtlePanel}
            borderWidth="1px"
            borderColor="transparent"
            borderRadius="full"
            px={3}
            py={1}
          >
            <IoTimeOutline />
            {formattedDate && <Text>{formattedDate}</Text>}
            {absoluteDate && <Text>({absoluteDate})</Text>}
          </HStack>

          <Badge
            colorScheme={source === "internal" ? "orange" : "gray"}
            bg={sourceBadgeBg}
            borderRadius="full"
            px={3}
            py={1}
          >
            {source === "internal" ? "Published on ozzo.blog" : "LinkedIn post"}
          </Badge>

          <Heading
            fontSize={featured ? { base: "2xl", md: "3xl" } : "xl"}
            fontWeight="bold"
            color={headingTextColor}
            lineHeight="1.1"
          >
            {title}
          </Heading>

          <Text
            fontSize={featured ? "md" : "sm"}
            color={bodyTextColor}
            noOfLines={featured ? 3 : 2}
          >
            {leadText}
          </Text>

          {description && summary && summary !== description && (
            <Box
              w="100%"
              bg={subtlePanel}
              borderWidth="1px"
              borderColor="transparent"
              borderRadius="xl"
              px={4}
              py={3}
            >
              <Text
                fontSize={featured ? "md" : "sm"}
                color={bodyTextColor}
                noOfLines={featured ? 5 : 4}
              >
                {summary}
              </Text>
            </Box>
          )}

          {tags && Array.isArray(tags) && tags.length > 0 && (
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
                {source === "internal" ? "Read article" : "Read on LinkedIn"}
              </Button>
            </Link>
          </Box>
        </VStack>
      </Box>
    </BaseCard>
  );
};

export default ArticleCard;
