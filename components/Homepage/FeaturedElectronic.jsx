import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const FeaturedElectronic = ()=>{
    return (
        <Flex justifyContent={'center'}>

        <Box p="3" maxW={'container.lg'} mx="auto" >
         <HStack  flexDirection={['column','column','row','row']} minH="300px" spacing={[0,0,10,20]}>
             <Box   flexBasis={'50%'}>
             <Image objectFit={'cover'} w="100%" h="100%" src="/Img/portfolio-9.jpg"/>
             </Box>

             <Box  flexBasis={'50%'}>
            <Stack spacing={[5,5,5,10]}>
             <Text fontSize={'3xl'} fontWeight="semibold">Get The Ultimate Alien Watch For Fighting Aliens</Text>
           <Text fontSize={13}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro expedita consectetur error, alias ipsum quisquam velit! Error a impedit animi, sapiente et, aperiam quidem dignissimos quae voluptatem commodi illo? Quam?
           </Text>
           <Flex>
             <Button rounded={'full'} color="white" bg="black" _hover={{}}>Shop Setup</Button>
           </Flex>
           
            </Stack>
             </Box>
          
         </HStack>
        </Box>
         
        </Flex>
    )
}

export default FeaturedElectronic