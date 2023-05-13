import { Container, Box, List, ListItem, Button, Link } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailSharp } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'

const Contacts = () => (
    <Layout title="Contacts">
        <Container>
            <Box borderRadius="lg" bg="orange" mb={6} p={10} align="center">
                <P>
                    Thanks for visiting my website! <br />
                    If you have any questions, comments, or just want to say hello, feel free to drop me a message using the links below.
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
                        <Link href="https://www.instagram.com/giorgiozzola/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoLogoInstagram />}>
                                @giorgiozzola
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://mailto:gio.ozzola@gmail.com/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="orange"
                                leftIcon={<IoMailSharp />}>
                                gio.ozzola
                            </Button>
                        </Link>
                    </ListItem>
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
                </List>
            </Box>
            <Box align="center" mb={6} p={10}>
                <P>
                    I&apos;ll get back to you as soon as I can. <br />
                    Let&apos;s connect and see how we can work together!
                </P>
            </Box>
        </Container>
    </Layout>
)

export default Contacts