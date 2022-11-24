import {useToast, Box, Flex,Spinner, Stack, HStack, VStack, Text, Heading, Input, Button, Image,Checkbox, Select } from "@chakra-ui/react"
import { centerFlex } from '../../../../constants'
import { ImageSwiper } from "./ImageSwiper"
import ImageChanger from "./ImageChanger"
import API from "../../../Api/api"
import { capitalizeSentence } from "../../../../config"
import { useEffect } from "react"
import { useState } from "react"
import {allUniversites} from './universitesList' 
import {HallmartsLandingContext} from '../../../../Context/HallmartsLandingContext'



let smallerInputs = ['46.5%', '47%', '48.5%', '100%']
let fontSize = [11, 11, 'sm']



const HallmartsLandingPage = () => {
    const [intialkey,setInitialKey] = useState(0)
    const [display,refreshDisplay] = useState(true)
    useEffect(()=>{
setTimeout(()=>{
    refreshDisplay(true)
},0.0001)
refreshDisplay(false)
    },[intialkey])
const LogValue = (value)=>{
    console.log(intialkey)
}
    return (
        <>
        <HallmartsLandingContext.Provider value={{intialkey,setInitialKey,LogValue}}>
        <Box position={'relative'}>
                <Flex flexDir={['column', 'column', 'column', 'row']} h="100vh" >
                    <Stack h="inherit" alignItems={['center', 'center', 'start', 'start']} justifyContent="center" flexBasis={'40%'}>
                        <Box px="3" pb="3">
                            <HStack  spacing={0}>
                                <Box pl={["0","0","2"]}>
                                    <Image boxSize={["40px","40px","70px"]} objectFit="contain" src="/Hallmarts/icon.png"/>
                                </Box>
                                <Text  m="1" color={'red.400'}  fontSize={['3xl','3xl','5xl']}>Hallmarts</Text>
                            </HStack>
                           
                            <Text pl={["0","0","2"]} ml="2" my="3" fontWeight={'semibold'} maxW={'400'}>Hallmarts is an e-commerce platform for university students to buy and sell products on and off campus.</Text>
                            <Box display={['none', 'none', 'none', 'block']}>
                                <FormElement />
                            </Box>

                        </Box>
                    </Stack>

                    {
     
     display ?<ImageChanger intialkey={intialkey}/>:
     <Box h={["400px","400px","500px","100vh"]}>

     </Box>
          
               
            
            }

                    
                
                    <Box mt="3" display={['block', 'block', 'block', 'none']}>
                        <FormElement />
                    </Box>
                </Flex>


            </Box>
        </HallmartsLandingContext.Provider>
            

        </>
    )
}

export default HallmartsLandingPage


let SelectItems = (props) => {

    return (
        <Select {...props} color={('gray.500')} onChange={(e) => {
            props.setSelectEl(e.currentTarget.value,props.keyName,props.items)
             }} rounded={'full'} _hover={{borderColor:'black'}} borderColor={'gray.500'} >
            {
                props.items.map((val, index) => (
                    <option key={index} value={index}>{val}</option>

                ))
            }

        </Select>
    )
}


let removeSpacesFromString = (str) => {
    return str.replace(/\s/g, '')
}


