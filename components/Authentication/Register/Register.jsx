import { Input,Box,Flex,Button,Stack,Text,HStack,VStack,InputRightElement,InputLeftElement } from "@chakra-ui/react"
import Link from "next/link"
const Register = ()=>{
    return (
        <>
        <VStack fontFamily={'Quicksand'}>
            <VStack pb="15">
                <Text fontWeight="semibold" fontSize={'3xl'}>Register</Text>
                <HStack>
                    <Text >Home</Text>
                    <Box fontSize={12} className="pi pi-chevron-right"></Box>
                    <Text>Create Account</Text>
                </HStack>
            </VStack>
        <HStack p="5" alignItems={'center'} justifyContent={'center'}>

<Box maxW="500">
 <Stack>
     <Text fontSize={'xl'} textAlign={['center','left']} fontWeight="semibold">Register</Text>
     <Input borderWidth="thin" placeholder="Full Name"/>
     <Input borderWidth="thin" placeholder="Last Name"/>
     <Input borderWidth="thin" type={'email'} placeholder="Email"/>
     <Input borderWidth="thin" type={'password'} placeholder="Password"/>
 </Stack>
 <Text color={'gray.500'} fontSize={['13','sm']} my="4">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse incidunt 
     adipisci ad expedita ipsa cum reprehenderit unde, necessitatibus eum quasi! Doloribus autem quod corporis nesciunt possimus animi cumque velit.
 </Text>
 <Stack>
   
    <Button bg="black" _hover={{}} color={'white'}>Register</Button>
   
    <Link href={'login'}>
<Button bg="white" borderWidth={1} borderColor="black">Sign Up</Button>
</Link>
 </Stack>
</Box>
</HStack>

        </VStack>
   
        </>
    )
}
export default Register