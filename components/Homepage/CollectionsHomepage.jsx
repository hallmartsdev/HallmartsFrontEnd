import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
import CircularBorderButton from "../Misc/CircularBorderButton"
const CollectionsHomepage = ()=>{
    return (
        <>
         <Box>
                    <HStack px="5" justifyContent={'space-between'}>
                        <Text fontSize={'3xl'}>Season's Collections</Text>
                        <HStack>
                            <Box className="pi pi-arrow-left"/>
                            <CircularBorderButton/>
                            <CircularBorderButton/>
                            <CircularBorderButton/>
                            <Box className="pi pi-arrow-right"/>
                        </HStack>
                    </HStack>
                    <HorizontalGrid />
                </Box>
        </>
    )
}

export default CollectionsHomepage


const HorizontalGrid = () => {
    return (
        <>
        <Grid minH="300px" px="4" mx="auto" w="100%" overflowY={'auto'} templateColumns={"repeat(4,1fr)"} gap={"8"}>
               
                {
                    [1, 2, 3, 4].map((val) => (
                        
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
            <Box  h="350px" w={["250px", "250px", "250px","inherit"]} position={'relative'}>
                <Image objectFit={'cover'} w="100%" h="100%" src="/Landing/models.jpeg" />
                <HStack px="3" py="1" justifyContent={'space-between'} position="absolute" w="100%" bottom={0}>
                    <Stack>
                        <Text fontSize={'xl'}>Leather Bags</Text>
                        <Text fontSize={13}>32 Items</Text>
                    </Stack>

                    <Box p="3" className={'pi pi-arrow-right'} borderRadius="full" bg="white"/>
                </HStack>
            </Box>
        </>
    )
}



