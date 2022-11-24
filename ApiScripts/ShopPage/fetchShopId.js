const fetchShopId = async ({id}) => {
 
    const res = await fetch(`https://hallmartsapi.herokuapp.com/shop/product/${id}`,
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

export default fetchShopId