import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid, Select } from "@chakra-ui/react"
const ProductBannerType2 = () => {
    return (
        <Box mx="auto"  maxW="container.lg" mt="10">
            <HStack spacing={[2, 2, 10, 10]} flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} minH="300px">

                <Box mt={[10,10,20,10]} mx="3" flexBasis={'35%'}>
                    <Stack mt={10}>
                        <Text fontSize={'11'}>ABOUT MY NIGGAS</Text>
                        <Text fontSize={'3xl'}>Purple Top With Ruffle Whatever</Text>

                        <Text fontSize={'11'} color="gray.500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        </Text>

                        <Select>
                            <option value={'One'}>One</option>
                        </Select>
                        <Box p="2" color="white" bg="black" w="100%">

                            <Text textAlign={'center'}>Buy It Now</Text>
                        </Box>
                    </Stack>

                </Box>
                <Flex justifyContent={'center'} mt={10} h={["300px", "300px", "300px", "100%"]} flexBasis={'65%'} >
                    <Box h="inherit" pos={'relative'}>
                        <Image objectFit="cover" h={["300px", "300px", "400px"]} src="/Landing/model.jpeg"></Image>
                        <Image pos={'absolute'} bottom="-10" right={["-10%", "-10%", "-50%"]} objectFit={'cover'} boxSize={['150px', '150px', '200px']} src="/Img/portfolio-3.jpg" />

                    </Box>


                </Flex>
            </HStack>
        </Box>

    )
}

export default ProductBannerType2