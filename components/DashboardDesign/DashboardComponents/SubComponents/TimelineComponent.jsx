import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button } from '@chakra-ui/react'

const TimelineComponent = () => {
    let timelineSequence = [{name:'Odokuma Ogheneguono',message:'Just Placed an Order',time:'2m'},
    {name:'Simi Alao',message:'Just Added your item to favourites',time:'2m'},
    {name:'Odokuma Ogheneguono',message:'Just Placed an Order',time:'2m'},
    {name:'Ekong Emmanuel',message:'Just Cancelled his Order',time:'2m'},]
  return (
    <>
    <Flex overflow="auto" height="300px" px="3"  w="100%" flexDirection="column">
        {
            timelineSequence.map((val,index)=>(
<HStack w="100%">
  
  <Flex h="100%"  flexDirection={'column'}>
      <Flex  ml="1"  borderLeft= {(index!= 0) ?('1px dotted green'):('')}  flexBasis="50%"/>
      <Box w="10px" h="11px" bg="green"   borderRadius={'full'}>
  </Box>
      <Flex ml="1" borderLeft= {(index!= (timelineSequence.length-1)) ?('1px dotted green'):('')} flexBasis="50%"/>
  </Flex>
  <Flex  w="100%" flexDirection={'column'}>
 <Flex flexBasis="50%">
  <Flex w="100%"  justifyContent={'flex-end'} flexDirection={'column'}>
<Flex h="50%"  w="100%">
<RoundedIcons iconSize="10px" icon="pi pi-user" color="green.500"/>
<Flex   w="100%"  justifyContent={'space-between'}>
      <Flex flexDirection="column"  spacing="0">
          <Text fontWeight="semibold">{val.name}</Text>
          <Text >{val.message}</Text>
          
      </Flex>

 <Stack>
 <Text fontSize="12">{val.time} ago</Text>

<Button size="sm" fontSize="12" variant="link">Check Activity</Button>
 </Stack>

      </Flex>
</Flex>
<Divider mt="25px"/>
      </Flex>
</Flex>
  </Flex>
  </HStack>
            ))
        }


</Flex>

<Flex  justifyContent={'flex-end'} w="100%"  >
                <Button my="2" variant="outline" color="red" size="sm">Show More</Button>
              </Flex>
    </>
   
  )
}

export default TimelineComponent

let RoundedIcons = ({icon,color,iconSize})=>{
    return (
        <>
     <Flex mr="2" borderRadius="full"  width="30px" height="30px"  bg="green.100" justifyContent="center" alignItems="center">
     <Box  fontSize={iconSize} p="2" color="green">
                              <i style={{fontSize:'inherit'}} className={icon}></i>
                            </Box>
     </Flex>
                           
                         
        </>
    )
}

