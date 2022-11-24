import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
import { centerFlex } from "../../constants"
const BrandVideo = () => {
    return (
        <Box pos={'relative'}  h={['300px','300px','400px','100vh']}>
            <Image w="100%" h="100%" objectFit={'cover'} src="/Landing/yellowshirt.jpg" />
            <Flex {...centerFlex} pos={'absolute'} top="0" w="100%" h="100%">
                <Stack alignItems={'center'}>
                    <Flex {...centerFlex} borderWidth={'1.5px'} borderColor="white" boxSize={['50px','50px','100px']} borderRadius={'full'}>
                        <Box color={'white'} fontSize={["15px","15px","25px"]} className="pi pi-play" />
                    </Flex>
                    <Text color={'white'} fontSize={['xl','xl','4xl']}>Lock Book Video</Text>
                </Stack>
            </Flex>
        </Box>
    )
}
export default BrandVideo