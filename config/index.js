const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3000' :'yourwebsite.com'



//test
export const database = 'daventyagency'

export const boxShadow = '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.19)'
export const boxShadow1 = '0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 20px 0 rgba(0, 0, 0, 0.19);'


export const constFontSize = 11
export const carouselVariant = {
  animatingObject :{
      transform:`scale(${ 1 })`
   
     },
     noneAnimatingObject : {
      transform:`scale(${0.5})`
   
     }

 }


 export const fadeVariant = {
  animatingObject :{ 
      opacity:1
   
     },
     noneAnimatingObject : {
      opacity:0
   
     }

 }

 export const random10 = ()=>{
  let text = "";
  let possible = "0123456789";

  for( let i=0; i < 10; i++ ){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
 }
 return  text;

}

export const getItemToken = ()=>{
  let token
  if(localStorage.getItem('carttoken')){
      token= Number(localStorage.getItem('carttoken'))
  }else{
      token = Number(random10())
      localStorage.setItem('carttoken',token)
  }
  return token
}

export const getCartToken = ()=>{
  let token
  if(localStorage.getItem('carttoken')){
      token= Number(localStorage.getItem('carttoken'))
  }else{
      token = 'missing_token'
  }
  return token
}





export const formatHeadingLink =(val)=>{
    let array = val.split(' ')
    const regex = /[^A-Za-z0-9]/g;
   let newarray = array.map(val=>{return val.toLowerCase().replace('?','')
   .replace('!','')
})
   
return newarray.join('-').toString()
}

export const  parseCurrency = (amount)=> { 
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount).replace('.00','')
}


export const  getBadgeMode = (mode)=>{
    let val 
    switch (mode.toLowerCase()) {
      case 'new':
        val = {key:"New",color:'blue.500'};
          break;
      case 'popular':
        val = {key:"Popular",color:'red.500'};
          break;
      case 'out of stock':
        val = {key:"Out Of Stock",color:'orange.500'};
          break;
      case 'trending':
        val = {key:"Trending",color:'teal.500'};
          break;
       default:
         val = {key:capitalizeFirstLetter(mode),color:'blue.500'};
  }
  return val
  }

  export const uid = ()=>{
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  
  }
  


  export const convertApitoReadableArray =(category) =>{
    let AlphaLevelArray = []
      try {
        category.forEach((val)=>{
          let  firstLevelArray = []  
         
           val.firstlayercategories.forEach((val)=>{
          let secondLevelArray = []
             val.secondlayercategories.forEach((val)=>{
             //  let secondlevel = {name:val.name}
               secondLevelArray.push(val.name)
             })
             let firstLevel  = {name:val.name,subItems:secondLevelArray}
             firstLevelArray.push(firstLevel)
           })
           
           let AlphaLevel = {categoryName:val.name,active:false,items:firstLevelArray}
           AlphaLevelArray.push(AlphaLevel)
         })
         return AlphaLevelArray
      } catch (error) {
        return []
      }
  
}

export const capitalizeFirstLetter = (str)=> {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export const capitalizeSentence = (str)=>{
  const arr = str.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");

return str2
}


export const getSlug = (link)=>{
  let slug = link.replace('https://hallmartsapi.herokuapp.com/shop/product/','')
  return slug
}

export const extractedItems = (gottenCartItems)=>{
console.log(gottenCartItems)
  try {
      let extractedItems =  gottenCartItems.orders.map((val)=>{
          return {name:val.product.name,
              price:val.product.price,
              total:val.total_cost_of_product,
              image:val.product.image_1,
          id:val.id,
      quantity:val.quantity,
    category:val.product.category[0].name}
      })
      return extractedItems
  } catch (error) {
     return []
  }
 
}



