import { Box, Flex, Stack, HStack, VStack, Text, Image, Button } from "@chakra-ui/react"
import { useEffect,useState } from "react"
const CircularBorderButton = ({active,backgroundColor})=>{
    let [animationStart,setAnimationStart ] = useState(false)
   
        useEffect(()=>{
            if(active){
                setTimeout(()=>{
                    setAnimationStart(false)
                },400)
                setAnimationStart(true)
            }},[active])
    
   
    return (
        <>
        {
            (active)?
            <Box className={animationStart?"spinbutton":""} borderRadius="full"  p="1" borderWidth={'2px'} borderColor={animationStart?backgroundColor:'black'}  bg={backgroundColor} >
        <Box p="1" borderRadius={'full'} bg="black" />
            </Box>
            :
            <Box borderRadius="full"  p="1" borderWidth={'2px'} borderColor={backgroundColor}  bg={backgroundColor} >
        <Box p="1" borderRadius={'full'} bg="black" />
            </Box>

        }
        </>
        
    )
}
export default CircularBorderButton

