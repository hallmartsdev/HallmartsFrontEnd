import { Box, Flex, Stack, HStack, VStack, Text, Heading, Input, Button, Image } from "@chakra-ui/react"
import { centerFlex,landingPagelineHeight } from "../../../../constants"
const AnyoneCanSeeBusiness = () => {
    return (
        <>
            <HStack h="100vh">
                <Stack h="100%" flexBasis={'30%'}>

                </Stack>
                <Stack h="100%" bg="gray.200" position={'relative'} {...centerFlex} flexBasis={'70%'}>
                    <Box maxW={'400'}>
                        <Text lineHeight={landingPagelineHeight} fontSize={'5xl'}> Now Anyone Can See Your Business On And Off Campus</Text>
                      
                      <Stack >
                      <Text> Lorem ipsum dolor Commodi error necessitatibus autem architecto laudantium, ea aliquam quo eius delectus, qui esse est fugiat. Odio, aperiam excepturi.</Text>
                    
                      <Text> Consectetur  necessitatibus autem architecto laudantium, ea aliquam quo eius delectus, qui esse est fugiat. Odio, aperiam excepturi.</Text>
                      </Stack>
                    </Box>



                    <Image position={'absolute'} src="/Landing/usinglaptop.jpg" objectFit={'cover'} boxSize="30vmax" top="20vh" bottom={"0"} left="-200"></Image>
                </Stack>
            </HStack>
        </>
    )
}
export default AnyoneCanSeeBusiness