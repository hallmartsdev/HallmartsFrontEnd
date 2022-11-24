import React, { useState } from 'react'
import { Box, Flex, Stack, HStack, VStack, Image, Container, Grid, Text, Divider } from '@chakra-ui/react'
import DashBoardHome from '../DashboardComponents/DashBoardHome'
import Settings from '../DashboardComponents/UserProfile'
import SideBar from '../DashboardComponents/SideBar'
import Header from '../DashboardComponents/Header'
import UserName from '../DashboardComponents/UserName'
import UploadProduct from '../DashboardComponents/UploadProduct'
import Customers from '../DashboardComponents/Customers'
import Orders from '../DashboardComponents/Orders'
import Inventories from '../DashboardComponents/Inventories'
import OrderDetails from '../DashboardComponents/OrderDetails'
import ProductDetails from '../DashboardComponents/ProductDetails'
import SimpleDrawer from '../../Drawer/VendorDrawer'
import { VendorContext } from "../../../Context/VendorContext"


const VendorDashboard = () => {
  let [page, setPage] = useState('Dashboard')

  return (
    <>
    <VendorContext.Provider value={{setPage,page}}>
    <Box>
        <Container fontSize="11" maxW="1500px"   >
          <Flex w="100%">
            <Flex display={['none','none','flex']} px="5" bg="white" flexDirection="column" flexBasis="20%">
              <UserName />
              <Box w="100%" mt="30px">
                <SideBar setPage={setPage} />
              </Box>
            </Flex>
            <Flex  flexBasis="100%" flexDirection="column">
              <Header setPage={setPage} />
              <Box w="100%" mt="30px">
                <SetCurrentPage page={page} />
              </Box>
            </Flex>
          </Flex>

        </Container>
      </Box>
    </VendorContext.Provider>
    

    </>
  )
}

export default VendorDashboard


/**
 *   <Stack spacing="0">
<Text>Capacity</Text>
<Text fontSize="24px">120</Text>
</Stack>




 */

let SetCurrentPage = ({ page }) => {
  let currentPage
  switch (page) {
    case 'Dashboard':
      currentPage = (<><DashBoardHome /></>);
      break;
    case 'User Profile':
      currentPage = (<><Settings /></>);
      break;

    case 'Upload Product':
      currentPage = (<><UploadProduct /></>);
      break;

    case 'Customers':
      currentPage = (<><Customers /></>);
      break;

    case 'Orders':
      currentPage = (<><Orders /></>);
      break;


    case 'Order Details':
      currentPage = (<><OrderDetails /></>);
      break;
    case 'Inventories':
      currentPage = (<><Inventories /></>);
      break;

      case 'Product Details':
      currentPage = (<><ProductDetails /></>);
      break;

      


  }
  return currentPage
}
