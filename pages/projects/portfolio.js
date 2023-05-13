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
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="FootballBets UI">
        <Container>
            <Title>
                Portfolio
            </Title>
            <Badge>
                May 2023
            </Badge>
            <P>
                Here you&apos;ll find a collection of my latest projects, showcasing my skills in web development using various technologies. 
                <br/>
                From building APIs to creating user interfaces, I want to bring creativity and functionality to every project. 
                Take a look around and see what I can do for you!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React (Next.js), Chakra-UI, Vercel</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://github.com/GioOzz/devozzo-homepage" target='_blank'>
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