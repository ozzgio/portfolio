import { Container, Box, Button, Link, Heading, Text, useColorModeValue, VStack, HStack, Flex } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from 'react-icons/io5'
import Layout from '../components/layouts/layout'

const Contacts = () => {
    const cardBg = useColorModeValue(
        'linear-gradient(135deg, #fff7ed 0%, #ffe5d0 100%)',
        'linear-gradient(135deg, #23272f 0%, #2d3748 100%)'
    );
    const cardBorder = useColorModeValue('orange.200', 'orange.400');
    const headingColor = useColorModeValue('orange.600', 'orange.300');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const pageBg = useColorModeValue('#f8f1e6', '#232323');
    return (
        <Layout title="Contacts" description="Get in touch with Giorgio Ozzola, a full-stack developer specializing in web development and design.">
            <Flex
                direction="column"
                align="center"
                justify="center"
                py={{ base: 5, sm: 10, md: 20 }}
                px={{ base: 4, sm: 6, md: 8 }}
                textAlign="center"
            >
                <Heading as="h1" size="2xl" mb={6} color={headingColor}>
                    <Box
                        borderRadius="2xl"
                        bg={cardBg}
                        borderWidth="2px"
                        borderColor={cardBorder}
                        boxShadow="lg"
                        py={{ base: 3, sm: 4, md: 5 }}
                        px={{ base: 3, sm: 5, md: 7 }}
                        w="100%"
                        maxW={{ base: '98vw', sm: '95vw', md: '480px', lg: '480px' }}
                        textAlign="center"
                        my="auto"
                        mx="auto"
                        top={{ base: '0', sm: '0', md: '50px' }}
                        transition="transform 0.2s, box-shadow 0.2s"
                        _hover={{
                            transform: 'translateY(-10px) scale(1.02)',
                            boxShadow: '2xl',
                            borderColor: 'orange.400',
                        }}
                    >
                        <Heading as="h2" size="xl" mb={3} color={headingColor} letterSpacing="tight">
                            Get in Touch
                        </Heading>
                        <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }} mb={3}>
                            Want to collaborate, chat, or have a question? <b>Let’s connect!</b><br />
                            Reach out using any of the links below.
                        </Text>
                        <VStack spacing={3}>
                            <HStack spacing={2} flexWrap="wrap" justify="center">
                                <Link href="https://www.linkedin.com/in/ozzolagiorgio/" target="_blank" _hover={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="solid"
                                        colorScheme="orange"
                                        leftIcon={<IoLogoLinkedin />}
                                        size="lg"
                                        px={7}
                                        w={{ base: '100%', sm: 'auto' }}
                                    >
                                        @Giorgio Ozzola
                                    </Button>
                                </Link>
                                <Link href="mailto:gio.ozzola@gmail.com?subject=Mail from your portfolio" target="_blank" _hover={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="solid"
                                        colorScheme="orange"
                                        leftIcon={<IoMailSharp />}
                                        size="lg"
                                        px={7}
                                        w={{ base: '100%', sm: 'auto' }}
                                    >
                                        gio.ozzola
                                    </Button>
                                </Link>
                                <Link href="https://github.com/ozzgio" target="_blank" _hover={{ textDecoration: 'none' }}>
                                    <Button
                                        variant="solid"
                                        colorScheme="orange"
                                        leftIcon={<IoLogoGithub />}
                                        size="lg"
                                        px={7}
                                        w={{ base: '100%', sm: 'auto' }}
                                    >
                                        @ozzgio
                                    </Button>
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }} mt={6}>
                    I&apos;m always open to new opportunities and collaborations.
                    <br /> Feel free to reach out!
                </Text>
            </Flex>
        </Layout>
    )
}

export default Contacts