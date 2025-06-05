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
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

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
    const databaseId = process.env.NOTION_BOOKS_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ property: "Rating", direction: "descending" }],
    });

    const books = response.results.map((page) => {
      const props = page.properties;
      return {
        title: props.Title?.title[0]?.plain_text || "",
        author: props.Author?.rich_text?.[0]?.plain_text || "",
        rating: props.Rating?.number,
        tags: props.Tags?.multi_select?.map((tag) => tag.name) || [],
        cover: props.Cover?.url || "",
        lesson: props.Lesson?.rich_text?.[0]?.plain_text || "",
        date: props.Finished?.date?.start || "",
      };
    });
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
        error: "Failed to load books.",
      },
    };
  }
};

export default BooksPage;
