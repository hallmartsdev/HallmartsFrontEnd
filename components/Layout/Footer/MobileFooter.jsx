import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid,Input,InputGroup,InputLeftElement,InputRightElement} from "@chakra-ui/react"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

  
const MobileFooter = ({information,quicklinks})=>{
    return (
        <>
      <Accordion bg="blackAlpha.100" py="2" defaultIndex={[0]} allowMultiple>
      <FlexOurSubscribe/>
<FlexFooterInformation item={information} />
<FlexFooterInformation item={quicklinks} />
<FlexOurStore/>

</Accordion>
        </>
    )
}
export default MobileFooter


const FlexFooterInformation = ({item}) => {
    
    return (
        <>
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Text fontWeight={'bold'}>{item.mainName}</Text>
        <AccordionIcon  />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack color={'gray.700'}>
                {
                    item.items.map((val)=>(
                        <Text>{val.name}</Text>
                    ))
                }
            </Stack>
    </AccordionPanel>
  </AccordionItem>
</>
       
    )
}



const FlexOurStore = ()=>{
    return (
        <>
        <AccordionItem>
    <h2>
      <AccordionButton>
      <Text fontWeight={'bold'}>Store</Text>
        <AccordionIcon  />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack color={'gray.700'}>
           <Text>Find a location nearest to you <Box textDecoration={'underline'} as="span">See Our Stores</Box></Text>
          <Text>+2349026531778</Text>
          <Text>guonnie@gmail.com</Text>
        </Stack>
    </AccordionPanel>
  </AccordionItem>

</>
       

       
        
    )
}


const FlexOurSubscribe = ()=>{
    return (

        <>
        <AccordionItem >
    <h2>
      <AccordionButton>
      <Text fontWeight={'bold'}>Subscribe</Text>
        <AccordionIcon  />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Stack  color={'gray.700'}>
               <Text>Enter your email below to be the first to know about new collections and product offers</Text>
               <InputGroup borderWidth={'1px'}>
              <InputLeftElement className="pi pi-envelope" />
              <Input bg="white" variant='unstyled' py="2" w="100%" placeholder="Enter Your Email" />
              <InputRightElement className="pi pi-arrow-right" />
            </InputGroup>
            </Stack>
    
    </AccordionPanel>
  </AccordionItem>

</>
     


       
    )
}



