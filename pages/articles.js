import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/layout";
import ArticleCard from "../components/cards/articlecard";
import { IoDocumentText } from "react-icons/io5";

const MotionBox = motion.create(Box);

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  
  try {
    const articleDate = new Date(dateStr);
    if (isNaN(articleDate.getTime())) return dateStr; // Invalid date, return original
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    articleDate.setHours(0, 0, 0, 0);

    const diffTime = today - articleDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Handle future dates
    if (diffDays < 0) {
      const absDays = Math.abs(diffDays);
      if (absDays === 1) return "Tomorrow";
      return `In ${absDays} days`;
    }

    switch (diffDays) {
      case 0:
        return "Today";
      case 1:
        return "Yesterday";
      default:
        return `${diffDays} days ago`;
    }
  } catch (e) {
    return dateStr; // Return original if parsing fails
  }
};

const ArticlesPage = ({ articles, error }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortOption, setSortOption] = useState("newest");
  const [isMounted, setIsMounted] = useState(false);

  // Only format dates after component mounts to avoid hydration mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sortedArticles = useMemo(() => {
    let currentArticles = articles
      .filter((article) => article.date)
      .map((article) => {
        // Only format dates after mount to avoid hydration mismatches
        const formattedDate = isMounted && article.date ? formatDate(article.date) : (article.date || '');
        return { ...article, formattedDate: formattedDate || article.date || '' };
      });

    if (sortOption === "newest") {
      currentArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldest") {
      currentArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "alphabetical") {
      currentArticles.sort((a, b) => a.title.localeCompare(b.title));
    }

    return currentArticles;
  }, [articles, sortOption, isMounted]);

  const allTags = useMemo(() => {
    return Array.from(new Set(sortedArticles.flatMap((a) => a.tags || [])));
  }, [sortedArticles]);

  const filteredArticles = useMemo(() => {
    return selectedTag
      ? sortedArticles.filter((a) => a.tags?.includes(selectedTag))
      : sortedArticles;
  }, [sortedArticles, selectedTag]);

  return (
    <Layout title="Articles">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading as="h1" mb={6} id="articles-heading">
          My Articles
          <Icon ml={2} fontSize="2xl">
            <IoDocumentText />
          </Icon>
        </Heading>
        {error ? (
          <Text color="red.500">{error}</Text>
        ) : filteredArticles.length === 0 ? (
          <Text>No articles found.</Text>
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
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alphabetical">Alphabetical</option>
            </Select>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {filteredArticles.map((article, idx) => (
                <ArticleCard key={idx} {...article} />
              ))}
            </SimpleGrid>
          </VStack>
        )}
      </MotionBox>
    </Layout>
  );
};


// Function to resolve image URLs
// Images are stored in Obsidian vault and served via GitHub raw content
function resolveImageUrl(url) {
  if (!url || typeof url !== 'string') return url;

  // If it's already a full URL (http/https), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If it's a relative path (starts with /), it's a local image in public folder
  if (url.startsWith('/')) {
    return url;
  }

  // If it's just a filename, serve from portfolio data repo via jsDelivr CDN
  // jsDelivr is free, fast, and reliable - serves from GitHub repos
  if (!url.includes('/') && !url.includes('http')) {
    const dataRepo = 'ozzgio/portfolio-data';
    const branch = 'main';
    // Use jsDelivr CDN instead of raw.githubusercontent.com - faster and more reliable
    return `https://cdn.jsdelivr.net/gh/${dataRepo}@${branch}/images/${url}`;
  }

  return url;
}

export const getStaticProps = async () => {
  try {
    // Fetch articles from GitHub raw content
    const response = await fetch(
      'https://raw.githubusercontent.com/ozzgio/portfolio-data/main/articles.json'
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }

    const articlesData = await response.json();

    // Validate that we received an array
    if (!Array.isArray(articlesData)) {
      throw new Error('Invalid JSON format: expected an array');
    }

    // Map the GitHub JSON data to match the expected format
    // Filter out any invalid articles and ensure all fields are properly set
    // NOTE: Don't format dates in getStaticProps to avoid hydration mismatches
    // Format dates on the client side instead
    const articles = articlesData
      .filter((article) => article && article.title && article.url) // Only include valid articles
      .map((article) => {
        const dateValue = article.date || '';
        const thumbnail = article.thumbnail || '';
        
        return {
          title: String(article.title || ''),
          description: String(article.description || ''),
          url: String(article.url || ''),
          date: dateValue,
          formattedDate: null, // Will be formatted on client to avoid hydration issues
          thumbnail: thumbnail ? resolveImageUrl(thumbnail) : '',
          tags: Array.isArray(article.tags) ? article.tags.filter(Boolean) : [],
        };
      })
      .filter((article) => article.title && article.url); // Double-check after mapping

    return {
      props: {
        articles: Array.isArray(articles) ? articles : [],
      },
      revalidate: 10, // Revalidate every 10 seconds for faster updates
    };
  } catch (error) {
    console.error("Failed to fetch articles in getStaticProps:", error);
    return {
      props: {
        articles: [],
        error: "Failed to load articles. Please try again later.",
      },
    };
  }
};

export default ArticlesPage;
