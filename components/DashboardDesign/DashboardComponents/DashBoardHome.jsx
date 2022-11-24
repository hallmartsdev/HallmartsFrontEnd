import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider,Button } from '@chakra-ui/react'
import DashBoardItem1 from './SubComponents/DashBoardItem1'
import ProductStock from './SubComponents/ProductStock'
import OverviewItems from './SubComponents/OverviewItems'
import TimelineComponent from './SubComponents/TimelineComponent'
import { boxShadow } from '../../../config'

import LineChartDemo from '../../PrimeComponents/LineChartDemo'
import DoughnutChartDemo from '../../PrimeComponents/DoughnutChartDemo'
const DashBoardHome = () => {
   
  return (
   <>
   <Box>
     {/** Overview Items **/}
   <OverviewItems/>

<Flex flexDirection={['column','row','row']} mt="20px"  w="100%">
<Box mt="5" boxShadow={boxShadow}  mr={["0","0","4"]}  flexBasis="60%">
<ProductStock width="100%"/>
</Box>
<Flex mt="5" boxShadow={boxShadow} flexDirection="column" flexBasis="40%">
  <Box px="2" >
Recent Activity
  </Box>
    <TimelineComponent/>
</Flex>


</Flex>

<Flex flexDirection={['column','row','row']} mt="10" w="100%" >

  <Flex  p="5" flexDirection="column" mt="5"  mr={["0","4"]} flexBasis="40%" boxShadow={boxShadow} >
    <Text >Total Order</Text>
    <Text   color="blackAlpha.700">Based on previous orders</Text>
    <Flex mt="5" w="100%"  alignItems="center" justifyContent={'center'}>
      <Flex w="100%">
      <Box w="100%" >
    <DoughnutChartDemo/>
    </Box>
      </Flex>
    
    </Flex>
   

  </Flex>
  <Flex flexBasis={'60%'} p="5" mt="5" flexDirection="column"  boxShadow={boxShadow}>
  <Text >2022 Sales</Text>
    <Text   color="blackAlpha.700">Weekly Stats</Text>
    <Flex mt="5" w="100%"   >
      <Flex w="100%">
      <Box w="100%" h={["300px","300px","100%"]}>
    <LineChartDemo/>
    </Box>
      </Flex>
    
    </Flex>

  </Flex>
 
</Flex>
   </Box>
   </>
  )
}

export default DashBoardHome


/***
 * Number of products uploaded so far (Number of products)

Total orders so far (Total Orders)

Total orders pending (Pending)


Total orders Delievered (Order)


  <Flex >
        
        
<Box w="12px" h="12px" bg="red"   borderRadius={'full'}>

</Box>
    </Flex>

*/

