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
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

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

export const getStaticProps = async () => {
  try {
    const databaseId = process.env.NOTION_ARTICLES_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    const articles = response.results.map((page, _index) => {
      const props = page.properties || {};
      const dateValue = props.Date?.date?.start || props.created_time;

      return {
        title: props.Title.title[0]?.text?.content || "",
        description: props.Description.rich_text[0]?.text?.content || "",
        url: props.url.url || "",
        date: dateValue,
        formattedDate: dateValue
          ? getRelativeDate(dateValue)
          : getRelativeDate(props.created_time),
        thumbnail: props.Thumbnail?.url || "",
        tags: props.Tags.multi_select.map((tag) => tag.name) || [],
      };
    });
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
        error: "Failed to load articles.",
      },
    };
  }
};

export default ArticlesPage;
