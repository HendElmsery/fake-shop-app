import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function 
() {
    const [cartItems, setcartItems] = useState(null)
async function getCartItems(){
    let {data} = await axios.get('https://fakestoreapi.com/carts/')
    setcartItems(data)
    console.log(data);
}
useEffect(() => {
getCartItems()  

}, [])


  return (
    <div>
<div className="container">
    <div className="row">
    {cartItems?.map((item,index)=>{
        return(
<div key={index} className="col-md-12">
   
        {item.id}
  
    <div className="colmd-5">
        {item.products.id}
    </div>
</div>

)
    })}
</div>
    </div>
    </div>
  )
}
