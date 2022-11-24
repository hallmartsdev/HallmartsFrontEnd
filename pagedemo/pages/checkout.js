import React from 'react'
import Checkout from '../components/Checkout/Checkout'
import Layout from '../components/Layout/Layout'
import fetchHallmartsData from '../ApiScripts/Homepage/fetchHallmartsData'


const checkout = ({headlinks}) => {
  return (
    <>
    <Layout headlinks={headlinks}>
    <Checkout/>
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


export default checkout