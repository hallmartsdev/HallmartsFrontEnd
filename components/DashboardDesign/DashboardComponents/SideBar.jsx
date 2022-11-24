import React, { useEffect } from 'react'
import {useState,useContext} from 'react'
import {VendorContext} from '../../../Context/VendorContext'
import { Box,Flex,Stack,HStack,VStack,Container,Grid,Text } from '@chakra-ui/react'


const SideBar = ({currentPage}) => {

 let {page,setPage} = useContext(VendorContext)
 useEffect(()=>{
  clickItem(page)
 },[page])


  let [sideBarMenu, setSideBarMenu] = useState([{title:'Dashboard',icon:'pi pi-server',active:true},
  {title:'User Profile',icon:'pi pi-user',active:false},
  {title:'Upload Product',icon:'pi pi-upload',active:false},
 {title:'Customers',icon:'pi pi-users',active:false},
 {title:'Orders',icon:'pi pi-book',active:false},
 {title:'Order Details',icon:'pi pi-info',active:false},
 {title:'Inventories',icon:'pi pi-briefcase',active:false},
 {title:'Product Details',icon:'pi pi-info',active:false}])

    let clickItem = (incomingTitle)=>{
let oldObject  = [...sideBarMenu]
let newValue = oldObject.map((val)=>{
  if(val.title == page){
    val.active =true
    return val
  }
  val.active =false 
  return val
})


      setSideBarMenu(newValue)
    }
  return (
    <>
    <Stack  w="100%"  spacing="4">
{
    sideBarMenu.map((val,index)=>(
        <HStack    background={val.active?'red.500':'white'} color={val.active?'white':'black'} onClick={async()=>{setPage(val.title);clickItem(page);}} cursor="pointer" rounded={'full'} px="20px" _hover={{backgroundColor:"red.500",color:'white',transition: '.2s ease'}}  key={index} spacing="4" w="100%" h="60px" >
  <Flex justifyContent={'center'} alignItems="center"  >

    <Box >
    <i className={val.icon}  ></i>
    </Box>
  </Flex>
  <Text>{val.title.toUpperCase()}   </Text>
</HStack>
    ))
}


</Stack>
    </>
  )
}

export default SideBar



