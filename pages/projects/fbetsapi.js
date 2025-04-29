import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="FootballBets UI">
        <Container>
            <Title>
                FootballBets API
            </Title>
            <Badge>
                Jan 2023  -   Jun 2024
            </Badge>
            <P>
                Developed in C#, the FootballBets API is a feature-rich RESTful API serving as the foundation for FootballBetsUI.
                It efficiently manages football game data retrieval, processing, and manipulation, along with functionalities related to betting.
                Born as a mentorship project, it has evolved for apply my skills in a real-world context, such as the repository pattern, unit testing and so on.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>C#, Sqlite, Docker </span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://github.com/ozzgio/FootballBetsAPI" target='_blank'>
                        <Badge mr={2}>GitHub Repository</Badge>
                        Source Code
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </UnorderedList>

            <SimpleGrid columns={2} gap={3}>
                {/* <WorkImage src="/images/projects/fbetsapi.png" alt="website image" /> */}
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chackra'