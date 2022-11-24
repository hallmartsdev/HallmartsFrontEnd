import React from 'react'
import Shop from '../../components/Shop/Shop'
import Layout from '../../components/Layout/Layout'
import fetchHeadlinks from '../../ApiScripts/Homepage/fetchHeadlinks'
import fetchShopData from '../../ApiScripts/ShopPage/fetchShopData'
import fetchAllShopData from '../../ApiScripts/ShopPage/fetchAllShopData'



export default function shop({allData,shopData,headlinks}) {
  return (
    <>
    <Layout headlinks={headlinks}>
    <Shop allData={allData} shopData={shopData}/>
    </Layout>
    </>
  )
}



export async function getServerSideProps(context) {
  try {

 let shopData =  await fetchShopData() 
 let headlinks =  await fetchHeadlinks() 
 let allData = await fetchAllShopData()

    return {
      props: {shopData:shopData.results,headlinks:headlinks.results,allData:allData.results},
    }
  } catch (e) {
    console.error(e)
    return {
      props: { },
    }
  }
}






