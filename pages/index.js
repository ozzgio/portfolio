import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { IoDocumentText, IoLaptopOutline, IoRocketOutline } from "react-icons/io5";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/layout";
import BaseCard from "../components/basecard";
import {
  getArticleSummary,
  isInternalArticle,
  resolvePortfolioAssetUrl,
} from "../libs/contentUtils";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const formatAbsoluteDate = (dateStr) => {
  if (!dateStr) return "";

  try {
    return new Intl.DateTimeFormat("en", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateStr));
  } catch (error) {
    return dateStr;
  }
};

const normalizeArticle = (article) => {
  const internal = isInternalArticle(article);
  const slug =
    typeof article.slug === "string" && article.slug.trim() ? article.slug.trim() : "";
  const externalUrl =
    typeof article.url === "string" && article.url.trim() ? article.url.trim() : "";
  const url = internal ? `/articles/${slug}` : externalUrl;

  return {
    title: String(article.title || ""),
    description: String(article.description || ""),
    summary: getArticleSummary(article, 140),
    url,
    date: String(article.date || ""),
    formattedDate: formatAbsoluteDate(article.date || ""),
    source: internal ? "internal" : "external",
    thumbnail: article.thumbnail ? resolvePortfolioAssetUrl(article.thumbnail) : "",
  };
};

