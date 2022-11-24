import { Box, Flex, Grid, HStack, Stack, VStack, Image } from "@chakra-ui/react"
import { centerFlex } from "../../constants"
import CategoryBanner from "./CategoryBanner"
import CollectionBanner from "./CollectionBanner"
import ProductBannerType1 from "./ProductBannerType1"
import ProductBannerType2 from "./ProductBannerType2"
import ProductBannerType3 from "./ProductBannerType3"
import ProductBannerCountdown from "./ProductBannerCountdown"
import MixandMatch from "./MixandMatch"
import { Container } from "@chakra-ui/react"
const ShopPage = () => {
 
    return (
        <>
<Box maxWidth={'container.xl'} mx="auto" pb="20">
<CategoryBanner/>
        <Container mt="10" maxW="container.xl">
        <CollectionBanner/>
        </Container>
    
       <ProductBannerType1/>
       <MixandMatch/>
       <ProductBannerType2/>
       <ProductBannerType3/>
       <ProductBannerCountdown/>
</Box>
       
       
     
       
     
        
        </>
    )
}
export default ShopPage

