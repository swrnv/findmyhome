import { Box, Link } from '@chakra-ui/react';


const Footer = () => (
    <Box>
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        2022 FindMyHome™, Inc. 
    </Box>
    <Box textAlign='center' p='5' color='gray.600'>
    Made with ❤️ | <Link href='https://github.com/swrnv'>Swrnv</Link>
</Box>
</Box>
)
export default Footer;