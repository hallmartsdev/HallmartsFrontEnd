import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Box } from "@chakra-ui/react"
const Layout = ({children})=>{
    return (
        <>
        <Box  overflowX={'hidden'}>
        <Header/>
        {children}
        <Footer/>
        </Box>
    
        </>
    )
}
export default Layout