import React from 'react'
import Settings from '../components/Settings/Settings'
import Layout from '../components/Layout/Layout'
import fetchHallmartsData from '../ApiScripts/Homepage/fetchHallmartsData'


const settings = ({headlinks}) => {
  return (
    <Layout headlinks={headlinks}>
<Settings/>
    </Layout>
    
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


export default settings