const Home = ({ latestArticles = [], articlesError = false }) => {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ozzo.blog/#person",
        name: "Giorgio Ozzola",
        alternateName: "Ozzo",
        url: "https://ozzo.blog",
        sameAs: [
          "https://github.com/ozzgio",
          "https://www.linkedin.com/in/ozzolagiorgio/",
        ],
        jobTitle: "Solo Developer",
        description:
          "Italian solo developer building systems for autonomy with practical AI and human review.",
      },
      {
        "@type": "WebSite",
        "@id": "https://ozzo.blog/#website",
        url: "https://ozzo.blog",
        name: "Ozzo.blog",
        description:
          "Writing about Synergym, my personal operating system, and the stack decisions behind both.",
        publisher: {
          "@id": "https://ozzo.blog/#person",
        },
      },
    ],
  };

  return (
    <Layout
      title="Home"
      metaTitle="Ozzo — solo developer building systems for autonomy"
      description="Italian solo developer building systems for autonomy. Writing about Synergym, my personal operating system, and the stack decisions behind both."
      keywords="solo developer, practical AI, systems for autonomy, Synergym, Italian developer, build in public"
      path="/"
      jsonLd={homepageSchema}
    >
      <br />
      <Container>
        <Box
          borderRadius="xl"
          bgGradient="linear(to-r, orange.50, orange.100)"
          _dark={{
            bgGradient: "linear(to-r, orange.900, orange.800)",
            borderColor: "orange.700",
          }}
          mb={8}
          p={6}
          textAlign="center"
          boxShadow="lg"
          borderWidth="1px"
          borderColor="orange.200"
        >
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="orange.800"
            _dark={{ color: "orange.100" }}
          >
            Italian solo developer building systems for autonomy.
          </Text>
        </Box>
        <Box
          display={{ md: "flex" }}
          mb={10}
          p={6}
          borderRadius="xl"
          bgGradient="linear(to-br, whiteAlpha.50, whiteAlpha.100)"
          _dark={{ bgGradient: "linear(to-br, whiteAlpha.50, whiteAlpha.100)" }}
          boxShadow="md"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Heading
              as="h1"
              variant="page-title"
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={4}
              bgGradient="linear(to-r, orange.400, orange.600)"
              _dark={{ bgGradient: "linear(to-r, orange.300, orange.500)" }}
              bgClip="text"
            >
              Ozzo
            </Heading>
            <Text fontSize="lg" fontWeight="medium">
              Practical AI use with human review for peers, solo builders, and operators.
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 8 }}
            textAlign="center"
          >
            <Box
              borderColor="orange.300"
              _dark={{ borderColor: "orange.600" }}
              borderWidth={3}
              borderStyle="solid"
              w="120px"
              h="120px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              boxShadow="xl"
              _hover={{
                transform: "scale(1.05)",
                borderColor: "orange.400",
                _dark: { borderColor: "orange.500" },
              }}
              transition="all 0.3s"
            >
              <ProfileImage
                src="/images/propic.jpg"
                alt="Profile image"
                borderRadius="full"
                width={120}
                height={120}
                objectFit="cover"
                style={{ aspectRatio: "1 / 1" }}
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            Currently
          </Heading>
          <VStack spacing={4} align="stretch" mt={4}>
            <Box
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="orange.200"
              bg="orange.50"
              _dark={{ borderColor: "orange.700", bg: "whiteAlpha.50" }}
            >
              <HStack spacing={3} mb={2}>
                <Icon as={IoRocketOutline} color="orange.500" boxSize={5} />
                <Heading as="h3" fontSize="md" fontWeight="semibold">
                  Synergym.fit
                </Heading>
              </HStack>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                Gym management SaaS on Rails 8 — PostgreSQL, Redis, Sidekiq for background jobs,
                Playwright for full E2E coverage. Trainer and athlete workflows, workout program
                creation, progress tracking. Running in production.
              </Text>
              <Link
                as={NextLink}
                href="/projects/synergym"
                color="orange.600"
                _dark={{ color: "orange.400" }}
                fontSize="sm"
                fontWeight="medium"
                mt={2}
                display="inline-block"
              >
                View project page →
              </Link>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="orange.200"
              bg="orange.50"
              _dark={{ borderColor: "orange.700", bg: "whiteAlpha.50" }}
            >
              <HStack spacing={3} mb={2}>
                <Icon as={IoDocumentText} color="orange.500" boxSize={5} />
                <Heading as="h3" fontSize="md" fontWeight="semibold">
                  Hermes
                </Heading>
              </HStack>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                A Telegram-based capture and drafting system I&apos;m building for myself. Vault is
                truth, Telegram is transport, and nvim is cockpit.
              </Text>
            </Box>
            <Box
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="orange.200"
              bg="orange.50"
              _dark={{ borderColor: "orange.700", bg: "whiteAlpha.50" }}
            >
              <HStack spacing={3} mb={2}>
                <Icon as={IoLaptopOutline} color="orange.500" boxSize={5} />
                <Heading as="h3" fontSize="md" fontWeight="semibold">
                  Self-hosted infrastructure
                </Heading>
              </HStack>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                25+ Dockerized services on an Intel NUC14. Custom MCP server exposing the Obsidian
                vault to AI agents. n8n in queue mode, Letta for agent memory, ChromaDB as vector
                store, Ollama for local inference, Faster-Whisper for speech-to-text. Self-hosted
                Gitea with act_runner CI/CD. The infrastructure layer behind everything else here.
              </Text>
              <Link
                as={NextLink}
                href="/experience#homelab"
                color="orange.600"
                _dark={{ color: "orange.400" }}
                fontSize="sm"
                fontWeight="medium"
                mt={2}
                display="inline-block"
              >
                Full breakdown →
              </Link>
            </Box>
          </VStack>
        </Section>
        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Why This Exists
          </Heading>
          <Paragraph>
            This isn&apos;t a portfolio. It&apos;s my space on the internet. LinkedIn makes you a
            user ID. GitHub shows code. This shows the person behind the work.
          </Paragraph>
          <Paragraph>
            I build systems that help me and other people operate with more clarity and less
            friction. Some of that is product work, some of it is internal tooling, and some of it
            is learning in public while the thing is still being built.
          </Paragraph>
          <Paragraph>
            I work with AI, not against it. It increases leverage, but only when there&apos;s human
            review, judgment, and enough taste to know what should not ship.
          </Paragraph>
          <Paragraph>
            I lift 4x a week, read constantly, and build software outside of work. That&apos;s the
            whole personality section.
          </Paragraph>
          <Box display="flex" justifyContent="center" gap={4} my={6} flexWrap="wrap">
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              See My Work
            </Button>
            <Button
              as={NextLink}
              href="/articles"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="outline"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              Read The Writing
            </Button>
            <Button
              as={NextLink}
              href="/experience"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="ghost"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              My Background
            </Button>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Latest writing
          </Heading>
          {articlesError ? (
            <Text mt={4}>Latest writing is temporarily unavailable.</Text>
          ) : latestArticles.length === 0 ? (
            <Text mt={4}>No articles yet. That gap is visible on purpose.</Text>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={4}>
              {latestArticles.map((article) => (
                <BaseCard key={`${article.source}:${article.url}`} maxW="none" h="100%">
                  <VStack align="start" spacing={3} h="100%">
                    <Badge colorScheme="orange">{article.formattedDate || "No date"}</Badge>
                    <Heading as="h3" fontSize="lg" lineHeight="1.2">
                      {article.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                      {article.description || article.summary || "No description provided."}
                    </Text>
                    <Link
                      as={article.source === "internal" ? NextLink : "a"}
                      href={article.url}
                      isExternal={article.source !== "internal"}
                      color="orange.600"
                      _dark={{ color: "orange.400" }}
                      fontWeight="medium"
                      mt="auto"
                    >
                      {article.source === "internal" ? (
                        "Read article"
                      ) : (
                        <>
                          Read article <ExternalLinkIcon mx="2px" />
                        </>
                      )}
                    </Link>
                  </VStack>
                </BaseCard>
              ))}
            </SimpleGrid>
          )}
        </Section>
        <Section delay={0.4}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Piacenza, Italy.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed HS diploma in Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked @{" "}
            <Link
              as={NextLink}
              href="https://www.getec-italia.com/it/"
              target="_blank"
              passHref
            >
              Getec Italia
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked @ H&amp;S{" "}
            <Link as={NextLink} href="https://www.cgm.com" target="_blank" passHref>
              (CGM Group)
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Full-time consultant @{" "}
            <Link as={NextLink} href="https://alten.it" target="_blank" passHref>
              Alten Italia
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Mentee of{" "}
            <Link
              as={NextLink}
              href="https://linkedin.com/in/davidecovato"
              target="_blank"
              passHref
            >
              Davide Covato
            </Link>
            .
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ozzgio/portfolio-data/main/articles.json",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }

    const articlesData = await response.json();

    if (!Array.isArray(articlesData)) {
      throw new Error("Articles data is not an array");
    }

    const latestArticles = articlesData
      .filter((article) => article && article.title && article.date)
      .map(normalizeArticle)
      .filter((article) => article.url)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        latestArticles,
        articlesError: false,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to fetch homepage articles:", error);

    return {
      props: {
        latestArticles: [],
        articlesError: true,
      },
      revalidate: 300,
    };
  }
}

export default Home;
