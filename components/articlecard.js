// components/ArticleCard.jsx
import { Box, Heading, Text, Link, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ArticleCard = ({ title, description, url, date }) => (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        p={5}
        shadow="md"
        _hover={{ shadow: 'lg', transform: 'scale(1.01)' }}
        transition="all 0.2s ease-in-out"
    >
        <Heading fontSize="lg" mb={1}>
            {title}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
            {date}
        </Text>
        <Text mb={4}>{description}</Text>
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
)

export default ArticleCard
