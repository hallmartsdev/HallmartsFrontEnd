import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const Electronics = ()=>{
    return (
        <Box>
    <HStack justifyContent={'center'}>
        <Text fontSize={'3xl'}>Trending Collections</Text>
    </HStack>
    <HorizontalGrid style={{overflowX:'auto',mt:'10'}}/>
</Box>
    )
}
export default Electronics



const HorizontalGrid = ({ style }) => {
    return (
        <>
            <Grid {...style} mx="auto" w="100%" templateColumns={["repeat(5,1fr)","repeat(5,1fr)","repeat(4,1fr)","repeat(5,1fr)"]} gap={"8"}>
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
    return (
        <>
            <Box  w={["150px", "150px", "inherit"]} position={'relative'}>
            <Image mx="auto" boxSize={'150px'} borderRadius={'full'} objectFit={'cover'}  src="/Landing/connect.jpg" />
                  
                
<Flex justifyContent={'center'}>
<Box pos={'relative'}>
<Text >Smart Phone</Text>
</Box>
<Text fontSize={11}>16</Text>
</Flex>
                


            </Box>
        </>
    )
}

