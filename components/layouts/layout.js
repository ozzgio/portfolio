import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children, title }) => {
  const t = `${title || ""} - Ozzo`.trim();

  return (
    <Flex direction="column">
      {title && (
        <Head>
          <title key="title-tag">{t}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
          />
          <meta name="description" content="A blog about my journey." />
          <meta name="author" content="Ozzo" />
          <meta
            name="keywords"
            content="blog, articles, personal, IT, dev, developer, ozzo, ozzo blog"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:title" content={t} />
          <meta
            property="og:description"
            content="A blog about my journey."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ozzo.blog" />
        </Head>
      )}
      {children}
    </Flex>
  );
};

export default Layout;
