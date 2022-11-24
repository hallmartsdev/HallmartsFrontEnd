import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider } from '@chakra-ui/react'
const UserName = () => {
  return (
    <>
    <Flex px="20px" py="5px" justifyContent="center" alignItems="center" h="50px">
      <HStack w="100%">
    <Flex color="white" justifyContent={'center'} alignItems="center" borderRadius={'full'} p="2" bg="black" h="40px" w="40px"> 
    <Box>
    <i className='pi pi-user'></i>
    </Box>
    </Flex>
  
      <Text>DANIEL ODOKUMA</Text> 
      </HStack>
   
    </Flex>
    <Divider/>
    </>
    
  )
}

export default UserName