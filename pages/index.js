import {
    Container,
    Box,
    Button,
    Heading,
    Link,
    TabList,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    Icon,
    SimpleGrid,
    List,
    ListItem,
    GridItem,
    chakra
} from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Image from 'next/image'

import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import Chip from "../components/chip"
import Layout from "../components/layouts/article"
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
        <Layout title={"HomePage"}>
            <Container>
                <Box borderRadius="lg" bg="blue.300" mb={6} p={3} align="center">
                    Hi! Ozzo here, i&apos;m a full stack dev based in Italy &clubs;
                </Box>
                <Box align="center" mb={6} p={3}>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/GioOzz" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="orange"
                                    leftIcon={<IoLogoGithub />}>
                                    @OzzGio
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/ozzolagiorgio/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="orange"
                                    leftIcon={<IoLogoLinkedin />}>
                                    @Giorgio Ozzola
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Ozzo
                        </Heading>
                        Code crafter & coffee addict, 22yo and always learning.
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                        <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
                            w="100px" h="100px" display="inline-block" borderRadius="full"
                            overflow="hidden">
                            <ProfileImage
                                src="/images/propic.jpg"
                                alt="Profile image"
                                borderRadius="full"
                                width={110}
                                height={110} />
                        </Box>
                    </Box>
                </Box>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        As a Full Stack Developer, I am constantly seeking out new challenges and side projects to help me grow personally and professionally.
                        I believe that learning is a never-ending journey, and I approach every task with a mindset of constant improvement like &quot;{' '}
                        <Link as={NextLink} href="https://en.wikipedia.org/wiki/Kaizen" target="_blank" passHref>
                            Kaizen
                        </Link>
                        &quot;.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/projects"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="orange"
                        >
                            My portfolio
                        </Button>
                    </Box>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                        Born in Piacenza, Italy.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Completed HS diploma in Computer Science
                        at ISII G. Marconi
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Worked at Getec Italia & H&S
                    </BioSection>
                    <BioSection>
                        <BioYear>2023 to present</BioYear>
                        Developing FootballBets and projects i&apos;m interested in
                    </BioSection>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        IT, Fitness, {' '}
                        <Link 
                            as={NextLink} href="https://www.amazon.it/hz/wishlist/ls/2D166S3FBYWVQ?ref_=wl_share" 
                            target="_blank" passHref scroll={false}>
                            Books 
                        </Link>
                        {' '} & {' '}
                        <Link 
                            as={NextLink} href="https://www.myanimelist.net/OzzGio" 
                            target="_blank" passHref scroll={false}>
                            Anime
                        </Link> 
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <SimpleGrid columns={[1, 1]} gap={6}>
                        <GridItem>
                            <Heading as="h3" variant="section-title">
                                My technologies
                            </Heading>
                            <Tabs isFitted >
                                <TabList>
                                    <Tab>Frontend</Tab>
                                    <Tab>Backend</Tab>
                                    <Tab>Project Management</Tab>
                                    <Tab>Other</Tab>
                                </TabList>
                                <TabPanels animation={"backwards"}>
                                    <TabPanel p={2}>
                                        <Chip imageSrc={"/images/tecnologies/html-5.png"} label='HTML5' />
                                        <Chip imageSrc={"/images/tecnologies/css3.png"} label='CSS3' />
                                        <Chip imageSrc={"/images/tecnologies/scss.png"} label='SCSS' />
                                        <Chip imageSrc={"images/tecnologies/js.png"} label='Javascript' />
                                        <Chip imageSrc={"images/tecnologies/typescript.png"} label='TypeScript' />
                                        <Chip imageSrc={"images/tecnologies/angular.png"} label='Angular' />
                                        <Chip imageSrc={"images/tecnologies/react.png"} label='React' />
                                        <Chip imageSrc={"images/tecnologies/chakra-ui.png"} label='Chakra-UI' />
                                        <Chip imageSrc={"images/tecnologies/syncfusion.png"} label='Syncfusion' />
                                        <Chip imageSrc={"images/tecnologies/bootstrap.png"} label='Bootstrap' />
                                        <Chip imageSrc={"images/tecnologies/angularmaterial.png"} label='Angular Material' />
                                        <Chip imageSrc={"images/tecnologies/jqxwidgets.jpeg"} label='jQWidgets' />
                                        <Chip imageSrc={"images/tecnologies/nextjs.png"} label='Next.js' />
                                    </TabPanel>
                                    <TabPanel>
                                        <Chip imageSrc={"/images/tecnologies/csharp.png"} label='C#' />
                                        <Chip imageSrc={"/images/tecnologies/restapi.png"} label='REST API' />
                                        <Chip imageSrc={"/images/tecnologies/sqlite.png"} label='SQLite' />
                                        <Chip imageSrc={"/images/tecnologies/mssqlserver.png"} label='MS SQL Server' />
                                        <Chip imageSrc={"/images/tecnologies/postgre.png"} label='Postgre' />
                                        <Chip imageSrc={"/images/tecnologies/aspdotnet.jpeg"} label='ASP.NET' />
                                        <Chip imageSrc={"/images/tecnologies/extdotnet.png"} label='EXT.NET' />
                                        <Chip imageSrc={"/images/tecnologies/nodejs.png"} label='Node.js' />
                                        <Chip imageSrc={"/images/tecnologies/docker.png"} label='Docker' />
                                    </TabPanel>
                                    <TabPanel>
                                        <Chip imageSrc={"/images/tecnologies/git.png"} label='GIT' />
                                        <Chip imageSrc={"/images/tecnologies/github.png"} label='GitHub' />
                                        <Chip imageSrc={"/images/tecnologies/gitlab.png"} label='GitLab' />
                                        <Chip imageSrc={"/images/tecnologies/kanban.png"} label='Kanban' />
                                        <Chip imageSrc={"/images/tecnologies/scrum.png"} label='Scrum' />
                                    </TabPanel>
                                    <TabPanel>
                                        <Chip imageSrc={"/images/tecnologies/nginx.png"} label='Nginx' />
                                        <Chip imageSrc={"/images/tecnologies/vercel.png"} label='Vercel' />
                                        <Chip imageSrc={"/images/tecnologies/msreportingservices.png"} label='Microsoft Reporting Services' />
                                        <Chip imageSrc={"/images/tecnologies/wordpress.png"} label='Wordpress' />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </GridItem>
                    </SimpleGrid>
                </Section>

                <Section mt={{ base: 4, md: 0 }} p={5}>
                    <Box align="center" my={4} mt={4}>
                        How to reach me: <br />
                        <Button
                            as={NextLink}
                            href="/contacts"
                            scroll={false}
                            colorScheme="orange">
                            Contacts page
                        </Button>
                    </Box>
                </Section>
            </Container>
        </Layout >
    )
}
export default Home
export { getServerSideProps } from '../components/chackra'