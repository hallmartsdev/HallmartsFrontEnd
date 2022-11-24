import { Input, Box, Flex, Button, Stack, Text, HStack, VStack, InputRightElement, InputLeftElement } from "@chakra-ui/react"
import Link from "next/link"
const SignIn = () => {
    return (
        <>
            <VStack fontFamily={'Quicksand'} px="5" h="100vh" >
                <VStack pb="5">
                    <Text fontWeight="semibold" fontSize={'3xl'}>Login</Text>
                    <HStack>
                        <Text >Home</Text>
                        <Box fontSize={12} className="pi pi-chevron-right"></Box>
                        <Text>Account</Text>
                    </HStack>
                </VStack>

                <HStack flexDir={['column', 'column', 'row']} spacing={[0, 0, 0, 20]}>
                    <Box pt="10" w="100%" flexBasis={'50%'}>
                        <Box maxW={["100%", "100%", "100%", "500"]}>
                            <Text mb="6" fontSize={'xl'} textAlign={['center', 'left']} fontWeight="semibold">Login</Text>

                            <Stack >
                                <Input borderWidth="thin" type={'email'} placeholder="Email" />
                                <Input borderWidth="thin" type={'password'} placeholder="Password" />
                            </Stack>
                            <Text textDecor={'underline'} fontSize={['13', 'sm']} my="4">
                                Forgot your password?
                            </Text>

                            <Button bg="black" w="100%" _hover={{}} color={'white'}>Sign In</Button>

                        </Box>

                    </Box>
                    <Box pt="10" w="100%" flexBasis={'50%'}>

                        <Box maxW="500">
                            <Stack spacing={5}>
                                <Text fontSize={'xl'} textAlign={['center', 'left']} fontWeight="semibold">New Customer</Text>
                                <Text fontSize={['13', 'sm']}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, quae aperiam? Praesentium odio itaque iste ad
                                    velit rem enim ipsam iusto eligendi, eveniet, veniam cumque nam dolorem, ratione odit temporibus.
                                </Text>
                                <Box>
                                    <Link href={'register'}>
                                    <Button bg="black" _hover={{}} color={'white'}>Register</Button>

                                    </Link>

                                </Box>
                            </Stack>

                        </Box>


                    </Box>
                </HStack>
            </VStack>
        </>
    )
}

export default SignIn