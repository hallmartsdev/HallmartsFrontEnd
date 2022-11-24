import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const ProductBanner = ()=>{
    return (
        <Box mt="10px">
                    <HStack spacing={[2,2,10,10]} flexDirection={['column','column','row','row']} minH="300px">
                        <Flex h={["300px","300px","300px","100%"]} flexBasis={'70%'}  justifyContent="center">
                            <Image h="inherit" src="/Landing/model.jpeg"></Image>
                        </Flex>
                        <Box flexBasis={'30%'}>
                            <Stack>
                                <Text fontSize={'3xl'}>Purple Top With Ruffle Whatever</Text>

                                <Text fontSize={'sm'}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                                    speriores maiores odit inventore. Veniam quam quidem voluptatum commodi dolorum reiciendis.
                                    Voluptatem tempora nihil fuga porro est odio earum alias distinctio quaerat.
                                </Text>

                                <Flex>
                                    <Stack>
                                        <Text>Shop Collection</Text>
                                        <Box w="100%" h="1" bg="black"></Box>
                                    </Stack>
                                </Flex>


                            </Stack>

                        </Box>
                    </HStack>
                </Box>

    )
}

export default ProductBanner