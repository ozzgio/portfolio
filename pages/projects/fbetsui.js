import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="FootballBets (UI)">
        <Container>
            <Title>
                FootballBets (UI)
            </Title>
            <Badge>
                Jan 2023  -   Apr 2024
            </Badge>
            <P>
                FootballBetsUI is a web-based user interface built using Angular.
                It allows users to view upcoming football games and their associated data, as well as place bets.
                This project retrieves data from the FootballBetsAPI and displays it in a user-friendly manner,
                it&apos;s designed to be responsive and intuitive, allowing users to easily navigate and interact with the application.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML5, CSS3, SCSS, Typescript, Angular 15.1.0 </span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://github.com/ozzgio/FootballBetsUI" target='_blank'>
                        <Badge mr={2}>Git Hub Repository</Badge>
                        Source Code
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </UnorderedList>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chackra'