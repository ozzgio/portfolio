import {
    Container,
    Heading,
    SimpleGrid,
    Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/article'
import ArticleCard from '../components/articlecard'

const articles = [
    {
        title: 'How AI is Transforming Business',
        description: 'Exploring how AI technologies are reshaping industries.',
        url: 'https://www.linkedin.com/pulse/how-ai-transforming-business-ozzola-giorgio',
        date: 'April 10, 2025'
    },
    {
        title: 'Lessons from Building a Personal Brand',
        description: 'Insights from my journey of sharing content on LinkedIn.',
        url: 'https://www.linkedin.com/pulse/lessons-personal-brand-building-ozzola-giorgio',
        date: 'March 3, 2025'
    }
]

const MotionBox = motion(Box)

const ArticlesPage = () => {
    return (
        <Layout title="Articles">
            <Container>
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Heading as="h1" mb={6}>
                        📚 My LinkedIn Articles
                    </Heading>
                    <SimpleGrid columns={[1, 1, 2]} spacing={6}>
                        {articles.map((article, idx) => (
                            <ArticleCard key={idx} {...article} />
                        ))}
                    </SimpleGrid>
                </MotionBox>
            </Container>
        </Layout>
    )
}

export default ArticlesPage
