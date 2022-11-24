import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const ProductBannerType1 = () => {
    return (
        <Box mx="auto" maxW="container.lg" mt="10px">
            <HStack spacing={[2, 2, 10, 10]} flexDirection={['column', 'column', 'column', 'row']} minH="300px">
                <Flex justifyContent={'center'} mt={10} h={["300px", "300px", "300px", "100%"]} flexBasis={'65%'} >
                    <Box h="inherit" pos={'relative'}>
                        <Image  objectFit="cover" h={["300px","300px","400px"]} src="/Landing/model.jpeg"></Image>
                        <Image pos={'absolute'} bottom="-10" right={["-10%", "-10%", "-50%"]} objectFit={'cover'} boxSize={['150px','150px','200px']} src="/Img/portfolio-3.jpg" />
                    </Box>
                </Flex>
                <Box flexBasis={'35%'}>
                    <Stack mx="3" mt={[10,10,20,10]}>
                        <Text fontSize={'sm'}>ABOUT MY NIGGAS</Text>
                        <Text fontSize={'3xl'}>Purple Top With Ruffle Whatever</Text>

                        <Text fontSize={'sm'}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                            speriores maiores odit inventore. Veniam quam quidem voluptatum commodi dolorum reiciendis.
                            Voluptatem tempora nihil fuga porro est odio earum alias distinctio quaerat.
                        </Text>

                        <Flex>
                            <Stack>
                                <Box py="3" px="4" color={'white'} bg="black">
                                    <Text fontSize={'sm'}>{('Read More').toUpperCase()}</Text>
                                </Box>

                            </Stack>
                        </Flex>


                    </Stack>

                </Box>
            </HStack>
        </Box>

    )
}

export default ProductBannerType1