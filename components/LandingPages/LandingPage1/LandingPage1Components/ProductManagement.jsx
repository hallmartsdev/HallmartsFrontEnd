import { Container,Box, Flex, Stack, HStack, VStack, Text, Heading, Input, Button, Image } from "@chakra-ui/react"
import { text } from "@fortawesome/fontawesome-svg-core"
import { centerFlex,landingPagelineHeight } from "../../../../constants"
const ProductManagement = ()=>{
    return (
<>

<Box py="20" w="100%">
    <Container maxW="container.lg">
    <HeadingText heading={'Product Management'}/>
<Flex h="100%" w="100%" >
<Stack flexBasis={'50%'} >
    <Text lineHeight={landingPagelineHeight} fontSize={'6xl'}>
        Inventory Dashboard
    </Text>
<Stack p="2">
    
<ListElement text="Upload Products at anytime"/>

<ListElement text="Upload Products at anytime"/>

<ListElement text="Upload Products at anytime"/>

<ListElement text="Upload Products at anytime"/>
</Stack>
</Stack>
<Stack flexBasis={'50%'}>

    <Image src="/Landing/dashboard.jpg" objectFit={'cover'} w="100%" h="100%"></Image>
</Stack>
</Flex>

    </Container>
</Box>
</>

    )
}
export default ProductManagement

let HeadingText = ({heading})=>{
    return (
        <Stack w="300px">
    <Text  fontSize={'2xl'}>{heading}</Text>
   <Flex >
   <Box  w="70%" h="1" bg="red.400"></Box>
   </Flex>
</Stack>
    )
}

let ListElement = ({text})=>((
    <HStack>
    <Box boxSize={2.5} borderRadius="full" bg="black"></Box>
    <Text>{text}</Text>
</HStack>
))