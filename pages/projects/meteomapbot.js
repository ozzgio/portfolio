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
import Layout from '../../components/layouts/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="Telegram Bot">
        <Container>
            <Title>
                MeteoMapBot
            </Title>
            <Badge>
                2021
            </Badge>
            <P> Meteomapbot was a bot that allowed users to get weather information for Italian regional capitals based on their location.
                The bot was developed using Node.js and JavaScript, and it utilized the OpenWeatherMap API to fetch weather data.
                Although the bot is no longer active, it was a project that showcased my ability to develop functional and user-friendly applications using APIs and other web technologies.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Telegram</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Node.js, Javascript, REST API, MS SQL Server</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://gist.github.com/ozzgio/2a1f1d2cff1a9134a50ad5c94c451e35" target='_blank'>
                        <Badge mr={2}>Git Hub Gists</Badge>
                        Source Code
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://t.me/meteomapbot" target='_blank'>
                        <Badge mr={2}>Telegram Link</Badge>
                        The stopped BOT
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </UnorderedList>
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chackra'