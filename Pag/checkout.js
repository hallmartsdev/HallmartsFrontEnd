import React from 'react'
import Checkout from '../components/Checkout/Checkout'
import Layout from '../components/Layout/Layout'
import fetchHeadlinks from '../ApiScripts/Homepage/fetchHeadlinks'


const checkout = ({headlinks}) => {
  return (
    <>
    <Layout headlinks={headlinks} >
    <Checkout />
    </Layout>
    
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

export default checkout