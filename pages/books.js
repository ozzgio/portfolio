import {
  Heading,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Box,
  Icon,
  Select,
  VStack,
} from "@chakra-ui/react";
import { IoBook } from "react-icons/io5";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/layout";
import BookCard from "../components/cards/bookcard";

const MotionBox = motion.create(Box);

const BooksPage = ({ books, error }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortOption, setSortOption] = useState("highest_rating");

  const allTags = useMemo(
    () =>
      Array.from(
        new Set(
          Array.isArray(books) ? books.flatMap((book) => book.tags || []) : [],
        ),
      )
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b)),
    [books],
  );

  const sortedAndFilteredBooks = useMemo(() => {
    let currentBooks = Array.isArray(books) ? books : [];

    if (selectedTag) {
      currentBooks = currentBooks.filter((book) =>
        book.tags.includes(selectedTag),
      );
    }

    switch (sortOption) {
      case "highest_rating":
        currentBooks.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "lowest_rating":
        currentBooks.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
        break;
      case "alphabetical":
        currentBooks.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    currentBooks = currentBooks.map((book) => ({
      ...book,
      tags: book.tags ? [...book.tags].sort() : [],
    }));

    return currentBooks;
  }, [books, selectedTag, sortOption]);

  return (
    <Layout title="Books">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h1" mb={6}>
          My Books Library
          <Icon ml={2} fontSize="2xl">
            <IoBook />
          </Icon>
        </Heading>

        {error ? (
          <Text color="red.500">{error}</Text>
        ) : sortedAndFilteredBooks.length === 0 ? (
          <Text>No books found.</Text>
        ) : (
          <VStack spacing={4} align="stretch">
            <HStack flexWrap="wrap" spacing={3}>
              <Button
                size="sm"
                colorScheme={!selectedTag ? "orange" : "gray"}
                onClick={() => setSelectedTag(null)}
                variant={!selectedTag ? "solid" : "outline"}
              >
                All
              </Button>
              {allTags.map((tag, idx) => (
                <Button
                  key={idx}
                  size="sm"
                  variant={selectedTag === tag ? "solid" : "outline"}
                  colorScheme="orange"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </HStack>
            <Select
              placeholder="Sort by"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              width="fit-content"
              mb={4}
            >
              <option value="highest_rating">Highest Rating</option>
              <option value="lowest_rating">Lowest Rating</option>
              <option value="alphabetical">Alphabetical</option>
            </Select>

            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={6}
              gridAutoRows="1fr"
            >
              {sortedAndFilteredBooks.map((book, idx) => (
                <BookCard key={idx} {...book} />
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </MotionBox>
    </Layout>
  );
};

export const getStaticProps = async () => {
  try {
    // Fetch books from GitHub raw content
    const response = await fetch(
      'https://raw.githubusercontent.com/ozzgio/portfolio-data/main/books.json'
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status} ${response.statusText}`);
    }

    const booksData = await response.json();

    // Validate that we received an array
    if (!Array.isArray(booksData)) {
      throw new Error('Invalid JSON format: expected an array');
    }

    // Map the GitHub JSON data to match the expected format
    // The GitHub JSON already matches the Notion format, but we ensure all fields are present
    const books = booksData.map((book) => {
      // Extract lesson field - check multiple possible field names
      const lesson = book.lesson || book.what_i_learned || book.learned || '';
      
      return {
        title: book.title || '',
        author: book.author || '',
        rating: typeof book.rating === 'number' ? book.rating : null,
        tags: Array.isArray(book.tags) ? book.tags : [],
        cover: book.cover || '',
        lesson: lesson.trim(), // Trim whitespace
        date: book.date || '',
      };
    });

    // Sort by rating (highest first) to match previous behavior
    books.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return {
      props: {
        books: Array.isArray(books) ? books : [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to fetch books in getStaticProps:", error);
    return {
      props: {
        books: [],
        error: "Failed to load books. Please try again later.",
      },
    };
  }
};

export default BooksPage;
