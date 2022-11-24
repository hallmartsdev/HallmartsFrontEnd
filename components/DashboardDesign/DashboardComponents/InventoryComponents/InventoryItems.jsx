

import React from 'react'

import OrdersHead from './OrdersHead'
import {constFontSize} from '../../../../config' 
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider, Button, Input } from '@chakra-ui/react'

let details = [
    { productName: 'Rayban Shoes', price: 'N1000', category: 'shoes',brand:'rayban' },
    { productName: 'Rayban Shoes', price: 'N2000', category: 'shoes',brand:'rayban' },
    { productName: 'Rayban Shoes', price: 'N3000', category: 'shoes',brand:'rayban' },
    { productName: 'Rayban Shoes', price: 'N4000', category: 'shoes',brand:'rayban' },

]



let headerItems = ['Product Name', 'Price', 'Category', 'Brand','']

const InventoryItems = () => {
    return (
        <>
            <Box overflow={'auto'}>

                <table style={{ width: '100%', borderCollapse: 'collapse', display: 'table', borderSpacing: '0', }}>
                    <OrdersHead headerItems={headerItems} />
                    <tbody>
                        {
                            details.map((val, index) => (
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td >

                                        <LabelElement text={val.productName} />


                                    </td>
                                    <td>
                                        <LabelElement text={val.price} />
                                    </td>
                                    <td>
                                        <LabelElement text={val.category} />
                                    </td>

                                    <td>
                                        <LabelElement text={val.brand} />
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


        </>
    )

}

export default InventoryItems









let LabelElement = ({ text }) => {
    return (
        <Box py="2" pl="2">
            <Text color="blackAlpha.700">{text}</Text>
        </Box>
    )
}


