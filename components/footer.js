import { Box } from '@chakra-ui/react'
import packageJson from '../package.json'

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      padding={4}
      textAlign="center"
      bottom={0}
      opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Giorgio Ozzola. All Rights Reserved.<br />
      Inspired by <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama</a>
      <br />
      Version: {packageJson.version}
    </Box>
  )
}

export default Footer