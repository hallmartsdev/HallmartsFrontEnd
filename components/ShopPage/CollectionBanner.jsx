import CollectionBannerDesktop from "./CollectionBannerModes/CollectionBannerDesktop"
import CollectionBannerMobile from "./CollectionBannerModes/CollectionBannerMobile"
import { Box } from "@chakra-ui/react"
const CollectionBanner = ()=>{
return(
    <>
    <Box display={['none','none','none','block']}>
    <CollectionBannerDesktop/>
    </Box>
    <Box display={['block','block','block','none']}>
    <CollectionBannerMobile/>
    </Box>

    </>
)
}
export default CollectionBanner