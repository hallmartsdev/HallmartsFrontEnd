import { Box, Flex, Stack, HStack, VStack, Text, Image,Button } from "@chakra-ui/react"
import StartBannerDesktop from "./StartBannerDesktop"
import StartBannerMobile from "./StartBannerMobile"
const StartBanner = ()=>{
    return (
        <>
        <Box>
        <Box display={['block','block','none']}>
            <StartBannerMobile/>
        </Box>

        <Box display={['none','none','block']}>
            <StartBannerDesktop/>
        </Box>
        </Box>
          

      
        
        </>
    )
}

export default StartBanner

