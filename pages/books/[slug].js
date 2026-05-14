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
import {
  IoArrowBackOutline,
  IoBookOutline,
  IoCalendarOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import RatingStar from "../../components/ratingstar";
import Layout from "../../components/layouts/layout";
import {
  getBookSlug,
  getBookNotes,
  hasBookNotes,
  resolvePortfolioAssetUrl,
} from "../../libs/contentUtils";

const formatAbsoluteDate = (dateStr) => {
  if (!dateStr) return "";

  try {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
};

export default function BookDetailPage({ book }) {
  const mutedText = useColorModeValue("gray.600", "gray.400");
  const proseBg = useColorModeValue("white", "whiteAlpha.100");
  const proseBorder = useColorModeValue("blackAlpha.100", "whiteAlpha.200");
  const takedownColor = useColorModeValue("gray.700", "gray.300");
  const emptyStateBg = useColorModeValue("gray.50", "whiteAlpha.50");

  if (!book) return null;

  const canonicalUrl = `https://ozzo.blog/books/${book.slug}`;

  return (
    <Layout title={`${book.title} — Reading Notes`}>
      <Head>
        <meta
          name="description"
          content={`Book details, lessons, and reading notes from ${book.title} by ${book.author}.`}
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
              {book.date && (
                <HStack spacing={2} color={mutedText}>
                  <Icon as={IoCalendarOutline} />
                  <Text>{formatAbsoluteDate(book.date)}</Text>
                </HStack>
              )}
              {book.rating > 0 && (
                <HStack spacing={2}>
                  <RatingStar rating={book.rating} />
                  <Text color="orange.500" fontWeight="bold">
                    {book.rating}
                  </Text>
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
            <Box w="100%" borderLeftWidth="3px" borderLeftColor="orange.400" pl={4}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                color={mutedText}
                mb={1}
              >
                Main takedown
              </Text>
              <Text fontStyle="italic" color={takedownColor} fontSize="md">
                {book.lesson}
              </Text>
            </Box>
          )}

          {book.notes ? (
            <Box
              w="100%"
              p={{ base: 5, md: 8 }}
              borderWidth="1px"
              borderColor={proseBorder}
              borderRadius="2xl"
              bg={proseBg}
            >
              <Box className="article-prose">
                <HStack spacing={2} color={mutedText} mb={4}>
                  <Icon as={IoDocumentTextOutline} />
                  <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
                    Reading notes
                  </Text>
                </HStack>
                <ReactMarkdown>{book.notes}</ReactMarkdown>
              </Box>
            </Box>
          ) : (
            <Box
              w="100%"
              p={{ base: 5, md: 8 }}
              borderWidth="1px"
              borderColor={proseBorder}
              borderRadius="2xl"
              bg={emptyStateBg}
            >
              <VStack align="start" spacing={3}>
                <HStack spacing={2} color={mutedText}>
                  <Icon as={IoDocumentTextOutline} />
                  <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
                    Detail page
                  </Text>
                </HStack>
                <Text color={mutedText}>
                  Full reading notes for this book have not been published yet. The lesson
                  above is the current public summary from the vault export.
                </Text>
                {book.url && (
                  <Link href={book.url} color="orange.500" fontWeight="semibold" isExternal>
                    Open original link
                  </Link>
                )}
              </VStack>
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
        .map((book) => getBookSlug(book))
        .filter(Boolean)
        .map((slug) => ({ params: { slug: String(slug) } }))
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
            getBookSlug(entry) === params?.slug,
        )
      : null;

    if (!book) return { notFound: true, revalidate: 60 };

    return {
      props: {
        book: {
          title: String(book.title || ""),
          author: String(book.author || ""),
          date: String(book.date || ""),
          slug: getBookSlug(book),
          notes: getBookNotes(book),
          hasNotes: hasBookNotes(book),
          lesson: String(book.lesson || ""),
          rating: typeof book.rating === "number" ? book.rating : 0,
          tags: Array.isArray(book.tags) ? book.tags.filter(Boolean) : [],
          cover: resolvePortfolioAssetUrl(book.cover),
          url: String(book.url || ""),
        },
      },
      revalidate: 60,
    };
  } catch {
    return { notFound: true, revalidate: 60 };
  }
}
