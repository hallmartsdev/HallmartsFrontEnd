import React from 'react'
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider, Button } from '@chakra-ui/react'
import PendingDeliveries from './OrdersComponents/PendingDeliveries'
import TotalOrders from './OrdersComponents/TotalOrders'
import DeliveredOrders from './OrdersComponents/DeliveredOrders'
import RecievedOrders from './OrdersComponents/RecievedOrders'
import CancelledOrders from './OrdersComponents/CancelledOrders'
import { boxShadow } from '../../../config'
const Orders = () => {
  return (
    <Box>
      <Flex flexWrap={["wrap"]} flexDir={['column','column','row']}>
     
          <OrderContainer flexBasis="50%" name="Recieved Orders">
          <RecievedOrders/>
          </OrderContainer>
      

    
            <OrderContainer flexBasis="50%" name="Pending Deliveries">
            <PendingDeliveries/>
          </OrderContainer>
      
          <OrderContainer flexBasis="50%" name="Delivered Orders">
          <DeliveredOrders />
          </OrderContainer>

          <OrderContainer flexBasis="50%" name="Cancelled Orders">
          <CancelledOrders />
          </OrderContainer>



          <OrderContainer flexBasis="100%" name="Total Orders">
          <TotalOrders />
          </OrderContainer>


      </Flex>
    </Box>
  )
}

export default Orders

const OrderContainer = ({name,children,flexBasis})=>{
  return (
    <Box flexBasis={flexBasis} p="3">
 <Stack p="2" boxShadow={boxShadow} w="100%">
            <Text fontWeight={'semibold'}>{name}</Text>
            {children}
        
          </Stack>
    </Box>
   
  )
}