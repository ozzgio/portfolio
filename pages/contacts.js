import { Container, Box, List, ListItem, Button, Link } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailSharp } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'

const Contacts = () => (
    <Layout title="Contacts">
        <Container>
            <Box borderRadius="lg" bg="grey" mb={6} p={10} align="center">
                <P>
                    Thanks for visiting my website! <br />
                    If you have a project in mind or want to discuss something, don&apos;t hesitate to reach out.
                    I am always looking for new challenges and ways to grow.
                    <br />
                    I would <b> love </b> to hear from you.
                    <br />
                    Let&apos;s connect and see how we can work together!
                    <br />
                    If you have any questions, comments, or just want to say something, feel free to drop me a message using the links below.
                    Bye!
                </P>
            </Box>
            <Box align="center" mb={6} p={10}>
                <List>
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
                    <ListItem>
                        <Link href="mailto:gio.ozzola@gmail.com?subject=Mail from your portfolio" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoMailSharp />}>
                                gio.ozzola
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/ozzgio" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoGithub />}>
                                @ozzgio
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Container>
    </Layout>
)

export default Contacts