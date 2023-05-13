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

const Project  = () => (
    <Layout title="FootballBets UI">
        <Container>
            <Title>
                FootballBets API
            </Title>
            <Badge>
                Jan 2023  -   present
            </Badge>
            <P>
                The FootballBetsUI is a web-based user interface built using Angular.
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
                    <span>C#, Docker</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://github.com/GioOzz/FootballBetsAPI" target='_blank'>
                        <Badge mr={2}>Git Hub Repository</Badge>
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