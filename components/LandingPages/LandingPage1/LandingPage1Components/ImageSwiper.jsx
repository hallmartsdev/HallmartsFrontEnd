import React from "react";
import { Flex, Text, Image, Stack, HStack, VStack, Button, Box, Container } from "@chakra-ui/react";
// Import Swiper React components

import { Navigation, Pagination, Scrollbar, Controller, A11y } from "swiper";
import { useState, useEffect } from "react";

import {fadeVariant,uid} from '../../../../config'

import { centerFlex } from "../../../../constants";
import { CSSTransition, TransitionGroup } from "react-transition-group";


import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

import { Zoom } from "swiper";
// Import Swiper styles

export const ImageSwiper = () => {
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

    let incomingArray = [
        { name: "Iphone1", image: "/Landing/pic(1).jpeg", zoom: true },
        { name: "Iphone2", image: "/Landing/pic(2).jpeg", zoom: true },
    ];

    let [items, setItems] = useState(incomingArray);
    useEffect(() => {}, []);
    let changeButton = (e) => {
        let copiedItems = [...items];
        let falsifiedItems = copiedItems.map((val, index) => {
            return { ...val, zoom: false };
        });
        falsifiedItems[e.activeIndex].zoom = true;
        setItems(falsifiedItems);
    };

    return (
        <>
           <Stack position="relative">
                <Swiper
                    style={{ zIndex: 0 }}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    spaceBetween={1}
                    slidesPerView={1}
                    initialSlide={0}
                    updateOnWindowResize
                    observer
                    onSwiper={setSwiper}
                    onSlideChange={(e) => changeButton(e)}
                >
                    {items.map((val,index) => (
                        <SwiperSlide key={index}>
                            
                            <ImageandCaption name={val.name} zoom={val.zoom} image={val.image} invisible={val.invisible} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                   <Button variant="outline" color="red" boxSize="10" fontSize="14" zIndex={4} borderRadius="full" ref={prevRef} className="pi pi-chevron-left">
                        {" "}
                    </Button>
                    <Button variant="outline" color="red" boxSize="10" fontSize="14" zIndex={4} borderRadius="full" ref={nextRef} className="pi pi-chevron-right">
                        {" "}
                    </Button>
             
            </Stack>
        </>
    );
};



let ImageandCaption = ({ image, name, subtext, link, zoom, invisible }) => {
    return (
    
    <>
    <Image src={'img/portfolio-2.jpg'} objectFit="contain" w="100%" h="100%"/>
                        <Box bg="blackAlpha.500" position={'absolute'} top="0"  w="100%" h="100%"></Box>
                        <Stack position={'absolute'} top="0" {...centerFlex} w="100%" h="100%">
                            <Box w="70%" color="white">
                                <Text h="6"></Text>
                                <Text fontSize={'5xl'}>Online Campus Store</Text>
                                <Box h="250px">
                                    <Flex>
                                    <Text fontWeight={'black'} fontSize={'5xl'}>Anyone Anywhere Can See Your Products</Text>
                                        
                                    </Flex>
                                </Box>
                            </Box>
                        </Stack>
    </>
                       
                

        
      
    );
};

/** */
