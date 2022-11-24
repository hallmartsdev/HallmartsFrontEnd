import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid,Input,InputGroup,InputLeftElement,InputRightElement} from "@chakra-ui/react"
const MobileHeader = ()=>{
    return (
        <>
        <Box p="3" pos={'relative'}>
<HStack justifyContent={'space-between'}>

<Box className="pi pi-bars" />

<HStack>
    <Box className="pi pi-search" />
    <Box className="pi pi-shopping-bag" />
</HStack>
</HStack>
<HStack justifyContent={'center'} top="0" pos="absolute" w="100%" h="100%">
<Text >Hallmarts</Text>
</HStack>
        </Box>
        </>
    )
}
export default MobileHeader