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
  IoLogoGithub,
  IoLogoLinkedin,
  IoCafe,
  IoBook,
  IoBarbell,
  IoCode,
  IoFootsteps,
  IoLogoTwitter,
} from "react-icons/io5";
import technologyData from "../libs/technologyData";
import TechnologyRow from "../components/techrow";

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
            Solo Dev building Synergym, documenting my path.
          </Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
            Follow the journey on these buttons below!
          </Text>
        </Box>
        <Box align="center" mb={8}>
          <HStack spacing={3} flexWrap="wrap" justify="center">
            <Link href="https://github.com/ozzgio" target="_blank">
              <Button
                variant="solid"
                colorScheme="orange"
                leftIcon={<IoLogoGithub />}
                size="md"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                @ozzgio
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ozzolagiorgio/"
              target="_blank"
            >
              <Button
                variant="solid"
                colorScheme="orange"
                leftIcon={<IoLogoLinkedin />}
                size="md"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                @Giorgio Ozzola
              </Button>
            </Link>
            <Link href="https://x.com/giorgio_ozzola" target="_blank">
              <Button
                variant="solid"
                colorScheme="orange"
                leftIcon={<IoLogoTwitter />}
                size="md"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                @giorgio_ozzola
              </Button>
            </Link>
          </HStack>
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
                  Code crafter
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoCafe} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  Coffee lover
                </Text>
              </HStack>
              <HStack>
                <Icon as={IoFootsteps} color="orange.500" boxSize={5} />
                <Text fontSize="lg" fontWeight="medium">
                  24yo always learning
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
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Purpose
          </Heading>
          <Paragraph>
            As a Full Stack Developer, I am constantly seeking out new
            challenges and side projects to help me grow personally and
            professionally. For me learning is a never-ending journey, and I
            approach every task with a mindset of constant improvement like{" "}
            <Link
              as={NextLink}
              href="https://en.wikipedia.org/wiki/Kaizen"
              target="_blank"
              passHref
            >
              Kaizen
            </Link>
            . I am always looking for opportunities to apply my skills in
            real-world situations. The best way to learn it is by doing it.
          </Paragraph>
          <Box display="flex" justifyContent="center" gap={4} my={6} flexWrap="wrap">
            <Button
              as={NextLink}
              href="/articles#articles-heading"
              rightIcon={<ChevronRightIcon />}
              scroll={false}
              colorScheme="orange"
              size="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              Articles
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
              Books
            </Button>
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
              Projects
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
            I ♥
          </Heading>
          <VStack align="start" spacing={4} mt={4}>
            <HStack spacing={3}>
              <Icon as={IoCode} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                IT
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={IoBarbell} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                Fitness
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={IoBook} color="orange.500" boxSize={6} />
              <Text fontSize="lg" fontWeight="medium">
                Books
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

            <VStack spacing={8} align="stretch">
              {Object.entries(technologyData).map(([key, category]) => (
                <TechnologyRow
                  key={key}
                  category={category}
                  enableAnimation={true}
                />
              ))}
            </VStack>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
