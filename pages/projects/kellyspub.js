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
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project  = () => (
    <Layout title="Kell's Pub">
        <Container>
            <Title>
                Kell's Pub
            </Title>
            <Badge>
                April 2022  -   present
            </Badge>
            <P>
                As a webmaster, my duty is managing all aspects of a website built on WordPress,
                including page creation, plugin, mail, booking integrations and custom CSS.
            </P>
            <P>
                This involves ensuring that the website is running smoothly and optimally,
                fixing any issues that may arise, and ensuring that the website is up to date with the latest security measures.
                My role is to ensure the website runs smoothly and securely, providing the best experience for visitors.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Cross-platform</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML5, CSS3, PHP, MySQL, Nginx</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>Links</Center>
            </Heading>

            <UnorderedList my={4}>
                <ListItem>
                    <Link href="https://birreriakellys.it" target='_blank'>
                        <Badge mr={2}>Official Site (ITA)</Badge>
                        birreriakellys.it
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </UnorderedList>
            <SimpleGrid columns={2} gap={3}>
                <WorkImage src="/images/projects/kellyspub1.png" alt="website image" />
                <WorkImage src="/images/projects/kellyspub2.png" alt="website image" />
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Project 
export { getServerSideProps } from '../../components/chackra'