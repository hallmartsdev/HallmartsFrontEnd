import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button } from '@chakra-ui/react'
const ProductStock= ({width})=>{

    let details = [
        {productInfo:'Rayban Shoes',price:'$200',category:'Shoes',stock:'12'},
        {productInfo:'Short Tees',price:'$200',category:'Shirts',stock:'20'},
        {productInfo:'Gucci Flip Flops',price:'$300',category:'Slides',stock:'40'},
        {productInfo:'Rayban Shoes',price:'$200',category:'Shoes',stock:'60'},
         {productInfo:'Cornflakes',price:'$200',category:'Snacks',stock:'60'},
         {productInfo:'Long Tees',price:'$200',category:'Shirts',stock:'60'},
    ]


    return (
        <>
        <Box height="320px" overflow={'auto'}>
        <table  style={{width:width,borderCollapse:'collapse',display:'table',borderSpacing:'0',}}>
            <thead style={{backgroundColor:'#f8f9fa'}}>
            <tr style={{borderBottom:'1px solid #ddd'}}>
            <th >
                <LabelHeader text={'Popular Products'}/>
                </th>
            <th>
            <LabelHeader text={'Price'}/>
            </th>
            <th>
            <LabelHeader text={'Category'}/>
                </th>
            <th>
                
            <LabelHeader text={'Stock'}/>
            </th>
        </tr>
            </thead>
            <tbody>
        
            {
                details.map((val,index)=>(
                    <tr style={{borderBottom:'1px solid #eee'}}>
                    <td >
                       
                        <LabelElement text={val.productInfo}/>
                    </td>
                    <td>
                            <LabelElement text={val.price}/>
                        </td>

                        <td>
                            <LabelElement text={val.category}/>
                        </td>

                        <td >
                        <LabelElement text={val.stock}/>
                        </td>
                </tr>
              
                ))
            }
                 </tbody>
             
              </table>
        </Box>
          
              <Flex  justifyContent={'flex-end'} w="100%"  >
                <Button m="2" variant="outline" color="red" size="sm">Show More</Button>
              </Flex>
        </>
    )
}

export default ProductStock



 


let LabelElement = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}


let LabelHeader = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text textAlign="left" color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}