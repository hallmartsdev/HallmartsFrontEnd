import { Stack,Box,Text,Flex } from "@chakra-ui/react"
export const HeadingText = ({heading})=>{
    return (
        <Stack w="300px">
    <Text  fontSize={'2xl'}>{heading}</Text>
   <Flex >
   <Box  w="70%" h="1" bg="red.400"></Box>
   </Flex>
</Stack>
    )
}