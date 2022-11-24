import {server} from '../config'
import VendorDashboard from '../components/DashboardDesign/Dashboards/VendorDashboard'
import Link from 'next/link'
import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import fetchHeadlinks from '../ApiScripts/Homepage/fetchHeadlinks'


export default function Home({}) {

 


  return (
<>
      {
      <VendorDashboard/>
      }


    </>
  )
}


export async function getServerSideProps(context) {
  try {

 
    return {
      props: {},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { },
    }
  }
}




   
   ////http://localhost:5000/api/fetchPostPage/?page=1&limit=2&category=3D Modelling 
  





