import { Box, Flex, Stack, HStack, VStack, Text, Heading, Input, Button, Image, Select } from "@chakra-ui/react"
import { centerFlex } from '../../../../constants'
import { capitalizeSentence } from "../../../../config"
import { useEffect, useState } from "react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {HallmartsLandingContext} from '../../../../Context/HallmartsLandingContext'
import { useContext } from "react"



const incomingArray = [{ image: 'Landing/control.jpg', caption: 'Comfortably manage your business on campus from anywhere and at anytime on campus' },
{ image: 'Landing/campus.png', caption: 'Anyone in any campus can see your products and services' },
{ image: 'Landing/pic (3).jpeg', caption: 'Promote business brands on campus' },
{ image: 'Landing/digital.jpeg', caption: 'Start your digital marketing experience on campus' },
{ image: 'Landing/manage.jpeg', caption: 'Manage sponsors businesses on campus' },
{ image: 'Landing/models.jpeg', caption: 'Connect small businesses with campus models' },
{ image: 'Landing/customer.jpeg', caption: 'Get Insight on customer base growth and campus trends' },
{ image: 'Landing/analytics.jpeg', caption: 'Inventory dashboard to track sales, customer order, delivery status and stock' },
{ image: 'Landing/price.png', caption: 'Have control over product price and other features of your product' },
{ image: 'Landing/feedback.jpg', caption: 'Get direct feedback on product ratings, comments and reactions on your product and services' },
]


const ImageChanger = ({}) => {
    const {intialkey} = useContext(HallmartsLandingContext)
    const [indexOfElement, setIndexOfElement] = useState(intialkey)
    const [indexOfText, setIndexOfText] = useState(0)
    const [fade, setFade] = useState(true)
    const [textFade, setTextFade] = useState(true)
    

    useEffect(() => {
        setTimeout(() => {
            if (indexOfElement != (incomingArray.length - 1)) {
                setIndexOfElement(indexOfElement + 1)
            } else {
                setIndexOfElement(0)
            }
        }, 6000)
    },[indexOfElement])

 
    return (
        <>
        {
            incomingArray.map((val,index)=>(
                <ImageSwiperElement indexOfElement={indexOfElement} indexEntered={index} {...val}/>
            ))
        }
        </>
    )
}




export default ImageChanger


const ImageSwiperElement = ({image,caption,indexEntered,indexOfElement})=>{
    return (
        <Box 
        display={(indexEntered==indexOfElement)?'block':'none'}
        className={"fade"} h={["400px","400px","500px","100vh"]} flexBasis={'60%'} position="relative">
        <Image src={image}  objectFit="cover" w="100%" h={["400px","400px","500px","100vh"]}></Image>
        <Box bg="blackAlpha.500" position={'absolute'} top="0" w="100%" h="100%"></Box>
        <Stack position={'absolute'} top="0" {...centerFlex} w="100%" h="100%">
            <Box w="90%" color="white">
                <Text h="6"></Text>
                <Box mb="4">
                        <Text  fontSize={['xl','3xl','5xl']}>{
                        capitalizeSentence(caption)
                        }</Text>
                </Box>
                <CarouselButton indexIncoming={indexOfElement} />
            </Box>
        </Stack>
    </Box>
    )
}

const CarouselButton = ({ indexIncoming }) => {
const {setInitialKey,LogValue} = useContext(HallmartsLandingContext)
    return (
        <HStack>
            {
                incomingArray.map((val, index) => (
                    <Box cursor={['auto','auto','pointer']} onClick={()=>{setInitialKey(index);LogValue(index)}} key={index}  p={["1.5","1.5","2","2"]} bg={(indexIncoming == index) ? "red" : "white"} borderRadius={'full'}></Box>
                ))
            }

        </HStack>
    )
}