let FormElement = () => {

    const categories = ['Fashion', 'Phones and gadgets',
        'Health & beauty', 'Sport', 'Travel', 'Education','Computers','Electronics','Gaming','Food','Home and Office','Others']


    useEffect(() => {
        const getUniversities = async () => {
       let res =  (JSON.parse(allUniversites))
    let universityNames = res.map((val)=>val.name)
    setUniversities(universityNames.sort())
        }

        getUniversities()

    }, [])

    const [swalProps, setSwalProps] = useState({});
    const toast = useToast()

    const[buttonProcessing,setButtonProcessing] = useState(false)
    const [universites,setUniversities] = useState([])
const [formElements,setFormElements] = useState({graduate:'False'})
    let setTextEl = (value,keyEntered)=>{
let copiedElements = {...formElements}
copiedElements[keyEntered] = value
setFormElements(copiedElements)
    }

    
    let setSelectEl = (value,keyEntered,array)=>{
        let copiedElements = {...formElements}
        copiedElements[keyEntered] = array[value]
        setFormElements(copiedElements)   
    }
let setSelectCheckBox = (value,keyEntered)=>{
let copiedElements = {...formElements}
if(value===true){
copiedElements[keyEntered] = 'True'
}else{copiedElements[keyEntered] = 'False'}
setFormElements(copiedElements) 
}
    let addToWaitList =()=>{

        let crossCheck = {
            'email':formElements.email_name,
            'vendor name':formElements.vendor_name,
            'store name': formElements.store_name,
        'business type':formElements.categories,
        'university': formElements.universities,
        'graduate': formElements.graduate,
       
        }


const body = {
    email:formElements.email_name,
    vendor:formElements.vendor_name,
category:formElements.categories,
university: formElements.universities,
brand: formElements.store_name,
graduate:formElements.graduate
}
let boolItems = []

Object.entries(crossCheck).forEach(val=>{
    if((val[1]==null)||(val[1]==undefined)||(val[1]=="")){
        toast({
            title: 'Error',
            description: capitalizeSentence(`your ${val[0]} is missing`),
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        boolItems.push(false)
    }
})

if(!validateEmail(crossCheck.email)){
    toast({
        title: 'Error',
        description: capitalizeSentence(`your email is wrong`),
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    boolItems.push(false)
}


if(!boolItems.includes(false)){
    setButtonProcessing(true)
    API.addToWaitList(body).then(parentVal=>{
        console.log(parentVal.status)
        parentVal.data.then(val=>
            {        
                setButtonProcessing(false)
        toast({
            title: (Number(parentVal.status) != 201)?'Error':'Action Successful',
            description: Object.values(val)[0],
            status:(Number(parentVal.status) !== 201)?'error':'success',
            duration: 9000,
            isClosable: true,
          })
         
        }
       
        )

      
    })
    
}else{
   
}


    }


    return (
        <Box px="3"  py="2" maxW={['100%', '100%', '100%', '400px']} mx={["auto", "auto", "0", "0"]}>
            <Text ml="1" maxW={['200px', '200px', '100%', '200px']} mb="2">{('Register your business on campus').toUpperCase()}</Text>
            {
                (universites.length>0) &&
                <Flex className="fade" flexWrap={'wrap'}>
                <InputComponent  m="1" type="email" text={formElements['email_name']} setTextEl={setTextEl} keyName={'email_name'} placeholder="Email" />
                <InputComponent  m="1" type="text" text={formElements['vendor_name']}  setTextEl={setTextEl} keyName={'vendor_name'} placeholder="Vendor Name" />
                <InputComponent  m="1" type="text" text={formElements['store_name']} setTextEl={setTextEl} keyName={'store_name'} placeholder="Store Name" />
                <SelectItems items={categories} m="1" placeholder="Business Type" setSelectEl={setSelectEl} keyName={'categories'} fontSize={fontSize} flexBasis={smallerInputs} />
                <SelectItems items={universites} m="1" placeholder="University" setSelectEl={setSelectEl} keyName={'universities'} fontSize={fontSize} flexBasis={'100%'} />
                <CheckBoxItems setSelectCheckBox={setSelectCheckBox} keyName={'graduate'} />
                <Button isDisabled={buttonProcessing} onClick={()=>addToWaitList()} m="1" flexBasis={'100%'} rounded={'full'} colorScheme={'red'}>{buttonProcessing?'Adding..':'Join Our Waitlist'} <Spinner size={'sm'} display={buttonProcessing?'block':'none'}/></Button>
            </Flex>
            }
            {
                (universites.length ==0) &&(

                    <Spinner/>
    )
            }
          
        </Box>
    )


}

let InputComponent = ({ placeholder,setTextEl,keyName,text,type }) => {


    return (
        <>
        <Box flexBasis={smallerInputs} m="1">
        <Input color={'gray.500'} required={true} type={type}  w="100%" value={text} onChange={(e)=>setTextEl(e.currentTarget.value,keyName)} fontSize={fontSize}  rounded={'full'} _hover={{borderColor:'black'}} borderColor={'gray.500'} placeholder={placeholder}></Input>
    {
        (text)&&(type=='email')&&(
            <>
            {
            (!validateEmail(text))&&
            <Box fontSize={12} className="fade">Your email is not correct</Box>
            }
            </>
            
        )
    }
        </Box>
      
        
        </>
        )
}


const validateEmail =(value) =>{
    const validRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
if(value){
    if (value.match(validRegex)) {
        return true;
      } else {
        return false;
    
      }
}
  
  
  }

  const CheckBoxItems = ({setSelectCheckBox,keyName})=>{
    return (
        <Checkbox colorScheme={'red'} pl="2" pt="1" pb="5" fontSize={fontSize} onChange={(e)=>setSelectCheckBox(e.target.checked,keyName)} >Click here if you are not on campus</Checkbox>
                
    )
  }
/**
 *     <Stack h="inherit" flexBasis={'60%'} position="relative">
                        <Image src="/Landing/yellowshirt.jpg" objectFit="cover" w="100%" h="100%"></Image>
                        <Box bg="blackAlpha.500" position={'absolute'} top="0"  w="100%" h="100%"></Box>
                        <Stack position={'absolute'} top="0" {...centerFlex} w="100%" h="100%">
                            <Box w="70%" color="white">
                                <Text h="6"></Text>
                                <Text fontSize={'5xl'}>Online Campus Store</Text>
                                <Box h="250px">
                                    <Flex>
                                    <Text fontWeight={'black'} fontSize={'5xl'}>Anyone Anywhere Can See Your Products</Text>
                                        
                                    </Flex>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>

 */


                    