import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const SITE_URL = "https://ozzo.blog";
const DEFAULT_TITLE = "Ozzo | Full Stack Developer & Indie Builder";
const DEFAULT_DESCRIPTION =
  "Portfolio and articles by Ozzo, a full stack developer and indie builder shipping SaaS products, automation workflows, and practical software projects.";
const DEFAULT_KEYWORDS =
  "full stack developer portfolio, indie builder, SaaS developer, software engineer, web development, automation, Ozzo";

const Layout = ({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path = "",
}) => {
  const hasCustomTitle = Boolean(title);
  const pageTitle = hasCustomTitle ? `${title} | Ozzo` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path || ""}`;

  return (
    <Flex direction="column">
      <Head>
        <title key="title-tag">{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta name="author" content="Ozzo" />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Ozzo" />
      </Head>
      {children}
    </Flex>
  );
};

export default Layout;
