

import React from 'react'
import {btnFontSize} from './constantStyles'
import OrdersHead from './OrdersHead'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button,Input } from '@chakra-ui/react'

let details = [
    {customerName:'Odokuma Daniel',purchaseDate:'18/10/22',},
    {customerName:'Odokuma Daniel',purchaseDate:'18/10/22',},
    {customerName:'Odokuma Daniel',purchaseDate:'18/10/22'},
    {customerName:'Odokuma Daniel',purchaseDate:'18/10/22'},
     {customerName:'Odokuma Daniel',purchaseDate:'18/10/22'},
     {customerName:'Odokuma Daniel',purchaseDate:'18/10/22',},
]

let headerItems = ['Customer Name','Purchase Date','']

const RecievedOrders = () => {
  return  (
    <>
    <Box height="320px" overflow={'auto'}>
<Input fontSize={btnFontSize} placeholder="Search" mb="2"/>
    <table  style={{width:'100%',borderCollapse:'collapse',display:'table',borderSpacing:'0',}}>
       <OrdersHead headerItems={headerItems}/>
        <tbody>
    
        {
            details.map((val,index)=>(
                <tr style={{borderBottom:'1px solid #eee'}}>
                <td >
                   
                    <LabelElement text={val.customerName}/>
                </td>
                <td>
                        <LabelElement text={val.purchaseDate}/>
                    </td>

                 
                    <td>
                   
                   <Button fontSize={btnFontSize} my="auto" variant="link">Check Info</Button>
                
                   </td>
            </tr>
          
            ))
        }
             </tbody>
         
          </table>
    </Box>
      
    </>
)

}

export default RecievedOrders






 


let LabelElement = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}


