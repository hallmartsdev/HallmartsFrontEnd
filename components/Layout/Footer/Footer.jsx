import DesktopFooter from "./DesktopFooter"
import MobileFooter from './MobileFooter'
import { Box } from "@chakra-ui/react"
const Footer = ()=>{
    let information = {mainName:'Information',items:[{link:'',name:'Privacy Policy'},
{link:'',name:'Refund Policy'},
{link:'',name:'Shipping and Return'},
{link:'',name:'Terms and Conditions'},]}


let quicklinks = {mainName:'Quick Links',items:[{link:'',name:'My Account'},
{link:'',name:'Cart'},
{link:'',name:'Wishlist'},
{link:'',name:'Compare'},]}


    return (
        <>
        <Box maxW={'container.xl'} mx="auto">
        <Box display={['none','none','none','block']}>
        <DesktopFooter information={information} quicklinks={quicklinks}/>
        </Box>
        <Box  display={['block','block','block','none']}>
        <MobileFooter information={information} quicklinks={quicklinks}/>
        </Box>
        </Box>
      
        
        </>
    )
}
export default Footer