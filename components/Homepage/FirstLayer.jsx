import React from "react"
import { Box, Flex, Stack, HStack, VStack, Text, Image, } from "@chakra-ui/react"
const FirstLayer = ()=>{
    return (
        <HStack p="3" justifyContent={'space-between'}>
        <HStack>
            <HStack>
                <Box className="pi pi-facebook" />
                <Text>300k</Text>
                <Text>Followers</Text>
            </HStack>

            <HStack>
                <Box className="pi pi-instagram" />
                <Text>300k</Text>
                <Text>Followers</Text>
            </HStack>
        </HStack>

        <HStack>
            <Text>
                Open doors to walls of fashion
            </Text>
            <Text>
                |
            </Text>
            <Text textDecoration={'underline'}>
                Discover More
            </Text>
        </HStack>

        <HStack>
            <HStack>
                <Text>
                    English
                </Text>
                <Box fontSize={'13'} className="pi pi-chevron-down"></Box>
            </HStack>

            <HStack>
                <Text>
                    USD
                </Text>
                <Box fontSize={'13'} className="pi pi-chevron-down"></Box>
            </HStack>
        </HStack>


    </HStack>
    )
}

export default FirstLayer