import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Input,Textarea,Button } from '@chakra-ui/react'
import { boxShadow,constFontSize } from '../../../config'
const UserProfile = () => {
  return (
   <>
   <Flex minH="450" flexDirection={['column','column','column','row']}>
<Flex boxShadow={boxShadow}  borderRadius={'10px'} flexBasis={'30%'} >
  <Box borderRadius={'inherit'}  position="relative" h="200px" w="100%">   
  <Image borderRadius={'inherit'} objectFit={'cover'} w="100%" h="100%" src="/Img/portfolio-1.jpg"/>
<Box borderRadius={'inherit'}  position="absolute" top="0" bg="blackAlpha.100" w="100%" h="100%"/>
<Flex justifyContent="center" bottom="-12" position="absolute" w="100%"  >
<Box p="1" borderRadius="full" bg="white">
<Image  borderRadius="full" borderColor="white" boxSize="100px" src="/Img/portfolio-1.jpg"/>
</Box>
</Flex>

<VStack mt="60px">
  <Text   fontWeight="bold">  Halo's Kitchen</Text>

  <Text fontSize="md" color="gray.500" maxW="200px" textAlign="center">  Your Number 1 spot for fried chicken in Nigeria</Text>
 
</VStack>
{/****/}
<Flex my="5" justifyContent={'center'} w="100%">
<Divider w="70%"></Divider>
</Flex>
{/****/}


<Flex w="100%">
  <VStack flexBasis={'50%'}>
<Text  fontWeight="semibold">12</Text>
<Text color="gray.500">Products</Text>
  </VStack>
  <VStack flexBasis={'50%'}>
  <Text  fontWeight="semibold">N12,000</Text>
<Text color="gray.500">Revenue</Text>
</VStack>
<VStack flexBasis={'50%'}>
<Text  fontWeight="semibold">12</Text>
<Text color="gray.500">Customers</Text>
</VStack>
</Flex>


  </Box>


  
</Flex>

<Flex ml={["0","10"]} borderRadius="10px" mt={["250","250","250","0"]} flexBasis={'70%'} boxShadow={boxShadow} p="3">
  <Box w="100%">
    <Text pl="2" >Edit Profile</Text>
  <Flex  width={'100%'}  flexDir={'row'} flexWrap="wrap">
<InputContainer name='First Name' flexBasis={'50%'}>

</InputContainer>
<InputContainer name='Last Name' flexBasis={'50%'}/>


<InputContainer name='Shop Name' flexBasis={'50%'}/>

<InputContainer name='School Address' flexBasis={'50%'}/>


<InputContainer name='City' flexBasis={'50%'}/>


<InputContainer name='Postal' flexBasis={'50%'}/>



<InputContainer name='About' flexBasis={'100%'}/>

</Flex>
<Flex justifyContent={'center'}>
<Button mx="auto" colorScheme={'blue'}>Update Profile</Button>
</Flex>

  </Box>

 
</Flex>
   </Flex>
   </>
  )
}

export default UserProfile

let InputContainer = ({flexBasis,name})=>((
  <Box  flexBasis={flexBasis} p="2">
<Text fontWeight="semibold" fontSize={constFontSize}>{name}</Text>
<Box>
<Input fontSize={constFontSize} placeholder={name}></Input>
 
</Box>
  </Box>
))