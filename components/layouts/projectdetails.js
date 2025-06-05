import { Container, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { WorkImage, Title } from "../project";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const ProjectDetailsLayout = ({
  children,
  title,
  projectTitle,
  imageUrl,
  imageAlt,
  dateInfo,
}) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {" "}
      {title && (
        <Head>
          <title key="project-title-tag">
            {`${title || ""} - Ozzo`.trim()}
          </title>
          <meta
            name="description"
            content={`Details for ${title} project by Ozzo`}
          />
          <meta property="og:title" content={`${title} - Ozzo`} />
          <meta
            property="og:description"
            content={`Details for ${title} project by Ozzo`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ozzo.blog/projects" />
        </Head>
      )}
      <Container maxW="container.md" pt={6} pb={10}>
        <Title>{projectTitle}</Title>
        {dateInfo && dateInfo.display && <Badge mb={4}>{dateInfo.value}</Badge>}
        {imageUrl && <WorkImage src={imageUrl} alt={imageAlt} />}
        {children}
      </Container>
    </>
  </motion.article>
);

export default ProjectDetailsLayout;
