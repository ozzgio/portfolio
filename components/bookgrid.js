import { useEffect, useState } from 'react';
import { SimpleGrid, Box, Spinner, Center, Text } from '@chakra-ui/react';
import BookCard from './bookcard';

const BookGrid = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading books:', err);
                setError('Failed to load books');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Center py={10}>
                <Spinner size="lg" />
            </Center>
        );
    }

    if (error) {
        return (
            <Center py={10}>
                <Text color="red.500">{error}</Text>
            </Center>
        );
    }

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={4}
            maxW="1000px"
            mx="auto"
            p={4}
        >
            {books.map((book, index) => (
                <Box key={index}>
                    <BookCard {...book} />
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default BookGrid;
