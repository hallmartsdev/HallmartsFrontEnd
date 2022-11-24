import React from 'react'
import Details from '../components/Details/Details'
import Layout from '../components/Layout/Layout'
import fetchHallmartsData from '../ApiScripts/Homepage/fetchHallmartsData'


const detail = ({headlinks}) => {
  return (
    <>
    <Layout headlinks={headlinks}>
    <Details/>
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


export default detail