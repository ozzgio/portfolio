import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  List,
  ListItem,
  chakra,
  Icon,
  VStack,
  Image,
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
        <Box borderRadius="lg" bg="blue.300" mb={6} p={3} align="center">
          Hi! Ozzo here, nice to meet you! 🤝
        </Box>
        <Box align="center" mb={6} p={3}>
          <List>
            <ListItem>
              <Link href="https://github.com/ozzgio" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoGithub />}
                >
                  @ozzgio
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ozzolagiorgio/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Giorgio Ozzola
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box display={{ md: "flex", mb: 6 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ozzo
            </Heading>
            <Paragraph>
              <Icon>
                {" "}
                <IoCode />{" "}
              </Icon>{" "}
              Code crafter
            </Paragraph>
            <Paragraph>
              <Icon>
                {" "}
                <IoCafe />{" "}
              </Icon>{" "}
              Coffee lover
            </Paragraph>
            <Paragraph>
              <Icon>
                {" "}
                <IoFootsteps />{" "}
              </Icon>{" "}
              23yo always learning
            </Paragraph>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/propic.jpg"
                alt="Profile image"
                borderRadius="full"
                width={110}
                height={110}
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
          <Box display="flex" justifyContent="center" gap={4} my={4}>
            <Button
              as={NextLink}
              href="/articles#articles-heading"
              rightIcon={<ChevronRightIcon />}
              scroll={false}
              colorScheme="orange"
            >
              Articles
            </Button>
            <Button
              as={NextLink}
              href="/books"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
            >
              Books
            </Button>
            <Button
              as={NextLink}
              href="/projects"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
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
          <Paragraph>
            <Icon>
              {" "}
              <IoCode />{" "}
            </Icon>{" "}
            IT
          </Paragraph>
          <Paragraph>
            <Icon>
              {" "}
              <IoBarbell />{" "}
            </Icon>{" "}
            Fitness
          </Paragraph>
          <Paragraph>
            <Icon>
              {" "}
              <IoBook />{" "}
            </Icon>{" "}
            Books
          </Paragraph>
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
