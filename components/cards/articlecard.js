import {
    Box,
    Heading,
    Text,
    Image,
    Wrap,
    WrapItem,
    Tag,
    Link,
    Button,
    useColorModeValue,
    useTheme,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ArticleCard = ({ title, formattedDate, description, url, thumbnail, tags }) => {
    const { colors } = useTheme();
    const cardBg = useColorModeValue(colors.cardBg.default, colors.cardBg._dark);
    const cardBorder = useColorModeValue(colors.cardBorder.default, colors.cardBorder._dark);
    const headingTextColor = useColorModeValue(colors.headingText.default, colors.headingText._dark);
    const bodyTextColor = useColorModeValue(colors.bodyText.default, colors.bodyText._dark);
    const tagBgColor = useColorModeValue(colors.tagBg.default, colors.tagBg._dark);
    const tagTextColor = useColorModeValue(colors.tagText.default, colors.tagText._dark);
    const shadow = useColorModeValue("md", "sm");
    const hoverShadow = useColorModeValue('lg', 'md');

    if (!url) return null;

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            shadow={shadow}
            _hover={{ shadow: hoverShadow, transform: 'scale(1.01)' }}
            transition="all 0.2s ease-in-out"
            bg={cardBg}
            borderColor={cardBorder}
        >
            {thumbnail && (
                <Image src={thumbnail} alt={title} borderRadius="md" mb={4} objectFit="cover" />
            )}

            <Heading fontSize="lg" mb={1} color={headingTextColor}>
                {title}
            </Heading>

            {formattedDate && (
                <Text fontSize="sm" color={bodyTextColor} mb={2}>
                    {new Date(formattedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Text>
            )}

            {description && (
                <Text fontSize="sm" color={bodyTextColor} mt={2} mb={4}>
                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                </Text>
            )}

            {tags.length > 0 && (
                <Wrap mb={4}>
                    {tags.map((tag, idx) => (
                        <WrapItem key={idx}>
                            <Tag colorScheme="orange" size="sm" bg={tagBgColor} color={tagTextColor}>
                                {tag}
                            </Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            )}

            <Link href={url} isExternal>
                <Button
                    rightIcon={<ExternalLinkIcon />}
                    colorScheme="orange"
                    variant="solid"
                    size="sm"
                    _hover={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s ease-in-out"
                >
                    Read on LinkedIn
                </Button>
            </Link>
        </Box>
    );
};

export default ArticleCard;