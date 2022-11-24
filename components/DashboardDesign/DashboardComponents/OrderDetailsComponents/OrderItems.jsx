

import React from 'react'

import OrdersHead from './OrdersHead'
import {constFontSize} from '../../../../config'
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider, Button, Input } from '@chakra-ui/react'

let details = [
    { customerName: 'Rayban Shoes', amount: 2, price: 'N1000', },
    { customerName: 'Short Tees', amount: 2, price: 'N1000', },
    { customerName: 'Gucci Flip Flops', amount: 2, price: 'N1000' },
    { customerName: 'Rayban Shoes', amount: 2, price: 'N1000' },

]

let userInformation = [
    {key: 'Customer Name', value: 'Odokuma Daniel',},
    { key: 'Location', value: 'Room B205, Afebabalola University',},
]

let orderExtraInformation = [
    { key: 'Discount Value', value: '1%',  },
    { key: 'Total Price', value: 'N3000', },
    { key: 'Order Mode', value: 'Recieved Order', },

   

]

let headerItems = ['Product Name', 'Amount', 'Price', '']

const DeliveredOrders = () => {
    return (
        <>
            <Box overflow={'auto'}>
                
            <Stack mb="2" color={'gray.600'}>
                {
                    userInformation.map((val,index)=>(
                        <HStack bg="gray.50" p="3" spacing="4">
                        <Text fontWeight={'bold'}>
                            {val.key}
                        </Text>
                        <Text>
                            {val.value}
                        </Text>
                    </HStack>
                    ))
                }
                   
                    

                </Stack>


                <table style={{ width: '100%', borderCollapse: 'collapse', display: 'table', borderSpacing: '0', }}>
                    <OrdersHead headerItems={headerItems} />
                    <tbody>
                        {
                            details.map((val, index) => (
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td >

                                        <LabelElement text={val.customerName} />


                                    </td>
                                    <td>
                                        <LabelElement text={val.amount} />
                                    </td>
                                    <td>
                                        <LabelElement text={val.price} />
                                    </td>
                                    <td>
                                        <Button fontSize={constFontSize} color="blue.500" my="auto" variant="link">Check Info</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>

            </Box>


            <Stack color={'gray.600'}>
                {
                    orderExtraInformation.map((val,index)=>(
                        <HStack bg="gray.50" p="3" spacing="4">
                        <Text fontWeight={'bold'}>
                            {val.key}
                        </Text>
                        <Text>
                            {val.value}
                        </Text>
                    </HStack>
                    ))
                }
                   
                    

                </Stack>
        </>
    )

}

export default DeliveredOrders









let LabelElement = ({ text }) => {
    return (
        <Box py="2" pl="2">
            <Text color="blackAlpha.700">{text}</Text>
        </Box>
    )
}


