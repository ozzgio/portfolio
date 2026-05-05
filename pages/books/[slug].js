import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import ReactMarkdown from "react-markdown";
import { IoArrowBackOutline, IoBookOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import RatingStar from "../../components/ratingstar";
import Layout from "../../components/layouts/layout";

export default function BookDetailPage({ book }) {
  const mutedText = useColorModeValue("gray.600", "gray.400");
  const proseBg = useColorModeValue("white", "whiteAlpha.100");
  const proseBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const lessonBg = useColorModeValue("orange.50", "orange.900");
  const lessonText = useColorModeValue("orange.800", "orange.100");

  if (!book) return null;

  const canonicalUrl = `https://ozzo.blog/books/${book.slug}`;

  return (
    <Layout title={`${book.title} — Reading Notes`}>
      <Head>
        <meta
          name="description"
          content={`Reading notes and lessons from ${book.title} by ${book.author}.`}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Container maxW="4xl" py={{ base: 6, md: 10 }}>
        <VStack align="start" spacing={6}>
          <Link as={NextLink} href="/books" color="orange.500" fontWeight="semibold">
            <HStack spacing={2}>
              <Icon as={IoArrowBackOutline} />
              <Text>Back to books</Text>
            </HStack>
          </Link>

          <HStack align="start" spacing={6} flexWrap="wrap">
            {book.cover && (
              <Image
                src={book.cover}
                alt={book.title}
                borderRadius="lg"
                maxH="200px"
                objectFit="cover"
                boxShadow="xl"
                flexShrink={0}
              />
            )}
            <VStack align="start" spacing={3} flex={1} minW="200px">
              <Heading as="h1" size="xl" lineHeight="1.1">
                {book.title}
              </Heading>
              <HStack spacing={2} color={mutedText}>
                <Icon as={IoBookOutline} />
                <Text fontWeight="medium">{book.author}</Text>
              </HStack>
              {book.rating > 0 && (
                <HStack spacing={2}>
                  <RatingStar rating={book.rating} />
                  <Text color="orange.500" fontWeight="bold">{book.rating}</Text>
                </HStack>
              )}
              <HStack flexWrap="wrap" spacing={2}>
                {book.tags?.map((tag) => (
                  <Tag key={tag} colorScheme="orange" borderRadius="full">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </HStack>

          {book.lesson && (
            <Box w="100%" bg={lessonBg} borderRadius="lg" p={4}>
              <HStack align="start" spacing={3}>
                <Icon as={FaQuoteLeft} color={lessonText} mt={1} flexShrink={0} />
                <Text fontStyle="italic" color={lessonText}>
                  {book.lesson}
                </Text>
              </HStack>
            </Box>
          )}

          {book.notes && (
            <Box
              w="100%"
              p={{ base: 5, md: 8 }}
              borderWidth="1px"
              borderColor={proseBorder}
              borderRadius="2xl"
              bg={proseBg}
            >
              <Box className="article-prose">
                <ReactMarkdown>{book.notes}</ReactMarkdown>
              </Box>
            </Box>
          )}
        </VStack>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ozzgio/portfolio-data/main/books.json",
  );
  const books = response.ok ? await response.json() : [];

  const paths = Array.isArray(books)
    ? books
        .filter((book) => book?.source === "internal" && book?.slug)
        .map((book) => ({ params: { slug: String(book.slug) } }))
    : [];

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ozzgio/portfolio-data/main/books.json",
    );

    if (!response.ok) return { notFound: true, revalidate: 60 };

    const books = await response.json();
    const book = Array.isArray(books)
      ? books.find(
          (entry) =>
            entry?.source === "internal" &&
            entry?.slug === params?.slug &&
            typeof entry?.notes === "string" &&
            entry.notes.trim(),
        )
      : null;

    if (!book) return { notFound: true, revalidate: 60 };

    return {
      props: {
        book: {
          title: String(book.title || ""),
          author: String(book.author || ""),
          date: String(book.date || ""),
          slug: String(book.slug || ""),
          notes: String(book.notes || ""),
          lesson: String(book.lesson || ""),
          rating: typeof book.rating === "number" ? book.rating : 0,
          tags: Array.isArray(book.tags) ? book.tags.filter(Boolean) : [],
          cover: book.cover ? String(book.cover) : "",
        },
      },
      revalidate: 60,
    };
  } catch {
    return { notFound: true, revalidate: 60 };
  }
}
