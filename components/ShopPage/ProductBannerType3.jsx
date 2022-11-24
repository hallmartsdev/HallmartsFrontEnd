import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid, Select } from "@chakra-ui/react"
const ProductBannerType3 = () => {
    return (
        <Box mx="auto" pb={["10","10","0"]}  bg="gray.100"   mt="100px">
            <HStack spacing={[2, 2, 10, 10]} flexDirection={['column', 'column', 'row', 'row']} >
            <Flex  justifyContent={'center'}   h={["300px", "300px", "300px", "100%"]} flexBasis={'65%'} >
                    <Box h="inherit" pos={'relative'}>
                        <Image objectFit="cover" h={["300px"]} src="/Landing/model.jpeg"></Image>
            
                    </Box>


                </Flex>

                <Flex  alignItems={'center'} mx="3" flexBasis={'35%'}>
                    <Stack mt={10}>
                        <Text fontSize={'11'}>ABOUT MY NIGGAS</Text>
                        <Text fontSize={'3xl'}>Purple Top With Ruffle Whatever</Text>
                        <Flex mt="10" >
<Button borderWidth={'0.7px'} fontSize="11" borderColor="black" borderRadius={0} variant={'outline'}>SHOP NOW</Button>
        </Flex>
                    
                    </Stack>

                </Flex>
                
            </HStack>
        </Box>

    )
}

export default ProductBannerType3