import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider, Input, Textarea, Button } from '@chakra-ui/react'
import { boxShadow, constFontSize} from '../../../config'

const ProductDetails = () => {
    return (
        <>
            <Flex borderRadius="10px" boxShadow={boxShadow} p="3">
                <Box w="100%">
                    <Text pl="2" >Upload Product</Text>
                    <Flex width={'100%'} flexDir={'row'} flexWrap="wrap">
                        <InputContainer placeholder={'Product Name'} name='Product Name' flexBasis={'50%'}/>
                        <InputContainer name='Price' placeholder="Price" flexBasis={'50%'}/>
                        <InputContainer name='Category' placeholder="Category" flexBasis={'50%'}/>
                        <InputContainer name='Brand' placeholder='Brand of Product' flexBasis={'50%'}/>
                        <InputContainer name='Introduction' placeholder="Introduce your product to your customers" flexBasis={'100%'}/>
                        <InputContainer name='Description' placeholder="Describe your product in detail" flexBasis={'100%'}/>
                    </Flex>


<Box p="2">
    <Text my="2">Additional Information</Text>
    <Flex>
    <InputContainer name='Label' placeholder="eg Phone Size, Ram, Speed" flexBasis={'50%'}/>
                        <InputContainer name='Value' placeholder='eg 120px, 480Ghz, ' flexBasis={'50%'}/>
    </Flex>

</Box>

                    <Box>
                        <Text my="2">Upload 3 Images </Text>
                        <Grid w="60%" mb="5" templateColumns='repeat(3,1fr)' gap="3" >
                            <UploadImageContainer />
                            <UploadImageContainer />
                            <UploadImageContainer />


                        </Grid>
                    </Box>


                    <Flex justifyContent={'center'}>
                        <Button mx="auto" fontSize={constFontSize} colorScheme={'blue'}>Upload Product</Button>
                    </Flex>


                </Box>




            </Flex>
        </>

    )
}

export default ProductDetails

let InputContainer = ({ children, flexBasis, name,placeholder }) => ((
    <Box flexBasis={flexBasis} p="2">
        <Text fontWeight="semibold">{name}</Text>
        <Box>
          
        <Input fontSize={constFontSize} placeholder={placeholder}></Input>
            
        </Box>
    </Box>
))


let UploadImageContainer = () => {
    return (
        <Stack borderRadius="10px" p="4" borderWidth="1px" borderColor={'blackAlpha.500'}>
            <Image borderRadius="inherit" mx="auto" src="/Img/portfolio-1.jpg" h={["100px","100px","200px"]} widht="100%" objectFit="cover" />
            <Text textAlign="center"  color="">C:\User\Object</Text>
            <VStack >
                <Button fontSize={constFontSize} variant="outline" colorScheme="black">Upload Image</Button>
            </VStack>
        </Stack>
    )
}