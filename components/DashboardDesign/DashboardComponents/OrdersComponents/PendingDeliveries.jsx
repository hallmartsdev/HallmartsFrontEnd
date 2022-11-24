

import React from 'react'
import {btnFontSize} from './constantStyles'
import OrdersHead from './OrdersHead'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button,Input } from '@chakra-ui/react'

let details = [
    {customerName:'Odokuma Daniel',submittedDate:'18/10/22',new:true},
    {customerName:'Odokuma Daniel',submittedDate:'18/10/22',},
    {customerName:'Odokuma Daniel',submittedDate:'18/10/22'},
    {customerName:'Odokuma Daniel',submittedDate:'18/10/22'},
     {customerName:'Odokuma Daniel',submittedDate:'18/10/22'},
     {customerName:'Odokuma Daniel',submittedDate:'18/10/22',},
]
let headerItems = ['Customer Name','Submitted Date','']

const PendingDeliveries = () => {
  return  (
    <>
       <Box height="320px" overflow={'auto'}>
<Input fontSize={btnFontSize} placeholder="Search" mb="2"/>
    <table  style={{width:'100%',borderCollapse:'collapse',display:'table',borderSpacing:'0',}}>
       <OrdersHead headerItems={headerItems}/>
        <tbody>
    
        {
            details.map((val,index)=>(
                <tr  style={{borderBottom:'1px solid #eee'}}>
                   

                <td >
                <Box position="relative">
                     <LabelElement text={val.customerName}/>
                        {val.new && <Box color="white" position="absolute" top="-1" fontSize="6" bg="blue.500" px="1" py="0.5">
                            New
                        </Box>
                        }
                    </Box>
                   
                </td>
                <td>
                        <LabelElement text={val.submittedDate}/>
                    </td>

                 
                    <td>
                   
                   <Button my="auto" fontSize={btnFontSize} variant="link">Check Info</Button>
                
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

export default PendingDeliveries






 


let LabelElement = ({text})=>{
    return (
        <Box py="2"  pl="2">
                            <Text color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}


