import {Container, Box, Flex,Stack,Grid,HStack, VStack, Text, Heading, Input, Button, Image } from "@chakra-ui/react"
import { centerFlex } from "../../../../constants"
import {uid} from '../../../../config'
import {HeadingText} from '../Misc'
import {landingPagelineHeight} from '../../../../constants'
let itemSortMethod = (items) => {
    let firstItem = items[0]
    let otherItems = items.slice(1)
    return ({ firstItem, otherItems })
  }
let enteringArray = ['Brand Influencers/aedh.png',
'Brand Influencers/dead.png',
'Brand Influencers/bcxed.png',
'Brand Influencers/xela.png',
'Brand Influencers/7thtribe.png',]

const CampusModels = ()=>{
return (
    <>
<Box  w="100%">
    <Container maxW="container.lg">
        <HeadingText heading={'Campus Brands'}/>
    <Flex p="3" h="100%" w="100%" flexDir={['column','column','row','row']}>

{<>{enteringArray.length && <Box flexBasis={'50%'}  position="relative" mb={["4","4","0","0"]}>
<FirstElement src={itemSortMethod(enteringArray).firstItem}/></Box>}
    <Box ml={["0","0","4","4"]} flexBasis={'50%'}>
      {enteringArray.length && <Grid h="100%" gap={3}  templateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} >
          { itemSortMethod(enteringArray).otherItems.map((val, index) => (
              <SmallBox key={uid()} image={val} />
            ))}</Grid>}</Box>
  </>
}
</Flex>

<HStack>
    <Flex flexBasis={"50%"} >

<Text maxW="300" lineHeight={landingPagelineHeight} fontSize={'6xl'}>Brand Identity</Text>
    </Flex>
    <Box flexBasis={"50%"}>
<Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus 
    rem odio suscipit animi. Accusamus voluptatem officiis numquam officia quaerat eius soluta aliquid, corporis minus, fugit nihil alias earum dignissimos.
</Text>
</Box>
</HStack>



    </Container>
</Box>
    </>
)
}
export default CampusModels



let FirstElement =  ({src})=>{
    return(
    <>
    <Image  borderRadius="10px" src={src} objectFit="cover" width="100%" height="95%" />
    </>
  
  )}
  

  let SmallBox = ({ image }) => {
    return (
        <Box  borderRadius="10px" position="relative">
          <Image src={image} borderRadius="10px" h="200px"  w="100%"
            objectFit="cover"
          />
        </Box>  
    )
  }
