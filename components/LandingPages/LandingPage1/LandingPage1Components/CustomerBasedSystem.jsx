import { Container, Box, Flex, Stack, HStack, VStack, Text, Heading, Input, Button, Image } from "@chakra-ui/react"
import { centerFlex } from "../../../../constants"
import { HeadingText } from "../Misc"
import { landingPagelineHeight } from '../../../../constants'
const CustomerBasedSystem = () => {
    return (
        <>
            <Box h="100vh" pt="20">
                <Container h="100%" maxW="container.lg">
                    <Flex h="100%">
                        <Stack flexBasis={'50%'} h="100%" justifyContent="space-between">
                            <Text fontSize={'5xl'} lineHeight={landingPagelineHeight}>Customer Based System</Text>

                            <Text>Lorem ipsum dolor sit amet consectetur ad
                                ipisicing elit. Sed minima blanditiis rem repellat, harum exceptu
                                ri non deleniti? Ipsum at eius, quae
                                perferendis est adipisci commodi deserunt maxime,
                                reprehenderit beatae reiciendis.</Text>


                            <HeadingText heading={'Customer Feedback and Sales Record'} />
                        </Stack>
                        <Stack flexBasis={'50%'}>
                            <HStack h="100%">
                                <Box flexBasis={'50%'} h="400px">
                                    <Image borderRadius={10} h="100%" objectFit={'cover'} src="/Landing/Happy Customer Reviews 2.jpg" />
                                </Box>
                                <Box flexBasis={'50%'} h="400px">
                                    <Image borderRadius={10} objectFit={'cover'} h="100%" src="/Landing/Happy Customer Reviews 3.jpg" />
                                </Box>

                            </HStack>

                        </Stack>

                    </Flex>
                </Container>

            </Box>
        </>
    )
}
export default CustomerBasedSystem