import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Input } from '@chakra-ui/react'
import OrderItems from './OrderDetailsComponents/OrderItems'
import {constFontSize} from '../../../config'
const OrderDetails = () => {
  return (
    <>

<Stack  h="100px">
  <Box>
  <Input fontSize={constFontSize} placeholder="Search id"/>
  </Box>

<Flex flexDirection={'column'}>

<OrderItems/>
</Flex>
</Stack>


    </>
    
  )
}

export default OrderDetails