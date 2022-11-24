import { Box, Flex, Grid, HStack, Stack, VStack, Text, Image, Button } from "@chakra-ui/react"
import { Navigation, Pagination, Scrollbar, Controller, A11y } from "swiper";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { normalButton,animatedButton } from "../../../constants";

import { centerFlex } from "../../../constants"
const AllImages = [{
    image: '/Images/blog-1.jpg',
    text: 'Coats & Jackets',
    number:'2',
    
},
{
    image: '/Images/blog-1.jpg',
    text: 'Glasses',
    number:'2',
},
{
    image: '/Images/blog-1.jpg',
    text: 'Sneakers',
    number:'2',
},
{
    image: '/Images/blog-1.jpg',
    text: 'Handbags',
    number:'2',
},
{
    image: '/Images/blog-1.jpg',
    text: 'Sandals',
    number:'2',
},]


const CollectionBannerDesktop = () => {
    const [swiper, setSwiper] = React.useState();
    const prevRef = React.useRef();
    const nextRef = React.useRef();
    React.useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <>
            <Flex alignItems={'center'} bg="blackAlpha.200" minH="500">
                <Flex w="100%" >
                    <Flex py="10" flexBasis={'30%'}>
                        <Stack spacing={6} px="10">
                            <Text fontWeight={'semibold'} fontSize={'4xl'}>The Sonoma Collection</Text>
                            <Text>
                                Warm and lighweight inside the
                                custom blend of beautiful colors of full emergence
                            </Text>
                            <HStack>
                                <Button _hover={{...animatedButton}} {...normalButton} ref={prevRef}
                                    borderRadius={'full'}
                                    boxSize="10" borderWidth="1px"
                                    borderColor={'black'}
                                    {...centerFlex}>
                                    <Box className={'pi pi-arrow-left'}></Box>
                                </Button>

                                <Button _hover={{...animatedButton}} {...normalButton} ref={nextRef}
                                    borderRadius={'full'}
                                    boxSize="10" borderWidth="1px"
                                    borderColor={'black'} {...centerFlex}>
                                    <Box className={'pi pi-arrow-right'}></Box>
                                </Button>

                            </HStack>
                        </Stack>
                    </Flex>
                    <Flex alignItems={'center'}  pos={'relative'} w={'70%'}>

                        <Box width='100%'>
                            <Swiper
                                style={{ width: 'inherit' }}
                                modules={[Navigation, Scrollbar]}
                                spaceBetween={15}
                                slidesPerView={4}
                                navigation={{ prevEl: prevRef?.current, nextEl: nextRef?.current }}
                                updateOnWindowResize
                                observer
                                observeParents

                                onSwiper={setSwiper}
                            >
                                {
                                    AllImages.map((val)=>(
                                        <SwiperSlide >
                                        <CarouselImage {...val}/>
                                      </SwiperSlide>
                                    ))
                                }

                              

                               

                            </Swiper>
                        </Box>

                    </Flex>
                </Flex>

            </Flex>
        </>
    )
}

export default CollectionBannerDesktop


let RoundedButton = ({ icon, ref }) => {
    return (
        <Button ref={ref} borderRadius={'full'} boxSize="10" borderWidth="1px" borderColor={'black'} {...centerFlex}>
            <Box className={icon}></Box>
        </Button>
    )
}

let CarouselImage = ({image,text,number}) => {
    return (
        <Stack 
        transform={'scale(1)'} transition=".3s ease"
        _hover={{transition:'.3s ease',transform: 'scale(0.9)'}}>
            <Box h={["300px","300px","200px","300px"]} bg="green.500">
                <Image boxSize={'100%'} objectFit={'cover'}
                    src={image}></Image>
            </Box>
            <Flex>
                <Text mr="2" fontSize={'xl'} fontWeight="semibold">{text}</Text>
                <Text fontWeight={'semibold'} fontSize={'sm'}>
                    {number}
                </Text>
            </Flex>
        </Stack>
    )
}