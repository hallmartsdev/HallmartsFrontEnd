import { Box, Flex, Stack, HStack, VStack, Text, Image,Button } from "@chakra-ui/react"
import { useState,useEffect } from "react"
import CircularBorderButton from "../../Misc/CircularBorderButton"
const StartBannerMobile = ()=>{
    let items = [{image:"/Landing/dele.png",text:'Double Breasted'},
    {image:"/Landing/models.jpeg",text:'Fresh Guys'},
    {image:"/Landing/model.jpeg",text:'Vivacious'},]
    let [selectedIndex,setSelectedIndex] = useState(0)


    return (
        <>
        <VStack>
        {
                items.map((val,index)=>(
                    <BannerDisplay items={items} setSelectedIndex={setSelectedIndex} {...val} indexEntered={index} selectedIndex={selectedIndex}/>
                ))
            }      
     <ChangeImageButton items={items} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                   
        </VStack>
        </>
    )
}

export default StartBannerMobile

const BannerDisplay = ({image,text,indexEntered,selectedIndex,setSelectedIndex,items})=>{
    return (
        
        <VStack display={(indexEntered===selectedIndex)?'flex':'none'}>
        <Box bg="#d5e7e7" h="300px" w="100vw">
                <Image className="fade" mx="auto" h="100%" src={image}></Image>
            </Box>
            <Box className="banner-enter">
<VStack className="banner-items" >
<Text fontWeight={'bold'}>New Arrivals</Text>
<Text fontSize={'2xl'}>{text}</Text>
<Button variant={'outline'} borderColor="black">Shop Now</Button>
</VStack>
            </Box>

        </VStack>
        
    )
}

const ChangeImageButton = ({selectedIndex,setSelectedIndex,items}) => {
    const [toggle,setToggle] = useState(false)
    return (
        <Box pt="10">
            <HStack>
                {items.map((val,index)=>(
                    <Box  onClick={()=>setSelectedIndex(index)}>
                <CircularBorderButton backgroundColor="white" active={(selectedIndex===index)}/>
                </Box>
                ))
                }
            </HStack>
        </Box>
    )
}
