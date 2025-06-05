import { Link, List, ListItem, Center } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Meta } from "../../components/project";
import P from "../../components/paragraph";
import ProjectDetailsLayout from "../../components/layouts/projectdetails";
import TechStack from "../../components/techstack";
import projectData from "../../libs/projectData";

const Project = ({ project }) => {
  if (!project) {
    return <Center>Project not found.</Center>;
  }

  const { title, description, stack, github, demo } = project;

  return (
    <ProjectDetailsLayout
      title={title}
      projectTitle={title}
      imageUrl={project.thumbnail}
      imageAlt={title}
      dateInfo={{ display: true, value: "Jan 2023 - Apr 2024" }}
    >
      <P>{description}</P>
      <List ml={4} my={4}>
        <ListItem display="flex" alignItems="center" mb={2}>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem display="flex" alignItems="center" mb={2}>
          <Meta>Stack</Meta>
          <TechStack stack={stack} />
        </ListItem>
        {github && !demo && (
          <ListItem display="flex" alignItems="center" mb={2}>
            <Link href={github} target="_blank">
              <Meta>GitHub</Meta>
              Source Code
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        )}
        {demo && (
          <ListItem display="flex" alignItems="center" mb={2}>
            <Link href={demo} target="_blank">
              <Meta>Demo</Meta>
              View Live Site
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        )}
      </List>
    </ProjectDetailsLayout>
  );
};

export async function getStaticProps() {
  const project = projectData.find((p) => p.id === "fbetsui");
  return {
    props: {
      project,
    },
  };
}

export default Project;
