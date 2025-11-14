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
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/layout";
import ArticleCard from "../components/cards/articlecard";
import { IoDocumentText } from "react-icons/io5";

const MotionBox = motion.create(Box);

const formatDate = (dateStr) => {
  if (!dateStr) return null;

  const articleDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  articleDate.setHours(0, 0, 0, 0);

  const diffTime = today - articleDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  switch (diffDays) {
    case 0:
      return "Today";
    case 1:
      return "Yesterday";
    default:
      return diffDays > 1 ? `${diffDays} days ago` : null;
  }
};

const ArticlesPage = ({ articles, error }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortOption, setSortOption] = useState("newest");

  const sortedArticles = useMemo(() => {
    let currentArticles = articles
      .filter((article) => article.date)
      .map((article) => {
        const formattedDate = formatDate(article.date);
        return formattedDate ? { ...article, formattedDate } : null;
      })
      .filter(Boolean);

    if (sortOption === "newest") {
      currentArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldest") {
      currentArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "alphabetical") {
      currentArticles.sort((a, b) => a.title.localeCompare(b.title));
    }

    return currentArticles;
  }, [articles, sortOption]);

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

function getRelativeDate(dateString) {
  const now = new Date();
  const then = new Date(dateString);
  const diff = Math.floor((now - then) / (1000 * 60 * 60 * 24));

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  return `${diff} days ago`;
}

async function convertImgurUrl(url) {
  if (!url || typeof url !== 'string') return url;
  
  // If already a direct image URL (i.imgur.com), return as-is
  if (url.includes('i.imgur.com')) {
    return url;
  }
  
  // Check if it's an Imgur album or gallery URL that needs conversion
  const albumMatch = url.match(/imgur\.com\/a\/([a-zA-Z0-9]+)/);
  const galleryMatch = url.match(/imgur\.com\/g\/([a-zA-Z0-9]+)/);
  
  if (albumMatch || galleryMatch) {
    try {
      // Try to fetch the album/gallery page and extract the first image
      // Imgur albums have the image data in a JSON script tag
      const pageUrl = albumMatch 
        ? `https://imgur.com/a/${albumMatch[1]}`
        : `https://imgur.com/g/${galleryMatch[1]}`;
      
      const response = await fetch(pageUrl);
      if (response.ok) {
        const html = await response.text();
        
        // Try to find the image hash in the page data
        // Imgur stores image data in window.postDataJSON or similar
        const jsonMatch = html.match(/window\._sharedData\s*=\s*({.+?});/);
        if (jsonMatch) {
          try {
            const data = JSON.parse(jsonMatch[1]);
            // Navigate through the data structure to find the first image
            if (data.post && data.post.images && data.post.images[0]) {
              const imageHash = data.post.images[0].hash;
              const imageExt = data.post.images[0].ext || '.jpg';
              return `https://i.imgur.com/${imageHash}${imageExt}`;
            }
          } catch (e) {
            // JSON parse failed, try alternative method
          }
        }
        
        // Alternative: look for image hash in meta tags or data attributes
        const hashMatch = html.match(/data-id="([a-zA-Z0-9]+)"/) || 
                         html.match(/imageHash["']:\s*["']([a-zA-Z0-9]+)["']/);
        if (hashMatch) {
          return `https://i.imgur.com/${hashMatch[1]}.jpg`;
        }
      }
    } catch (error) {
      console.warn(`Failed to resolve Imgur URL ${url}:`, error);
    }
  }
  
  // Fallback: try to convert direct imgur.com links (without /a/ or /g/)
  const directMatch = url.match(/imgur\.com\/([a-zA-Z0-9]+)$/);
  if (directMatch) {
    return `https://i.imgur.com/${directMatch[1]}.jpg`;
  }
  
  // Return original URL if no conversion possible
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
    // The GitHub JSON already matches the Notion format, but we ensure all fields are present
    // Convert Imgur URLs to direct image URLs
    const articles = await Promise.all(
      articlesData.map(async (article) => {
        const dateValue = article.date || '';
        const thumbnail = article.thumbnail 
          ? await convertImgurUrl(article.thumbnail) 
          : '';
        
        return {
          title: article.title || '',
          description: article.description || '',
          url: article.url || '',
          date: dateValue,
          formattedDate: dateValue ? getRelativeDate(dateValue) : null,
          thumbnail: thumbnail,
          tags: Array.isArray(article.tags) ? article.tags : [],
        };
      })
    );

    return {
      props: {
        articles: Array.isArray(articles) ? articles : [],
      },
      revalidate: 60,
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
