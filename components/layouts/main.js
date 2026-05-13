import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Head from "next/head";
import Footer from "../footer";

const DEFAULT_DESCRIPTION =
  "Italian solo developer building systems for autonomy. Writing about Synergym, my personal operating system, and the stack decisions behind both.";

const Main = ({ children, router }) => {
  return (
    <Box as="main" minH="100vh" display="flex" flexDirection="column">
      <Head>
        <meta name="description" content={DEFAULT_DESCRIPTION} />
        <meta name="author" content="Giorgio Ozzola" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />{" "}
        <title>Ozzo — solo developer building systems for autonomy</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={24} flex="1">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
export default Main;
