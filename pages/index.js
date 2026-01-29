import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  chakra,
  Icon,
  VStack,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/layout";
import {
  IoBook,
  IoBarbell,
  IoCode,
  IoFootsteps,
} from "react-icons/io5";
import technologyData from "../libs/technologyData";
import TechnologyRow, {
  TechRowAnimationProvider,
} from "../components/techrow";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => {
  return (
    <Layout title={"HomePage"}>
      <br />
      <Container>
        <Box
          borderRadius="xl"
          bgGradient="linear(to-r, orange.50, orange.100)"
          _dark={{ bgGradient: "linear(to-r, orange.900, orange.800)", borderColor: "orange.700" }}
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
            mb={2}
          >
            Building digital solutions, one problem at a time.
          </Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
            A personal space on the internet. Beyond social media. Beyond code repositories.
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
              as="h2"
              variant="page-title"
              fontSize={{ base: "3xl", md: "4xl" }}
              mb={4}
              bgGradient="linear(to-r, orange.400, orange.600)"
              _dark={{ bgGradient: "linear(to-r, orange.300, orange.500)" }}
              bgClip="text"
            >
              Ozzo
            </Heading>
            <VStack align="start" spacing={3}>
              <HStack>
                <Icon as={IoCode} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  Full stack developer
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoBarbell} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  Fitness enthusiast
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoBook} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  Curious learner
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoFootsteps} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  Building with AI
                </Text>
              </HStack>
            </VStack>
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
          <Heading as="h3" variant="section-title">
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
                <Icon as={IoCode} color="orange.500" boxSize={5} />
                <Heading as="h4" fontSize="md" fontWeight="semibold">
                  Synergym.fit
                </Heading>
              </HStack>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                Building a Rails 8 fitness platform for athletes and trainers. Production app with real users.
              </Text>
              <Link
                href="https://synergym.fit"
                target="_blank"
                color="orange.600"
                _dark={{ color: "orange.400" }}
                fontSize="sm"
                fontWeight="medium"
                mt={2}
                display="inline-block"
              >
                Visit synergym.fit →
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
                <Icon as={IoCode} color="orange.500" boxSize={5} />
                <Heading as="h4" fontSize="md" fontWeight="semibold">
                  Self-Hosted Infrastructure
                </Heading>
              </HStack>
              <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
                Setting up a NUC mini PC with Docker. Hosting Gitea, Nextcloud, and experimenting with self-hosted services on my local network.
              </Text>
            </Box>
          </VStack>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Why This Exists
          </Heading>
          <Paragraph>
            This isn&apos;t a portfolio. It&apos;s my space on the internet. LinkedIn makes you a user ID. GitHub shows code. This shows the person behind the work.
          </Paragraph>
          <Paragraph>
            I build digital products that solve problems. If you have a problem that can be solved with code, I can build it. I&apos;m driven by curiosity and{" "}
            <Link
              as={NextLink}
              href="https://en.wikipedia.org/wiki/Kaizen"
              target="_blank"
              passHref
            >
              <Text as="span" fontWeight="semibold" color="orange.500">
                kaizen
              </Text>
            </Link>
            . I don&apos;t stop where I don&apos;t know. I learn, experiment, and build.
          </Paragraph>
          <Paragraph>
            I work with AI, not against it. AI boosts what I can do, but it can&apos;t replace critical thinking or domain expertise. The future belongs to those who adapt.
          </Paragraph>
          <Paragraph>
            This site documents my journey. The projects, the learnings, the process. It&apos;s built for the long term, sustainably. If you&apos;re here, I hope you find something valuable or someone worth connecting with.
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
              href="/books"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              What I&apos;m Reading
            </Button>
            <Button
              as={NextLink}
              href="/contacts"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              Let&apos;s Connect
            </Button>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Piacenza, Italy.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed HS diploma in Computer Science
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
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked @ H&S{" "}
            <Link
              as={NextLink}
              href="https://www.cgm.com"
              target="_blank"
              passHref
            >
              (CGM Group)
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Full-time consultant @{" "}
            <Link
              as={NextLink}
              href="https://alten.it"
              target="_blank"
              passHref
            >
              Alten Italia
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Mentee of my great mentor{" "}
            <Link
              as={NextLink}
              href="https://linkedin.com/in/davidecovato"
              target="_blank"
              passHref
            >
              devcovato
            </Link>
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            What I Care About
          </Heading>
          <VStack align="start" spacing={4} mt={4}>
            <HStack spacing={3}>
              <Icon as={IoCode} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                Building things with code
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={IoBarbell} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                Fitness and physical health
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={IoBook} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                Reading and continuous learning
              </Text>
            </HStack>
          </VStack>
        </Section>

        <Section delay={0.5}>
          <VStack spacing={6} align="stretch">
            <Box>
              <Heading as="h3" variant="section-title" mb={2}>
                My Technologies
              </Heading>
            </Box>

            <TechRowAnimationProvider>
              <VStack spacing={8} align="stretch">
                {Object.entries(technologyData).map(([key, category]) => (
                  <TechnologyRow
                    key={key}
                    category={category}
                    enableAnimation={true}
                    idleResumeSeconds={15}
                  />
                ))}
              </VStack>
            </TechRowAnimationProvider>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
