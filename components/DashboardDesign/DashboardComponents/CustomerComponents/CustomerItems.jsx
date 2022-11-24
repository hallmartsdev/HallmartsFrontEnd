

import React from 'react'

import OrdersHead from '../SubComponents/OrdersHead'
import {constFontSize} from '../../../../config'
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider, Button, Input } from '@chakra-ui/react'

let details = [
    { name: 'Rayban Shoes', email: 'guonnie@gmail.com',number:'08032324', dateJoined: '1/2/4' },
    { name: 'Rayban Shoes', email: 'guonnie@gmail.com',number:'08032324', dateJoined: '1/2/4' },
    { name: 'Rayban Shoes', email: 'guonnie@gmail.com',number:'08032324', dateJoined: '1/2/4' },
    { name: 'Rayban Shoes', email: 'guonnie@gmail.com',number:'08032324', dateJoined: '1/2/4' },

]



let headerItems = ['Name', 'Email', 'Phone Number', 'Date Joined','']

const CustomerItems = () => {
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

                                        <LabelElement text={val.name} />


                                    </td>
                                    <td>
                                        <LabelElement text={val.email} />
                                    </td>
                                    <td>
                                        <LabelElement text={val.number} />
                                    </td>

                                    <td>
                                        <LabelElement text={val.dateJoined} />
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

export default CustomerItems









let LabelElement = ({ text }) => {
    return (
        <Box py="2" pl="2">
            <Text color="blackAlpha.700">{text}</Text>
        </Box>
    )
}


