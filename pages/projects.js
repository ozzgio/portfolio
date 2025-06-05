import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/layout";
import Section from "../components/section";
import ProjectCard from "../components/cards/projectcard";
import projectData from "../libs/projectData";

const Projects = () => {
  const cardTitle = useColorModeValue(
    "headingText.default",
    "headingText._dark"
  );
  return (
    <Layout title="Projects">
      <Container maxW="container.lg" px={[2, 4, 8]}>
        <Heading
          as="h2"
          fontSize={["2xl", "2xl", 28]}
          mb={8}
          textAlign="center"
          color={cardTitle}
          fontWeight="extrabold"
          letterSpacing="tight"
          _dark={{ color: "headingText._dark" }}
        >
          Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[6, 8, 10]}>
          {projectData.map((project) => (
            <Section key={project.id}>
              <ProjectCard
                id={project.id}
                title={project.title}
                thumbnail={project.thumbnail}
                stack={project.stack}
                github={project.github}
                demo={project.demo}
              >
                {project.description}
              </ProjectCard>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
