import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"

const BestCategories = ()=>{
    return (
        <>
          <Box>
                    <HStack justifyContent={'center'}>
                        <HStack fontSize={'3xl'}> <Text pb="1">You are in </Text>  <Stack spacing={0}>
                            <HStack > <Text>Best Sellers</Text> <Box className="pi pi-chevron-down"></Box></HStack>
                            <Box w="100%" bg="black" h="1"></Box>
                        </Stack></HStack>
                    </HStack>
                    <HorizontalGrid style={{ mt: '10', overflowX: 'auto', minH: '370px' }} />

                </Box>
        </>
    )
}

export default BestCategories



const HorizontalGrid = ({ style }) => {
    return (
        <>
            <Grid px="4" {...style} mx="auto" w="100%" templateColumns={"repeat(5,1fr)"} gap={"8"}>
                {
                    [1, 2, 3, 4, 5].map((val) => (
                        
                            <GridElement />
                    
                    ))
                }
            </Grid>
        </>

    )
}

const GridElement = () => {
    const hover = {bg:'black',color:'white',transition:'.2s ease',cursor:'pointer'}
    return (
        <>
            <Box h="300px" w={["250px","250px", "250px", "inherit"]} position={'relative'}>
                <Box className="productItem" w="100%" h="100%" position={'relative'} >
                    <Image objectFit={'cover'} w="100%" h="100%" src="/Landing/connect.jpg" />
                    <Flex  pos={'absolute'} bottom="0" w="100%">
                        <HStack className="productButton" justifyContent={'center'} p="1" spacing={0} w="100%" borderRadius={'5px'}>
                            <Box px="3" py="2.5" bg="white" _hover={hover} borderLeftRadius={'5px'} >
                                <Box className="pi pi-star"></Box>
                            </Box>
                            <Box px="3" py="2.5" bg="white" _hover={hover} >
                                <Box className="pi pi-shopping-bag"></Box>
                            </Box>
                            <Box px="3" py="2.5" bg="white" _hover={hover} borderRightRadius="5px" >
                                <Box className="pi pi-eye"></Box>
                            </Box>
                        </HStack>
                    </Flex>
                </Box>

                <Stack spacing={0}>
                    <Text fontSize={'sm'} fontWeight="semibold">Rounded Glasses</Text>
                    <Text fontSize={'md'}>$ 17</Text>
                </Stack>


            </Box>
        </>
    )
}








