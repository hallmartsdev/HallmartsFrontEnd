import React from 'react'



const fetchShopData = async () => {
  
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

export default fetchShopData








/*
const res = await fetch('http://localhost:5000/tasks')

const res = await fetch(`http://localhost:5000/tasks/${id}`)

await fetch('http://localhost:5000/tasks',{method:'POST',headers:{'Content-type':'application/json'},body:JSON.stringify(task)})

const res =  await fetch(`http://localhost:5000/tasks/${id}`,{method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(updtask)})

await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
*/







