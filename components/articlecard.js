import { Box, Heading, Text, Image, Wrap, WrapItem, Tag, Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ArticleCard = ({ title, formattedDate, description, url, thumbnail, tags }) => {
    if (!url) return null;

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            shadow="md"
            _hover={{ shadow: 'lg', transform: 'scale(1.01)' }}
            transition="all 0.2s ease-in-out"
        >
            {thumbnail && (
                <Image src={thumbnail} alt={title} borderRadius="md" mb={4} objectFit="cover" />
            )}

            <Heading fontSize="lg" mb={1}>
                {title}
            </Heading>

            {formattedDate && (
                <Text fontSize="sm" color="gray.500" mb={2}>
                    {formattedDate}
                </Text>
            )}

            {description && (
                <Text fontSize="sm" color="gray.600" mt={2} mb={4}>
                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                </Text>
            )}

            {tags.length > 0 && (
                <Wrap mb={4}>
                    {tags.map((tag, idx) => (
                        <WrapItem key={idx}>
                            <Tag colorScheme="orange" size="sm">{tag}</Tag>
                        </WrapItem>
                    ))}
                </Wrap>
            )}

            <Link href={url} isExternal>
                <Button
                    rightIcon={<ExternalLinkIcon />}
                    colorScheme="orange"
                    variant="outline"
                    size="sm"
                >
                    Read on LinkedIn
                </Button>
            </Link>
        </Box>
    );
}

export default ArticleCard;
