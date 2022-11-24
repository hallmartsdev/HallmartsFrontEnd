

import { Box, Flex, Grid, HStack, Stack, VStack, Image, Button } from "@chakra-ui/react"
import { centerFlex } from "../../constants"
import { normalButton, animatedButton } from "../../constants";

const CategoryBanner = () => {
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
    let subImages = AllImages.slice(1, 5)

    return (
        <>
            <DesktopView subImages={subImages} AllImages={AllImages} />
            <MobileView AllImages={AllImages} />
        </>
    )
}
export default CategoryBanner


const DesktopView = ({ AllImages, subImages }) => {
    /**
    * @params {Array} AllImages
    * @params {Array} subImages
    **/

    return (
        <Flex h="400" display={['none', 'none', 'flex']}>
            <ImageItems {...AllImages[0]} firstImage={true} />
            <Flex flexBasis={'50%'} flexWrap="wrap">
                {
                    subImages.map((val) => (
                        <ImageItems {...val} />
                    ))
                }
            </Flex>
        </Flex>
    )
}
const MobileView = ({ AllImages }) => {
    /**
    * @params {Array} AllImages 
    **/
    return (
        <Grid mx="auto" px='4' display={['grid', 'grid', 'none']} w="100%" overflowX={'auto'} templateColumns={["repeat(5,1fr)", "repeat(5,1fr)", "repeat(4,1fr)", "repeat(5,1fr)"]} gap={"2"}>
            {
                AllImages.map((val) => (
                    <GridElement {...val} />
                ))
            }
        </Grid>
    )
}

const ImageItems = ({ image, firstImage, title }) => {
    /**
     * @params {String} image
     * @params {Boolean} firstImage
     * @params {Boolean} gridMode
     */
    return (
        <Flex h={firstImage ? "100%" : "50%"} pos={'relative'} flexBasis={'50%'} p="3">
            <Box w="100%" h="100%" pos={'relative'}>
                <Image objectFit={'cover'} w="inherit" h="inherit" src={image} />
                <Flex transition={'.5s ease'} {...centerFlex} pos={'absolute'} top="0" bg="blackAlpha.200" boxSize={'100%'}>
                    <VStack justifyContent={'flex-end'} h="100%" pb="30">
                        <Button _hover={{ ...animatedButton }}  {...normalButton} borderRadius={'5px'} bg="white" px="3" py="2" fontSize={'smaller'} color="black">{title}</Button>
                    </VStack>
                </Flex>
            </Box>
        </Flex>
    )
}



const GridElement = ({ image, title }) => {
    /**
    * @params {String} image
    * @params {Boolean} gridMode
    */
    return (
        <>
            <Box h="350px" w={["250px", "250px", "250px", "inherit"]} position={'relative'}>
                <Image objectFit={'cover'} w="inherit" h="inherit" src={image} />
                <Flex {...centerFlex} pos={'absolute'} top="0" bg="blackAlpha.400" boxSize={'100%'}>
                    <VStack justifyContent={'flex-end'} h="100%" pb="30">
                        <Box borderRadius={'5px'} bg="white" px="3" py="2" color="black">{title}</Box>
                    </VStack>
                </Flex>
            </Box>
        </>
    )
}