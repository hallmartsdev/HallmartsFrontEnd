

import React from 'react'

import OrdersHead from './OrdersHead'
import {constFontSize} from '../../../../config'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button,Input } from '@chakra-ui/react'

let details = [
    {name:'Rayban Shoes',purchaseDate:'8/10/20',submittedDate:'Shoes',deliveredDate:'12',cancelledDate:'12'},
    {name:'Short Tees',purchaseDate:'$200',submittedDate:'Shirts',deliveredDate:'20',cancelledDate:'12'},
    {name:'Gucci Flip Flops',purchaseDate:'$300',submittedDate:'Slides',deliveredDate:'40',cancelledDate:'12'},
    {name:'Rayban Shoes',purchaseDate:'$200',submittedDate:'Shoes',deliveredDate:'60',cancelledDate:'12'},
     {name:'Cornflakes',purchaseDate:'$200',submittedDate:'Snacks',deliveredDate:'60',cancelledDate:'12'},
     {name:'Long Tees',purchaseDate:'$200',submittedDate:'Shirts',deliveredDate:'60',cancelledDate:'12'},
]

let headerItems = ['Customer Name','Purchase Date','Submitted Date','Delivered Date','Cancelled Date']


const TotalOrders = () => {
  return  (
    <>
    <Box height="320px" overflow={'auto'}>
    <Input fontSize={constFontSize}  placeholder="Search" mb="2"/>
    <table  style={{width:'100%',borderCollapse:'collapse',display:'table',borderSpacing:'0',}}>

       <OrdersHead headerItems={headerItems}/>
        <tbody>
    
        {
            details.map((val,index)=>(
                <tr style={{borderBottom:'1px solid #eee'}}>
                <td >
                   
                    <LabelElement text={val.name}/>
                </td>
                <td>
                        <LabelElement text={val.purchaseDate}/>
                    </td>

                    <td>
                        <LabelElement text={val.submittedDate}/>
                    </td>

                    <td>
                        <LabelElement text={val.deliveredDate}/>
                    </td>
                    <td>
                        <LabelElement text={val.cancelledDate}/>
                    </td>
                    <td>
                    <Button fontSize={constFontSize} my="auto" variant="link">Check Info</Button>
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

export default TotalOrders






 


let LabelElement = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}


