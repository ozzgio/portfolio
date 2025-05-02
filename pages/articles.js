import {
    Box,
    Button,
    Heading,
    HStack,
    SimpleGrid,
    Spinner,
    Text
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/layout'
import ArticleCard from '../components/cards/articlecard'

const MotionBox = motion.create(Box)

const formatDate = (dateStr) => {
    if (!dateStr) return null

    const articleDate = new Date(dateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    articleDate.setHours(0, 0, 0, 0)

    const diffTime = today - articleDate
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    switch (diffDays) {
        case 0:
            return 'Today'
        case 1:
            return 'Yesterday'
        default:
            return diffDays > 1 ? `${diffDays} days ago` : null
    }
}

const ArticlesPage = () => {
    const [rawArticles, setRawArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedTag, setSelectedTag] = useState(null)

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('/api/articles')
                const data = await res.json()
                setRawArticles(Array.isArray(data) ? data : [])
            } catch (err) {
                console.error('Fetch failed:', err)
                setRawArticles([])
            } finally {
                setLoading(false)
            }
        }
        fetchArticles()
    }, [])

    const articles = useMemo(() => {
        return rawArticles
            .filter(article => article.date)
            .map(article => {
                const formattedDate = formatDate(article.date)
                return formattedDate
                    ? { ...article, formattedDate }
                    : null
            })
            .filter(Boolean)
    }, [rawArticles])

    const allTags = useMemo(() => {
        return Array.from(new Set(articles.flatMap(a => a.tags || [])))
    }, [articles])

    const filteredArticles = useMemo(() => {
        return selectedTag
            ? articles.filter(a => a.tags?.includes(selectedTag))
            : articles
    }, [articles, selectedTag])

    return (
        <Layout title="Articles">
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Heading as="h1" mb={6} id="articles-heading">
                    ✍️ My Articles
                </Heading>
                {loading ? (
                    <Spinner />
                ) : filteredArticles.length === 0 ? (
                    <Text>No articles found.</Text>
                ) : (
                    <>
                        <HStack flexWrap="wrap" spacing={3} mb={4}>
                            <Button
                                size="sm"
                                colorScheme={!selectedTag ? 'orange' : 'gray'}
                                onClick={() => setSelectedTag(null)}
                            >
                                All
                            </Button>
                            {allTags.map((tag, idx) => (
                                <Button
                                    key={idx}
                                    size="sm"
                                    variant={selectedTag === tag ? 'solid' : 'outline'}
                                    colorScheme="orange"
                                    onClick={() => setSelectedTag(tag)}
                                >
                                    {tag}
                                </Button>
                            ))}
                        </HStack>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>                               {filteredArticles.map((article, idx) => (
                            <ArticleCard key={idx} {...article} />
                        ))}
                        </SimpleGrid>
                    </>
                )}
            </MotionBox>
        </Layout>
    )
}

export default ArticlesPage
