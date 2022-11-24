import { Box, Flex, Stack, HStack, VStack,Fade, Text, Image,Grid,ScaleFade } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import { DropDownContext } from "../../../Context/DropDownContext"

const SecondLayer = () => {
    const [dropDownMenu,setDropDownMenu] = useState(false)
    return (
        <DropDownContext.Provider value={{setDropDownMenu}}>
      <Box p="3" zIndex={2}  onMouseLeave={()=>{setDropDownMenu(false)}} position={'relative'}>
            <HStack      justifyContent={'space-between'}>
                <NavigationDesktop />

                <NavigationButtons />
            </HStack>
            <HStack w="100%" h="100%" justifyContent={'center'} position={'absolute'} top="0">
                <Text  fontSize={['xl', 'xl', 'xl', '3xl']}>Hallmarts</Text>
            </HStack>

           {
            dropDownMenu &&<Box   
            onMouseEnter={()=>{setDropDownMenu(true)}}
            onMouseLeave={()=>{setDropDownMenu(false)}}
            px="5" pb="20" pt="5" zIndex={5} bg="white"
            pos={'absolute'} top="100" w="100%">
             <ScaleFade initialScale={0.9} in={true}>
               <DropDownMenu/>
               </ScaleFade>
               </Box>
           } 
               
         
      

           
        </Box>
        </DropDownContext.Provider>
     
    )
}

export default SecondLayer

const NavigationDesktop = () => {
    const [active,setActive] = useState(false)
    const {setDropDownMenu} = useContext(DropDownContext)

    const navigation = ['Home', 'Shop', 'Products', 'Pages', 'Blog', 'Features']
    return (
        <Flex 
      
    
        maxW={'350px'}
            flexWrap={'wrap'}>
            {
                navigation.map((val) => (
                    <NavigationItem text={val}/>
                ))
            }

        </Flex>
    )
}


const NavigationItem = ({text})=>{
    const [active,setActive] = useState(false)
 const {setDropDownMenu} = useContext(DropDownContext)
    return (
        <HStack
        cursor={'pointer'}
        onMouseEnter={()=>{setActive(true);setDropDownMenu(true)}}
        onMouseLeave={()=>{setActive(false)}}
        px="2" py="3">
        <Text
        
         zIndex={3}
            color={active ? "red" : 'black'}>{text} </Text>
        <DropDownBox active={active} style={{color:(active?"red" : 'black')}}/>
    </HStack>
    )
}
const DropDownBox = ({style,active}) => {
    return (
        <Box {...style} fontSize={'11'} className={active?"pi pi-chevron-up":"pi pi-chevron-down"} />
    )
}

const NavigationButtons = () => {
    return (
        <HStack spacing={3}>
            <Box className="pi pi-search" />
            <Box className="pi pi-user" />
            <Box className="pi pi-star" />
            <Box className="pi pi-shopping-bag" />
        </HStack>
    )
}

const DropDownMenu = ()=>{
    
    return (
     <Flex
  
     >
        <Grid mt="10" className="fade"  display={['grid']} w="100%" overflowX={'auto'} templateColumns={["repeat(4,1fr)"]} gap={"5"}>
 {
     [...Array(4).keys()].map((val)=>(
<Stack>
 {
     [...Array(4).keys()].map((val)=>(
         <Text>Ready</Text>
     ))
 }

 </Stack>
         
     ))
 }

                
     </Grid>
<Flex flexDir={'column'}>
 <Image h="200px" w="500px" objectFit={'cover'} src="/Landing/models.jpeg"></Image>
<Text fontSize={'xl'}>The New Season Shoes Edit</Text>
<Stack spacing={1} w="inherit">
 <Text>Shop Now</Text>
 <Box w="100px" bg="black" pt="0.5"></Box>
</Stack>
</Flex>

        </Flex>
       
        
    )
}