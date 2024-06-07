import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbfbetsapi from '../public/thumbs/fbetsapi.png'
import thumbfbetsui from '../public/thumbs/fbetsui.png'
import thumbKellys from '../public/thumbs/kellyspub.png'
import thumbtelegrambot from '../public/thumbs/meteomapbot.png'
import thumbportfolio from '../public/thumbs/portfolio.png'


const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[2, 1, 2]} gap={8}>
                <Section>
                    <ProjectGridItem id="portfolio" title="This Website" thumbnail={thumbportfolio}>
                    Deep dive into the tecnologies and the code I have built for this website. 
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="fbetsapi" title="FootballBets API" thumbnail={thumbfbetsapi}>
                        An API for managing and retrieving data related to football bets.
                        It provides endpoints for creating and managing user accounts, placing and retrieving bets,
                        and retrieving data about teams and matches.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="fbetsui" title="FootballBets UI" thumbnail={thumbfbetsui}>
                        A user interface for managing and placing football bets.
                        It provides a modern, responsive interface for browsing matches, placing bets, and tracking your progress.
                        The UI is built with Angular and uses the FootballBets API as its backend.
                    </ProjectGridItem>
                </Section>

                <Section delay={0.2}>
                    <ProjectGridItem id="kellyspub" thumbnail={thumbKellys} title="Kelly's Pub">
                        Webmaster for a local pub website using CMS (WordPress), hosted on Nginx server.
                    </ProjectGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProjectGridItem id="meteomapbot" thumbnail={thumbtelegrambot} title="Telegram BOT">
                        Telegram bot (no longer active) &quot;@Meteomapbot&quot;,
                        that provided weather information for Italian regional capitals.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>

        </Container>
    </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chackra'