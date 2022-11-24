import { getCartToken } from "../../config";
export default class API{

    static async addToCart(cartItems){
console.log('Send To URL')

console.log(JSON.stringify(cartItems))
    
 let res = await fetch('https://hallmartsapi.herokuapp.com/shop/add/to/cart/details',
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(cartItems)
    })
    .then((response) => response.json())
    .then((responseData) => {
     // console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));

    return res


  }

  static async getCartItems(){
    console.log('Send To URL')     
     let res = await fetch(`https://hallmartsapi.herokuapp.com/shop/cart/${getCartToken()}`,
        {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((responseData) => {
         // console.log(responseData);
          return responseData;
        })
        .catch(error => console.warn(error));
    
        return res
    
      }
    
      static async modifyCartItem({item,action}){
        console.log('Send To URL')     
         let res = await fetch(`https://hallmartsapi.herokuapp.com/shop/cart/${getCartToken()}`,
            {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify(item)
            })
            .then((response) => response.json())
            .then((responseData) => {
             // console.log(responseData);
              return responseData;
            })
            .catch(error => console.warn(error));
        
            return res
        
          }
    
          
          static async getUniversities(){
            const options = {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': '41584b338fmsh47f98cfcca4eb12p1cf725jsn35b135ad5e6a',
                  'X-RapidAPI-Host': 'nigeria-universites.p.rapidapi.com'
              }
          };
          
          let res = fetch('https://nigeria-universites.p.rapidapi.com/universities/', options).then((response) => ({status:response.status,data:response.json()}))
          .then((responseData) => {
            return responseData;
          })
          .catch(error => console.warn(error));
    return res
      
   
          
          }

    
      


          
      
      
          static async addToWaitList(item){
            console.log('Send To URL')     
            console.log(item)
             let res = await fetch(`https://hallmartsapi.herokuapp.com/vendor/registration`,
                {
                  method: "POST",
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify(item)
                })
                .then((response) =>  ({status:response.status,data:response.json()}))
        .then((responseData) => {
       
          return responseData;
        })
                .catch(error => console.warn(error));
            
                return res
            
              }
        

      
  



  

}


/***
 *  const res = await fetch('https://hallmartsapi.herokuapp.com/shop/add/to/cart/details',
       {
           method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body:JSON.stringify(cartItems)
       }).catch(err=>{
        console.log(err)
       })    

    try {
      return res.json()
    } catch (error) {
      return []
    }
 */