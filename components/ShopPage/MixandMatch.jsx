import { Box, Flex, Grid, HStack, Stack, VStack, Text, Image, Button } from "@chakra-ui/react"

const MixandMatch = ()=>{
    return (
        <>

<Box px="3" mt="20" maxW={'container.xl'} >
    <Flex flexDir={'column'} alignItems="center">
    <Text fontSize={'3xl'} textAlign={'center'}>Mix and Match</Text>
            <Grid mt="10"   display={['grid']} w="100%" overflowX={'auto'} templateColumns={["repeat(3,1fr)", "repeat(3,1fr)"]} gap={"5"}>
    {
        [...Array(3).keys()].map((val)=>(
<Stack  w="100%" >
            <Image objectFit={'cover'} minW={'300px'} src="/Images/home.jpg" h="200px"></Image>
          <Text fontSize={12}>OFFICE</Text>
          <Text fontWeight={'semibold'}>
            Time for new start we are hiring
          </Text>
           </Stack>
        ))
    }

                   
        </Grid>

        <Flex mt="10" justifyContent={'center'}>
<Button borderWidth={'0.7px'} borderColor="black" variant={'outline'}>More Posts</Button>
        </Flex>
    </Flex>
           
       
        </Box>

  
        </>
    )
}
export default MixandMatch