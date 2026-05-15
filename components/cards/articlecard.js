import {
  Box,
  HStack,
  Icon,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IoCalendarOutline } from "react-icons/io5";

const formatAbsoluteDate = (dateStr) => {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
};

const ArticleCard = ({
  title,
  absoluteDate,
  date,
  description,
  summary,
  url,
  slug,
  source = "external",
  tags,
}) => {
  const border = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const bg = useColorModeValue("white", "whiteAlpha.50");
  const hoverBorder = useColorModeValue("orange.300", "orange.600");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const bodyColor = useColorModeValue("gray.600", "gray.400");
  const mutedColor = useColorModeValue("gray.500", "gray.500");

  const href = source === "internal" ? `/articles/${slug}` : url;
  const displayDate = absoluteDate || formatAbsoluteDate(date);
  const leadText = description || summary || "";

  if (!href || !title) return null;

  const isInternal = source === "internal";

  return (
    <Box
      as={isInternal ? NextLink : "a"}
      href={href}
      {...(!isInternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      display="block"
      _hover={{ textDecoration: "none" }}
    >
      <Box
        borderWidth="1px"
        borderColor={border}
        borderRadius="xl"
        p={{ base: 4, md: 5 }}
        bg={bg}
        _hover={{ borderColor: hoverBorder }}
        transition="border-color 0.15s"
      >
        <VStack align="start" spacing={2}>
          <HStack spacing={3} w="100%" justify="space-between">
            <HStack spacing={1} color={mutedColor} fontSize="xs">
              <Icon as={IoCalendarOutline} boxSize={3} />
              <Text>{displayDate}</Text>
            </HStack>
            <HStack spacing={1}>
              {!isInternal && <ExternalLinkIcon boxSize={3} color={mutedColor} />}
              <Text fontSize="xs" color={mutedColor}>
                {isInternal ? "ozzo.blog" : "LinkedIn"}
              </Text>
            </HStack>
          </HStack>

          <Text fontSize="sm" fontWeight="semibold" color={headingColor} lineHeight="1.4">
            {title}
          </Text>

          {leadText && (
            <Text fontSize="xs" color={bodyColor} lineHeight="1.6" noOfLines={2}>
              {leadText}
            </Text>
          )}

          {tags?.length > 0 && (
            <HStack spacing={1} flexWrap="wrap" pt={1}>
              {tags.slice(0, 3).map((tag) => (
                <Tag key={tag} size="sm" colorScheme="orange" borderRadius="full">
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default ArticleCard;
