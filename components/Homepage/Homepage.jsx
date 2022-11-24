import React from "react"
import { Box, Flex, Stack, HStack, VStack, Text, Image, Button, Grid,Input,InputGroup,InputLeftElement,InputRightElement} from "@chakra-ui/react"
import StartBanner from "./StartBanner/StartBanner"
import CollectionsHomepage from "./CollectionsHomepage"
import BestCategories from "./BestCategories"
import Electronics from "./Electronics"
import ProductBanner from "./ProductBanner"
import BrandVideo from "./BrandVideo"
import FeaturedElectronic from "./FeaturedElectronic"
import Hashtags from "./Hashtags"
import Information from "./Information"




const Homepage = () => {
    return (
     <>
            <Stack spacing={20}>
                <StartBanner />
                <CollectionsHomepage />
                <BestCategories />
                <ProductBanner />
                <Electronics />
                <FeaturedElectronic />
                <BrandVideo />
                <Hashtags />
                <Information />
            </Stack>
        </>
    )
}
export default Homepage

