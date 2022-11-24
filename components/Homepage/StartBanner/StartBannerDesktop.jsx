import { Box, Flex, Stack, HStack, VStack, Text, Image, Button } from "@chakra-ui/react"
import { useState } from "react"
import CircularBorderButton from "../../Misc/CircularBorderButton"
const StartBannerDesktop = () => {
    let items = [{image:"/Landing/dele.png",text:'Double Breasted'},
    {image:"/Landing/models.jpeg",text:'Fresh Guys'},
    {image:"/Landing/model.jpeg",text:'Vivacious'},]
    let [selectedIndex,setSelectedIndex] = useState(0)

    return (
        <Box  h="400px" position={'relative'}>
            {
                items.map((val,index)=>(
                    <BannerDisplay items={items} setSelectedIndex={setSelectedIndex} {...val} indexEntered={index} selectedIndex={selectedIndex}/>
                ))
            }         
        </Box>
    )
}

export default StartBannerDesktop

const BannerDisplay = ({image,text,indexEntered,selectedIndex,setSelectedIndex,items})=>{
    return (
        <HStack bg="#d5e7e7" px="6" className="banner-enter" display={(indexEntered===selectedIndex)?'flex':'none'} justifyContent={'space-between'} w="100%" h="100%">
                <Stack className="banner-items">
                    <Text>New Arrivals</Text>
                    <Text fontSize={'5xl'}>{text}</Text>
                    <Flex>
                        <Button colorScheme={'black'} variant={'outline'}>Shop Now</Button>
                    </Flex>

                </Stack>

                <Image className="fade" h="100%" objectFit={'cover'} src={image} />
                <Stack h="100%" justifyContent={'space-between'}>
                    <HStack h="100%" justifyContent={'flex-end'}>
                        <ChangeImageButton items={items} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                    </HStack>
                    <HStack py="2">
                        <Text>The ReCotton Tee</Text>
                        <Text>|</Text>
                        <Text textDecoration={'underline'}>Shop Now</Text>
                    </HStack>
                </Stack>

            </HStack>
    )
}
const ChangeImageButton = ({selectedIndex,setSelectedIndex,items,backgroundColor}) => {
    const [toggle,setToggle] = useState(false)
    return (
        <Box>
            <Stack>
                {items.map((val,index)=>(
                    <Box cursor={['pointer']} onClick={()=>setSelectedIndex(index)}>
                <CircularBorderButton backgroundColor={'#d5e7e7'} active={(selectedIndex===index)}/>
                </Box>
                ))
                }
            </Stack>
        </Box>
    )
}





