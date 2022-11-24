import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid } from "@chakra-ui/react"
const Information = ()=>{
    return (
        <Box borderColor={'gray.300'} borderTopWidth="1px"  py="10">
        <HorizontalGrid/>
      </Box>
    )
}
export default Information


const HorizontalGrid = ({ style }) => {
    let items = [{headtext:'Free Shipping',subtext:'Tell Us About Your Service',icon:'pi pi-car'},
    {headtext:'Money Guarantee',subtext:'Within 30 days for exchange',icon:'pi pi-home'},
    {headtext:'Online Support',subtext:'24hrs a day, 7 days a week',icon:'pi pi-phone'},
    {headtext:'Flexible Payment',subtext:'Pay with multiple credit cards',icon:'pi pi-eye'},]
    return (
        <>
            <Grid {...style} mx="auto" w="100%" templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]} gap={["4","4","2","2"]}>
                {
                    items.map((val) => (
                     
                            <GridElement {...val} />
                      
                    ))
                }
            </Grid>
        </>

    )
}

const GridElement = ({headtext,subtext,icon}) => {
    return (
        <>
            <Box  position={'relative'}>
                  <Flex justifyContent={['start','start','center']}>
                    <Box pt="1" px="3" fontSize={'3xl'} className={icon}></Box>
                    <Stack>
                        <Text fontSize={'xl'} fontWeight="bold">{headtext}</Text>
                        <Text fontSize={'13'}>{subtext}</Text>
                    </Stack>
                  </Flex>
            </Box>
        </>
    )
}



