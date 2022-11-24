import React from 'react'
import { Box,Text } from '@chakra-ui/react'

const OrdersHead = ({headerItems}) => {
  return (
    <thead style={{backgroundColor:'#f8f9fa'}}>
    <tr style={{borderBottom:'1px solid #ddd'}}>
        {
            headerItems.map((val,index)=>(
                <th >
                <LabelHeader text={val}/>
                </th>
            ))
        }
</tr>
    </thead>
  )
}

export default OrdersHead

let LabelHeader = ({text})=>{
    return (
        <Box py="2" pl="2">
                            <Text textAlign="left" color="blackAlpha.700">{text}</Text> 
                        </Box>
    )
}
