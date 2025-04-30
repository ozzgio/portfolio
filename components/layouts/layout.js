import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { Box, Flex } from '@chakra-ui/react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const MotionBox = motion(Box)

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
                    </Head>
                )}
                {children}  <GridItemStyle />

            </MotionBox>
        </Flex>
    )
}

export default Layout