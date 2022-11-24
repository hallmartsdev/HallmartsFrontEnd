import {server} from '../config'
import Homepage from '../components/Homepage/Homepage'
import Link from 'next/link'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import fetchHeadlinks from '../ApiScripts/Homepage/fetchHeadlinks'


export default function Home({headlinks}) {

 


  return (
<>
      {
        <Layout headlinks={headlinks} >
<Homepage />
        </Layout>
      }


    </>
  )
}


export async function getServerSideProps(context) {
  try {

 let headlinks =  await fetchHeadlinks() 
    return {
      props: {headlinks:headlinks.results},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { },
    }
  }
}




   
   ////http://localhost:5000/api/fetchPostPage/?page=1&limit=2&category=3D Modelling 
  





