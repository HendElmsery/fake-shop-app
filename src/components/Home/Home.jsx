import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

export default function Home() {

const [allPrducts, setallPrducts] = useState(null)
const [allcatigories, setallcatigories] = useState(allPrducts)
 async function getallProducts(){
  
  let {data} = await axios.get(`https://fakestoreapi.com/products?limit=20`)
  setallPrducts(data)
  setallcatigories(data)
  console.log(data);
}
async function getCategory(category){
  let {data} = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
 
  const updateList = data.filter((x) => x.category === category);
  setallcatigories(updateList)
  console.log(data);

 }
useEffect(() => {
  
getallProducts()

 
}, [])

  return <>
  <div className='container'>
     
      <div id="carouselExampleControls" className="carousel slide  mt-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src={'./1.png'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'./2.png'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'./3.png'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'./4.png'} className="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* side bar */}
<div className="container mt-3">
  <div className="row">
    <div className="col-md-3">
    <div className="position-sticky" >
      <button onClick={()=>  setallcatigories(allPrducts)} className="btn btn-outline-dark m-1 btn-sm">All</button>
      <button onClick={()=>getCategory('women\'s clothing')} className="btn btn-outline-dark m-1 btn-sm">Women's Clothing</button>
      <button onClick={()=>getCategory('men\'s clothing')}  className="btn btn-outline-dark m-1 btn-sm">Men's Clothing</button>
      <button  onClick={()=>getCategory('jewelery')} className="btn btn-outline-dark m-1 btn-sm">Jewelery</button>
      <button onClick={()=>getCategory('electronics')} className="btn btn-outline-dark m-1 btn-sm">Electronics</button></div>
    </div>
    <div className="col-md-9">
      <div className="row gy-4">

      {allcatigories?.map((product,i)=>{
        return(
          <div key={product.id} className="col-md-4">
          
            <div className="card h-100 p-2">
            <Link to={`/productDetails/${product.id}`}>
            <div className="card-img "><img className='w-100' src={product.image} alt="product"  /></div>
            
              
              <div className="card-title m-3 p-2">
                <small>{product.title}...</small>
              </div>
              <div className='mt-auto'><div className="d-flex justify-content-between align-items-center">
                <div className="m-3"><b>{product.price}$</b></div>
              <button className="btn btn-sm m-3 border-primary"><i className="fa fa-arrow-right text-muted"></i></button>
              </div></div>
              </Link>
            </div>
          </div>
        )

      })}
    </div>
  </div>
  </div>
</div>
    </div>

<Footer/>  
</>
  
 
}
