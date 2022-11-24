import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider } from '@chakra-ui/react'
import DashBoardItem1 from './DashBoardItem1'
const OverviewItems = () => {
    let menuObjects = [{title:'Number of Customers',amount:'20',icon:'pi pi-users',color:'red.500'},
{title:'Total Orders',amount:'30',icon:'pi pi-book',color:'green.500'},
{title:'Pending Deliveries',amount:'-5',icon:'pi pi-clock',color:'yellow.500'},
{title:'Delivered Orders',amount:'+5',icon:'pi pi-check',color:'blue.500'},

]
  return (
   <>
   <Grid  w="100%" templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']} gap="3" >
    {
        menuObjects.map((val,index)=>(
            <DashBoardItem1 title={val.title} amount={val.amount} color={val.color} notification={val.notification} icon={val.icon}/>
        ))
    }
                    
                 </Grid>
   </>
  )
}

export default OverviewItems