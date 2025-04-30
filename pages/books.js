import {
    Heading,
    SimpleGrid,
    Spinner,
    Text,
    HStack,
    Button,
    Box
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/layout'
import BookCard from '../components/cards/bookcard'

const MotionBox = motion(Box)

const BooksPage = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedTag, setSelectedTag] = useState(null)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch('/api/books')
                const data = await res.json()
                setBooks(data)
            } catch (err) {
                console.error('Failed to fetch books:', err)
                setBooks([])
            } finally {
                setLoading(false)
            }
        }
        fetchBooks()
    }, [])

    const allTags = Array.from(
        new Set(
            Array.isArray(books)
                ? books.flatMap(book => book.tags || [])
                : []
        )
    );

    return (
        <Layout title="Books">
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Heading as="h1" mb={6}>📖 My Books Library</Heading>

                {loading ? (
                    <Spinner />
                ) : books.length === 0 ? (
                    <Text>No books found.</Text>
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

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            {(Array.isArray(books) ? books : [])
                                .filter(book => !selectedTag || book.tags.includes(selectedTag))
                                .map((book, idx) => (
                                    <BookCard key={idx} {...book} />
                                ))}
                        </SimpleGrid>
                    </>
                )}
            </MotionBox>
        </Layout>
    )
}

export default BooksPage
