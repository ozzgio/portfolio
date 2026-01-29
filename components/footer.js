import { Box, useColorModeValue, Link, VStack, Text, HStack } from "@chakra-ui/react";
import packageJson from "../package.json";

const Footer = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const linkColor = useColorModeValue("orange.600", "orange.400");
  
  return (
    <Box
      as="footer"
      width="100%"
      padding={6}
      textAlign="center"
      bottom={0}
      mt={12}
      borderTopWidth="1px"
      borderTopColor={useColorModeValue("gray.200", "gray.700")}
    >
      <VStack spacing={2}>
        <Text fontSize="sm" color={textColor}>
          &copy; {new Date().getFullYear()} Giorgio Ozzola. All Rights Reserved.
        </Text>
        <HStack spacing={4} fontSize="sm">
          <Link
            href="/rss.xml"
            color={linkColor}
            _hover={{ textDecoration: "underline" }}
            target="_blank"
          >
            RSS Feed
          </Link>
          <Text color={textColor}>•</Text>
          <Text color={textColor}>
            Inspired by{" "}
            <Link
              href="https://www.craftz.dog/"
              target="_blank"
              color={linkColor}
              _hover={{ textDecoration: "underline" }}
            >
              Takuya Matsuyama
            </Link>
          </Text>
        </HStack>
        <Text fontSize="xs" color={textColor} opacity={0.7}>
          Version: {packageJson.version}
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
