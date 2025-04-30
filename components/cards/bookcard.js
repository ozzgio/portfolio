import {
    Box,
    Heading,
    Text,
    Image,
    Icon,
    Link,
    Tag,
    Wrap,
    WrapItem,
    Button,
    Flex,
    Stack,
    useColorModeValue,
    useTheme,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FiBookOpen } from 'react-icons/fi';

function formatDate(rawDate) {
    if (!rawDate) return '';
    const date = new Date(rawDate);
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

const BookCard = ({ title, author, rating, tags, cover, lesson, link, date }) => {
    const { colors } = useTheme();
    const cardBg = useColorModeValue(colors.cardBg.default, colors.cardBg._dark);
    const cardBorder = useColorModeValue(colors.cardBorder.default, colors.cardBorder._dark);
    const headingTextColor = useColorModeValue(colors.headingText.default, colors.headingText._dark);
    const bodyTextColor = useColorModeValue(colors.bodyText.default, colors.bodyText._dark);
    const tagBgColor = useColorModeValue(colors.tagBg.default, colors.tagBg._dark);
    const tagTextColor = useColorModeValue(colors.tagText.default, colors.tagText._dark);
    const iconColor = useColorModeValue('gray.500', 'gray.400');
    const lessonBgColor = useColorModeValue(colors.tagBg.default, colors.tagBg._dark);
    const lessonTextColor = useColorModeValue(colors.tagText.default, colors.tagText._dark);

    return (
        <Box
            bg={cardBg}
            borderWidth="1px"
            borderRadius="md"
            p={3}
            shadow="sm"
            maxW="360px"
            w="100%"
            mx="auto"
            borderColor={cardBorder}
        >
            <Flex direction="column" height="100%">
                <Stack spacing={3}>
                    {cover && (
                        <Flex justify="center">
                            <Image src={cover} alt={title} borderRadius="md" maxH="200px" objectFit="contain" />
                        </Flex>
                    )}
                    <Heading fontSize="md" fontWeight="bold" textAlign="center" color={headingTextColor}>
                        {title}
                    </Heading>
                    <Text fontSize="sm" textAlign="center" color={bodyTextColor}>
                        {author}
                    </Text>
                    <Flex alignItems="center" justifyContent="center">
                        <Icon as={FiBookOpen} mr={1} color={iconColor} />
                        <Text fontSize="xs" color={iconColor}>
                            {rating}
                        </Text>
                    </Flex>

                    {date && (
                        <Text fontSize="xs" color={bodyTextColor}>
                            Finished: {formatDate(date)}
                        </Text>
                    )}

                    {lesson && (
                        <Box
                            bg={lessonBgColor}
                            borderRadius="md"
                            mt={2}
                            p={2}
                        >
                            <Text
                                fontSize="sm"
                                fontStyle="italic"
                                color={lessonTextColor}
                            >
                                Key takeaway: “{lesson}”
                            </Text>
                        </Box>
                    )}

                    {tags.length > 0 && (
                        <Wrap spacing={1}>
                            {tags.map((tag, idx) => (
                                <WrapItem key={idx}>
                                    <Tag size="sm" colorScheme="orange" bg={tagBgColor} color={tagTextColor}>
                                        {tag}
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    )}

                    {link && (
                        <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
                            <Button
                                size="xs"
                                variant="ghost"
                                colorScheme="orange"
                                rightIcon={<ExternalLinkIcon />}
                            >
                                View
                            </Button>
                        </Link>
                    )}
                </Stack>
            </Flex>
        </Box>
    );
};

export default BookCard;