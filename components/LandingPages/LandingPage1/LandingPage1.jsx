import React from "react"
import {Box,Stack } from "@chakra-ui/react"
import {centerFlex} from '../../../constants'
import HallmartsLandingPage from "./LandingPage1Components/HallmartsLandingPage"

const LandingPage1 = () => {
    return (
        <>
        <Box mx="auto" maxW={2000}>
        <Stack fontFamily={"Quicksand"}  spacing={20}>
        <HallmartsLandingPage />    
        </Stack>
        </Box>
        
           
        </>
    )
}
export default LandingPage1
