import { Box, Flex, Grid, HStack, Stack, VStack, Image, Button,Text } from "@chakra-ui/react"


   

const CollectionBannerMobile = ()=>{
    const AllImages = [{
        image: '/Images/blog-1.jpg',
        title: 'Coats & Jackets',
    },
    {
        image: '/Images/blog-1.jpg',
        title: 'Glasses',
    },
    {
        image: '/Images/blog-1.jpg',
        title: 'Sneakers',
    },
    {
        image: '/Images/blog-1.jpg',
        title: 'Handbags',
    },
    {
        image: '/Images/blog-1.jpg',
        title: 'Sandals',
    },]

    return (
        <>
        <Text mb="10" textAlign={'center'} fontSize={'3xl'} fontWeight={'semibold'}>The Sonoma Collection</Text>
        <Grid mx="auto"  w="100%" overflowX={'auto'} templateColumns={["repeat(5,1fr)", "repeat(5,1fr)"]} gap={"2"}>
            {
                AllImages.map((val) => (
                    <GridElement {...val} />
                ))
            }
        </Grid>
        </>
        
    )
}
export default CollectionBannerMobile



const GridElement = ({ image, title }) => {
    /**
    * @params {String} image
    * @params {Boolean} gridMode
    */
    return (
        <>
            <Box h="350px" w={["250px", "250px", "250px", "inherit"]} position={'relative'}>
            <Stack 
        transform={'scale(1)'} transition=".3s ease"
        _hover={{transition:'.3s ease',transform: 'scale(0.9)'}}>
            <Box h="300px" bg="green.500">
                <Image boxSize={'100%'} objectFit={'cover'}
                    src={image}></Image>
            </Box>
            <Flex>
                <Text mr="2" fontSize={'xl'} fontWeight="semibold">{title}</Text>
                <Text fontWeight={'semibold'} fontSize={'sm'}>
                    {'10'}
                </Text>
            </Flex>
        </Stack>
            </Box>
        </>
    )
}
