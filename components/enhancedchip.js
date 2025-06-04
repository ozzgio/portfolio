import { Box, VStack, HStack, Badge, Text, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const EnhancedChip = ({ tech, delay = 0 }) => {
    const bg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const hoverBg = useColorModeValue('gray.50', 'gray.700')

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.05 }}
            width="120px"
        >
            <Box
                bg={bg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="lg"
                p={4}
                width="120px"
                height="120px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                flexShrink={0}
                flexGrow={0}
                transition="all 0.3s ease"
                _hover={{
                    bg: hoverBg,
                    transform: 'translateY(-2px)',
                    shadow: 'lg'
                }}
                cursor="pointer"
            >
                <VStack spacing={2} flex={1} justify="center">
                    <Box position="relative" w={{ base: "48px", md: "64px" }} h={{ base: "48px", md: "64px" }}>
                        <Image
                            src={tech.image}
                            alt={tech.name}
                            width={64}
                            height={64}
                            style={{ objectFit: 'contain' }}
                        />
                    </Box>
                    <Text fontSize="sm" fontWeight="semibold" textAlign="center" lineHeight="1.2">
                        {tech.name}
                    </Text>
                </VStack>
            </Box>
        </motion.div >
    )
}

export default EnhancedChip;