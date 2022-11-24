import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button,Input } from '@chakra-ui/react'
import OrdersHead from './OrdersHead'
const OrdersComponent = ({details}) => {
    let headerItems = ['Customer Name','Delivered Date','Delivered Date','Delivered Date']
    let keys = details.map((val,index)=>(Object.keys(val))) 
    let values = details.map((val,index)=>(Object.values(val))) 
    console.log({keys,values})
  return (
    <>
<OrdersHead headerItems={headerItems}/>
    
        <tbody>
    
        {
            values.map((val,index)=>(
                <tr style={{borderBottom:'1px solid #eee'}}>
                

                {
                    val.map((value,index)=>(
                        <td>
                        <LabelElement text={value}/>                    
                     </td>
                    ))

                }
               
            
               
            </tr>
          
            ))
        }
             </tbody>
         
        
    </>
  )
}

export default OrdersComponent




let LabelElement = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}

