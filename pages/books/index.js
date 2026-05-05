import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  IoBookOutline,
  IoCloseCircleOutline,
  IoFlashOutline,
  IoPricetagOutline,
  IoSearchOutline,
  IoStarOutline,
} from "react-icons/io5";
import Layout from "../../components/layouts/layout";
import BookCard from "../../components/cards/bookcard";

const MotionBox = motion.create(Box);

const BooksPage = ({ books, error }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortOption, setSortOption] = useState("highest_rating");
  const [searchQuery, setSearchQuery] = useState("");

  const heroBg = useColorModeValue(
    "linear(to-br, orange.50, white 40%, orange.100)",
    "linear(to-br, gray.900, orange.900, gray.900)",
  );
  const heroBorder = useColorModeValue("orange.200", "orange.700");
  const mutedText = useColorModeValue("gray.600", "gray.400");
  const panelBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.100");
  const panelBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const accentSubtle = useColorModeValue("orange.50", "orange.900");

  const allTags = useMemo(() => {
    const tagCounts = new Map();
    (Array.isArray(books) ? books : []).forEach((book) => {
      (book.tags || []).forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });
    return [...tagCounts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag, count]) => ({ tag, count }));
  }, [books]);

  const sortedBooks = useMemo(() => {
    const list = [...(Array.isArray(books) ? books : [])];
    if (sortOption === "highest_rating") list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    else if (sortOption === "lowest_rating") list.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
    else if (sortOption === "alphabetical") list.sort((a, b) => a.title.localeCompare(b.title));
    return list.map((book) => ({ ...book, tags: book.tags ? [...book.tags].sort() : [] }));
  }, [books, sortOption]);

  const filteredBooks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return sortedBooks.filter((book) => {
      const matchesTag = selectedTag ? book.tags?.includes(selectedTag) : true;
      const matchesQuery = query
        ? [book.title, book.author, book.lesson, ...(book.tags || [])]
            .join(" ")
            .toLowerCase()
            .includes(query)
        : true;
      return matchesTag && matchesQuery;
    });
  }, [searchQuery, selectedTag, sortedBooks]);

  const currentlyReading = useMemo(
    () => sortedBooks.filter((b) => b.status === "reading").length,
    [sortedBooks],
  );

  const hasActiveFilters = Boolean(selectedTag || searchQuery.trim());
  const resetFilters = () => { setSelectedTag(null); setSearchQuery(""); };

  const featuredBook = filteredBooks[0] || null;
  const bookGrid = featuredBook ? filteredBooks.slice(1) : [];

  return (
    <Layout
      title="Books and Reading Notes for Builders"
      description="A curated library of books read by Ozzo, with short notes and lessons on software, product building, and personal growth."
      keywords="developer reading list, software engineering books, indie builder books, startup books, personal knowledge base"
      path="/books"
    >
      <MotionBox
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <VStack spacing={8} align="stretch">
          <Box
            bgGradient={heroBg}
            borderWidth="1px"
            borderColor={heroBorder}
            borderRadius="3xl"
            px={{ base: 5, md: 8 }}
            py={{ base: 6, md: 8 }}
            boxShadow="xl"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: "absolute",
              width: "320px",
              height: "320px",
              right: "-120px",
              top: "-140px",
              borderRadius: "full",
              bg: "orange.300",
              opacity: 0.15,
              filter: "blur(6px)",
            }}
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              justify="space-between"
              spacing={8}
              position="relative"
              zIndex={1}
            >
              <VStack align="start" spacing={5} maxW="2xl">
                <Badge
                  colorScheme="orange"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  Reading library
                </Badge>
                <Box>
                  <Heading
                    as="h1"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    lineHeight="1"
                    mb={3}
                  >
                    Books that shaped how I build.
                  </Heading>
                  <Text fontSize={{ base: "md", md: "lg" }} color={mutedText}>
                    What I read, what stuck, and why. One lesson per book — the rest in the notes.
                  </Text>
                </Box>
              </VStack>

              <SimpleGrid
                columns={{ base: 1, sm: 3 }}
                spacing={3}
                minW={{ base: "100%", lg: "380px" }}
                maxW="540px"
              >
                <Box bg={panelBg} borderWidth="1px" borderColor={panelBorder} borderRadius="2xl" p={4}>
                  <HStack mb={2}>
                    <Icon as={IoBookOutline} color="orange.400" />
                    <Text fontSize="sm" color={mutedText}>Books</Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold">{sortedBooks.length}</Text>
                </Box>
                <Box bg={panelBg} borderWidth="1px" borderColor={panelBorder} borderRadius="2xl" p={4}>
                  <HStack mb={2}>
                    <Icon as={IoPricetagOutline} color="orange.400" />
                    <Text fontSize="sm" color={mutedText}>Tags</Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold">{allTags.length}</Text>
                </Box>
                <Box bg={panelBg} borderWidth="1px" borderColor={panelBorder} borderRadius="2xl" p={4}>
                  <HStack mb={2}>
                    <Icon as={IoStarOutline} color="orange.400" />
                    <Text fontSize="sm" color={mutedText}>Reading</Text>
                  </HStack>
                  <Text fontSize="2xl" fontWeight="bold">{currentlyReading}</Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Box>

          {error ? (
            <Text color="red.500">{error}</Text>
          ) : (
            <VStack spacing={6} align="stretch">
              <Box
                borderWidth="1px"
                borderColor={panelBorder}
                borderRadius="3xl"
                p={{ base: 4, md: 5 }}
                bg={panelBg}
                backdropFilter="blur(12px)"
              >
                <Stack direction={{ base: "column", xl: "row" }} spacing={4}>
                  <InputGroup flex={1}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={IoSearchOutline} color="gray.400" />
                    </InputLeftElement>
                    <Input
                      placeholder="Search titles, authors, or lessons"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </InputGroup>
                  <Select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    maxW={{ base: "100%", xl: "220px" }}
                  >
                    <option value="highest_rating">Highest Rating</option>
                    <option value="lowest_rating">Lowest Rating</option>
                    <option value="alphabetical">Alphabetical</option>
                  </Select>
                  {hasActiveFilters && (
                    <Button
                      leftIcon={<IoCloseCircleOutline />}
                      variant="ghost"
                      colorScheme="orange"
                      onClick={resetFilters}
                    >
                      Clear filters
                    </Button>
                  )}
                </Stack>

                <Wrap mt={4} spacing={3}>
                  <WrapItem>
                    <Button
                      size="sm"
                      colorScheme={!selectedTag ? "orange" : "gray"}
                      variant={!selectedTag ? "solid" : "outline"}
                      onClick={() => setSelectedTag(null)}
                    >
                      All ({sortedBooks.length})
                    </Button>
                  </WrapItem>
                  {allTags.map(({ tag, count }) => (
                    <WrapItem key={tag}>
                      <Button
                        size="sm"
                        colorScheme="orange"
                        variant={selectedTag === tag ? "solid" : "outline"}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag} ({count})
                      </Button>
                    </WrapItem>
                  ))}
                </Wrap>

                <HStack mt={4} spacing={3} color={mutedText} fontSize="sm" flexWrap="wrap">
                  <Icon as={IoBookOutline} />
                  <Text>{filteredBooks.length} selected</Text>
                  <Text>•</Text>
                  <Text>
                    {sortOption === "highest_rating"
                      ? "Sorted by rating"
                      : sortOption === "lowest_rating"
                        ? "Lowest first"
                        : "Sorted alphabetically"}
                  </Text>
                </HStack>
              </Box>

              {filteredBooks.length === 0 ? (
                <Box
                  borderWidth="1px"
                  borderStyle="dashed"
                  borderColor={heroBorder}
                  borderRadius="3xl"
                  p={8}
                  textAlign="center"
                  bg={accentSubtle}
                >
                  <Icon as={IoFlashOutline} boxSize={8} color="orange.400" mb={3} />
                  <Heading as="h2" size="md" mb={2}>No books found</Heading>
                  <Text color={mutedText}>Try a different search or clear the tag filter.</Text>
                </Box>
              ) : (
                <VStack spacing={8} align="stretch">
                  {featuredBook && (
                    <Box>
                      <HStack spacing={3} mb={4} flexWrap="wrap">
                        <Badge colorScheme="orange" px={3} py={1} borderRadius="full">
                          Top result
                        </Badge>
                        <Text fontSize="sm" color={mutedText}>
                          Highest rated from your selection
                        </Text>
                      </HStack>
                      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={6}>
                        <BookCard {...featuredBook} featured />
                      </SimpleGrid>
                    </Box>
                  )}

                  {bookGrid.length > 0 && (
                    <Box>
                      <Flex justify="space-between" mb={4} gap={3} wrap="wrap" align="center">
                        <Heading as="h2" size="md">Library</Heading>
                        <Text fontSize="sm" color={mutedText}>
                          {bookGrid.length} more books
                        </Text>
                      </Flex>
                      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6} gridAutoRows="1fr">
                        {bookGrid.map((book, idx) => (
                          <BookCard key={book.slug || idx} {...book} />
                        ))}
                      </SimpleGrid>
                    </Box>
                  )}
                </VStack>
              )}
            </VStack>
          )}
        </VStack>
      </MotionBox>
    </Layout>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ozzgio/portfolio-data/main/books.json",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status} ${response.statusText}`);
    }

    const booksData = await response.json();

    if (!Array.isArray(booksData)) {
      throw new Error("Invalid JSON format: expected an array");
    }

    const books = booksData.map((book) => ({
      title: book.title || "",
      author: book.author || "",
      rating: typeof book.rating === "number" ? book.rating : null,
      tags: Array.isArray(book.tags) ? book.tags : [],
      cover: book.cover || "",
      lesson: (book.lesson || "").trim(),
      date: book.date || "",
      slug: book.slug || "",
      source: book.source || "external",
      status: book.status || "read",
    }));

    return { props: { books }, revalidate: 60 };
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
