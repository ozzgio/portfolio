import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const DEFAULT_DESCRIPTION =
  "Italian solo developer building systems for autonomy. Writing about Synergym, my personal operating system, and the stack decisions behind both.";

const Layout = ({ children, title, metaTitle, description, socialTitle }) => {
  const documentTitle = metaTitle || `${title || ""} - Ozzo`.trim();
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const shareTitle = socialTitle || documentTitle;

  return (
    <Flex direction="column">
      {(title || metaTitle) && (
        <Head>
          <title key="title-tag">{documentTitle}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
          />
          <meta name="description" content={metaDescription} />
          <meta name="author" content="Ozzo" />
          <meta
            name="keywords"
            content="blog, articles, personal, IT, dev, developer, ozzo, ozzo blog"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:title" content={shareTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ozzo.blog" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={shareTitle} />
          <meta name="twitter:description" content={metaDescription} />
        </Head>
      )}
      {children}
    </Flex>
  );
};

export default Layout;
