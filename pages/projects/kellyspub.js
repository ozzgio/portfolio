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
import Layout from '../../components/layouts/layout'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Project = () => (
    <Layout title="Kell's Pub">
        <Container>
            <Title>
                Kell&apos;s Pub
            </Title>
            <Badge>
                April 2022  - March 2024
            </Badge>
            <P>
                As a webmaster, I managed all aspects of a website built on WordPress,
                including page creation, plugin installation, automatic mail setup, booking integration,
                and custom CSS development. (
            </P>
            <P>
                This involved ensuring the website ran smoothly and optimally, fixing any issues that arose,
                and keeping the website up-to-date with the latest security measures.             </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Cross-platform</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML5, CSS3, PHP, MySQL, Nginx (WordPress)</span>
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