import {
  Box,
  Button,
  Link,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  useTheme,
  Container,
  Icon,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";
import Layout from "../components/layouts/layout";
import Section from "../components/section";

const Contacts = () => {
  const { colors } = useTheme();
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue(
    colors.cardBorder.default,
    colors.cardBorder._dark,
  );
  const headingTextColor = useColorModeValue(
    colors.headingText.default,
    colors.headingText._dark,
  );
  const bodyTextColor = useColorModeValue(
    colors.bodyText.default,
    colors.bodyText._dark,
  );
  const subtleBg = useColorModeValue("orange.50", "whiteAlpha.100");

  return (
    <Layout
      title="Contacts"
      description="Get in touch with Giorgio Ozzola, a full-stack developer specializing in web development and design."
    >
      <Container maxW="container.md">
        <Section delay={0.1}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading
                as="h1"
                variant="page-title"
                fontSize={{ base: "3xl", md: "4xl" }}
                mb={4}
                bgGradient="linear(to-r, orange.400, orange.600)"
                _dark={{ bgGradient: "linear(to-r, orange.300, orange.500)" }}
                bgClip="text"
              >
                Get in Touch
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={bodyTextColor}
                maxW="2xl"
                mx="auto"
              >
                Want to collaborate, chat, or have a question?{" "}
                <Text as="span" fontWeight="semibold" color={headingTextColor}>
                  Let&apos;s connect!
                </Text>
                <br />
                Reach out using any of the links below.
              </Text>
            </Box>

            <Box
              borderRadius="2xl"
              bg={cardBg}
              borderWidth="2px"
              borderColor={cardBorder}
              boxShadow="xl"
              p={{ base: 6, md: 8 }}
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "2xl",
                borderColor: "orange.400",
              }}
            >
              <VStack spacing={4} align="stretch">
                <Link
                  href="https://www.linkedin.com/in/ozzolagiorgio/"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    variant="solid"
                    colorScheme="orange"
                    leftIcon={<Icon as={IoLogoLinkedin} boxSize={5} />}
                    size="lg"
                    w="100%"
                    py={6}
                    fontSize="md"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.2s"
                  >
                    Connect on LinkedIn
                  </Button>
                </Link>
                <Link
                  href="mailto:gio.ozzola@gmail.com?subject=Mail from your portfolio"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    variant="solid"
                    colorScheme="orange"
                    leftIcon={<Icon as={IoMailSharp} boxSize={5} />}
                    size="lg"
                    w="100%"
                    py={6}
                    fontSize="md"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.2s"
                  >
                    Send an Email
                  </Button>
                </Link>
                <Link
                  href="https://github.com/ozzgio"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    variant="solid"
                    colorScheme="orange"
                    leftIcon={<Icon as={IoLogoGithub} boxSize={5} />}
                    size="lg"
                    w="100%"
                    py={6}
                    fontSize="md"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                    transition="all 0.2s"
                  >
                    Check out my GitHub
                  </Button>
                </Link>
              </VStack>
            </Box>

            <Box
              borderRadius="xl"
              bg={subtleBg}
              p={6}
              textAlign="center"
            >
              <Text
                color={bodyTextColor}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="medium"
              >
                I&apos;m always open to new opportunities and collaborations.
                <br />
                Feel free to reach out!
              </Text>
            </Box>
          </VStack>
        </Section>
      </Container>
    </Layout>
  );
};

export default Contacts;
