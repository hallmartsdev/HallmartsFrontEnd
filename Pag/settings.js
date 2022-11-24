import React from 'react'
import Settings from '../components/Settings/Settings'
import Layout from '../components/Layout/Layout'
import fetchHeadlinks from '../ApiScripts/Homepage/fetchHeadlinks'


const settings = ({headlinks}) => {
  return (
    <Layout headlinks={headlinks} >
<Settings/>
    </Layout>
    
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


export default settings