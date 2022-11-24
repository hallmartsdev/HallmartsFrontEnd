import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const Hashtags = ()=>{
    return (
<Box>
                <VStack>
                    <Text fontSize={'4xl'}>#Hallmarts</Text>
            <Text textAlign={'center'}>Tag <Box fontWeight={'bold'} as="span">@Hallmarts</Box>  in your instagram photos for a chance to be here</Text>  
                <Text textAlign={'center'}>Find more inspiration on <Box fontWeight={'bold'} textDecoration={'underline'} as="span">our instagram</Box> </Text>
                </VStack>
                <HorizontalGrid style={{overflowX:'auto',mt:'10'}}/>
              </Box>
              
    )
}
export default Hashtags


const HorizontalGrid = ({ style }) => {
    return (
        <>
            <Grid px="4" {...style} mx="auto" w="100%" templateColumns={"repeat(5,1fr)"} gap={"2"}>
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
            <Box  w={["200px", "200px", "inherit"]} h="200px" position={'relative'}>
            <Image mx="auto" boxSize={['200px','100%']} objectFit={'cover'}  src="/Landing/connect.jpg" />
                  
            </Box>
        </>
    )
}



