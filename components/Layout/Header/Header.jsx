import FirstLayer from "./FirstLayer"
import SecondLayer from "./SecondLayer"
import MobileHeader from "./MobileHeader"
import { Box } from "@chakra-ui/react"
const Header = ()=>{
    return (
        <>
       <Box mx="auto" maxW={'container.xl'}>
       <Box fontSize={[11,11,11,14]} display={['none','none','block']}>
         <FirstLayer />
         <SecondLayer/>
         </Box>

         <Box display={['block','block','none']}>
        <MobileHeader/>
         </Box>
         
       </Box>
        
     
        </>
    )
}

export default Header