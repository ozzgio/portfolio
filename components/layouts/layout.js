import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { Box, Flex } from '@chakra-ui/react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const MotionBox = motion.create(Box)

const Layout = ({ children, title }) => {
    const t = `${title} - Ozzo`

    return (
        <Flex direction="column" minHeight="100vh">
            <MotionBox
                as={Flex}
                direction="column"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                position="relative"
            >
                {title && (
                    <Head>
                        <title>{t}</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no" />                        <meta name="description" content="A blog about my journey." />
                        <meta name="author" content="Ozzo" />
                        <meta name="keywords" content="blog, articles, personal, IT, dev, developer, ozzo, ozzo blog" />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                        <link rel="manifest" href="/site.webmanifest" />
                        <meta property="og:title" content={t} />
                        <meta property="og:description" content="A blog about my journey." />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://ozzo.blog" />
                    </Head>
                )}
                {children}
                <GridItemStyle />
            </MotionBox>
        </Flex>
    )
}

export default Layout