import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Container,Grid,Text,Divider } from '@chakra-ui/react'
import SimpleDrawer from '../../Drawer/VendorDrawer'
const Header = ({setPage}) => {
  return (
    <>
    <HStack px={["5px","5px","20px"]} py="5px" h="50px" justifyContent={'space-between'} w="100%">
    <HStack>
    <SimpleDrawer setPage={setPage} btnColor="black"/>
<Text>DASHBOARD</Text>
    </HStack>

<HStack>

<HStack>
<Box>
  <i className="pi pi-chart-bar"></i>
</Box>
<Text>Stats</Text>
</HStack>

<HStack>
<Box>
  <i className="pi pi-bell"></i>
</Box>
<Text>Notifications</Text>
</HStack>


</HStack>
</HStack>
<Divider/>
    </>
  )
}

export default Header