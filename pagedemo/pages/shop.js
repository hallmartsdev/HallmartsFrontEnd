import React from 'react'
import Shop from '../components/Shop/Shop'
import Layout from '../components/Layout/Layout'
import fetchHallmartsData from '../ApiScripts/Homepage/fetchHallmartsData'



export default function shop({headlinks}) {
  return (
    <>
    <Layout headlinks={headlinks}>
    <Shop/>
    </Layout>
  
   
    </>
  )
}




export async function getServerSideProps(context) {
  try {

 let hallmartsDatainitial =  await fetchHallmartsData() 
    return {
      props: {headlinks:hallmartsDatainitial.results[0].category},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { },
    }
  }
}




