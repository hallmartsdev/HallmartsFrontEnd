import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid,Input,InputGroup,InputLeftElement,InputRightElement} from "@chakra-ui/react"



const DesktopFooter = ({information,quicklinks})=>{
    return (
        <Flex fontSize={'sm'} bg="blackAlpha.100">
        <FlexFooterCasing>
            <FlexFooterInformation item={information} />
        </FlexFooterCasing>

        <FlexFooterCasing>
            <FlexFooterInformation item={quicklinks} />
        </FlexFooterCasing>

        
        <FlexFooterCasing>
        <FlexOurStore/>
        </FlexFooterCasing>
        <FlexFooterCasing>
        <FlexOurSubscribe/>
        </FlexFooterCasing>
        
    </Flex>
    )
}

export default DesktopFooter


const FlexFooterInformation = ({item}) => {
    
    return (
        <Stack h="200px" w="250px" spacing={4}>
            
            <Text fontWeight={'bold'}>{item.mainName}</Text>
            <Stack color={'gray.700'}>
                {
                    item.items.map((val)=>(
                        <Text>{val.name}</Text>
                    ))
                }
            </Stack>

        </Stack>
    )
}

const FlexOurStore = ()=>{
    return (
        <Stack h="200px" w="250px" spacing={4}>
            
        <Text fontWeight={'bold'}>Store</Text>
        <Stack color={'gray.700'}>
           <Text>Find a location nearest to you <Box textDecoration={'underline'} as="span">See Our Stores</Box></Text>
          <Text>+2349026531778</Text>
          <Text>guonnie@gmail.com</Text>
        </Stack>

    </Stack>
    )
}


const FlexOurSubscribe = ()=>{
    return (
        <Stack h="200px" w="250px" spacing={4}>
            
        <Text fontWeight={'bold'}>Subscribe</Text>
        <Stack  color={'gray.700'}>
           <Text>Enter your email below to be the first to know about new collections and product offers</Text>
           <InputGroup borderWidth={'1px'}>
          <InputLeftElement className="pi pi-envelope" />
          <Input bg="white" variant='unstyled' py="2" w="100%" placeholder="Enter Your Email" />
          <InputRightElement className="pi pi-arrow-right" />
        </InputGroup>
        </Stack>

    </Stack>
    )
}



const FlexFooterCasing = ({ children }) => {
    return (
        <Flex py="10" justifyContent={'center'} flexBasis={'50%'}>

            {children}
        </Flex>
    )
}