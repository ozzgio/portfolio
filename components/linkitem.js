import NextLink from 'next/link'
import { useColorModeValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            color={active ? 'orange' : inactiveColor}
            target={target}
            _hover={{
                bg: useColorModeValue('orange.100', 'orange.700'),
                transform: 'scale(1.05)',
                transition: 'all 0.2s ease-in-out'
            }}
            _active={{
                bg: useColorModeValue('orange.300', 'orange.900'),
                transform: 'scale(0.95)'
            }}
            sx={active ? {
                borderBottom: '2px solid orange',
                backgroundColor: 'transparent'
            } : {}}
            {...props}
        >
            {children}
        </Link>
    )
}

export default LinkItem