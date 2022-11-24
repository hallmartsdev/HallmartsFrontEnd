import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid, Select } from "@chakra-ui/react"
const ProductBannerCountdown = () => {
    return (
        <Box mx="auto" pb={["10","10","0"]}   bg="gray.100"   mt="100px">
            <HStack  spacing={[2, 2, 10, 10]} flexDirection={['column-reverse', 'column-reverse', 'row', 'row']} >
           
            <Flex  justifyContent={'center'} mx="3" flexBasis={'50%'} pb={["10",'0']}>
                    <Stack alignItems={'center'} mt={10}>
                        <Text fontSize={'2xl'}>Old School Sneaker</Text>
                        <HStack>
                            <Stack>
                                <Text fontSize={'5xl'}>00</Text>
                                <Text textAlign={'center'} fontSize={11}>DAYS</Text>
                            </Stack>
                            <Text pb="5">:</Text>
                            <Stack>
                                <Text fontSize={'5xl'}>00</Text>
                                <Text textAlign={'center'}  fontSize={11}>DAYS</Text>
                            </Stack>
                            <Text pb="5">:</Text>
                            <Stack>
                                <Text fontSize={'5xl'}>00</Text>
                                <Text textAlign={'center'}  fontSize={11}>DAYS</Text>
                            </Stack>
                            <Text pb="5">:</Text>
                            <Stack>
                                <Text fontSize={'5xl'}>00</Text>
                                <Text textAlign={'center'}  fontSize={11}>DAYS</Text>
                            </Stack>
                        </HStack>
                        <Flex pt="20px" >
<Button borderWidth={'0.7px'} fontSize="11" bg="black" color="white" borderRadius={5} variant={'outline'}>SHOP NOW</Button>
        </Flex>
                    
                    </Stack>

                </Flex>

            <Flex  justifyContent={'center'}  h={["300px", "300px", "300px", "100%"]} flexBasis={'50%'} >
                    <Box h="inherit" pos={'relative'}>
                        <Image objectFit="cover" h={["300px"]} src="/Landing/model.jpeg"></Image>
            
                    </Box>


                </Flex>

            
                
            </HStack>
        </Box>

    )
}

export default ProductBannerCountdown