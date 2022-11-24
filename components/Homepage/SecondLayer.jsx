import { Box, Flex, Stack, HStack, VStack, Text, Image, } from "@chakra-ui/react"
const SecondLayer = ()=>{
    return (
        <Box  p="3" position={'relative'}>
                    <HStack justifyContent={'space-between'}>
                        <NavigationDesktop />

                        <NavigationButtons />
                    </HStack>
                    <HStack w="100%" h="100%" justifyContent={'center'} position={'absolute'} top="0">
                        <Text fontSize={'3xl'}>Hallmarts</Text>
                    </HStack>
                </Box>
    )
}

export default SecondLayer

const NavigationDesktop = () => {
    const navigation = ['Home', 'Shop', 'Products', 'Pages', 'Blog', 'Features']
    return (
        <Flex maxW={'350px'}  flexWrap={'wrap'}>
            {
                navigation.map((val) => (
                    <HStack px="2" py="3">
                        <Text>{val}</Text>
                        <DropDownBox />
                    </HStack>
                ))
            }

        </Flex>
    )
}
const DropDownBox = () => {
    return (
        <Box fontSize={'11'} className="pi pi-chevron-down" />
    )
}

const NavigationButtons = () => {
    return (
        <HStack spacing={3}>
            <Box className="pi pi-search" />
            <Box className="pi pi-user" />
            <Box className="pi pi-star" />
            <Box className="pi pi-shopping-bag" />
        </HStack>
    )
}