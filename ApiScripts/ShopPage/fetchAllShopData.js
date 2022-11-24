import React from 'react'



const fetchAllShopData = async () => {
  
    const res = await fetch('https://hallmartsapi.herokuapp.com/shop/products',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })    
let resJSon =  await  res.json()

    return resJSon    

}

export default fetchAllShopData













