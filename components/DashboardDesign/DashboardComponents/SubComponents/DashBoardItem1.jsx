import React from 'react'
import { Box,Flex,Stack,HStack,VStack,Image,Container,Grid,Text,Divider } from '@chakra-ui/react'
import { boxShadow } from '../../../../config'

const DashBoardItem1 = ({title,amount,icon,color}) => {
  return (
   <>
       <Box boxShadow={boxShadow} px="7"  py="4">
                        <HStack  justifyContent={'space-between'}>
                            <Flex justifyContent={'center'} alignItems="center">
                            <Box bg={color} fontSize={["20px","20px","24px"]} p={["3","3","4"]} color="white">
                              <i style={{fontSize:'inherit'}} className={icon}></i>
                            </Box>
                            </Flex>
                            <Stack spacing="0">
                              <Text textAlign="right" noOfLines="2" fontSize={['10','11']} >{title}</Text>
                              <Text textAlign="right" fontSize="3xl">{amount}</Text>
                            </Stack>
                           </HStack>
                           <Divider my="3"/>
                           <HStack>
                            <Box>
                              <i className='pi pi-chevron-right'></i>
                            </Box>
                            <Text cursor="pointer">
                                View More
                            
                            </Text>
                           </HStack>
                        </Box>
   </>
  )
}

export default DashBoardItem1