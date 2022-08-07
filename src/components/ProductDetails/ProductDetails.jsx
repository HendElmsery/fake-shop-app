import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function ProductDetails() {
    let params = useParams()
    const [productDetails, setproductDetails] = useState(null)
    async function getProductDetails(id) {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproductDetails(data)
    }
    useEffect(() => {
        getProductDetails(params.id)
    })

    return <>

        <div className='container px-0 ' style={{ marginTop: '80px' }}>
            <div className="back-arrow">
                <Link to="/home"><i className="fa-solid fa-arrow-left"></i><span className='px-2 fw-bold'>Back</span></Link>
            </div>
            {productDetails?<div className="product-content mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 h-100">
                            <div className="img  text-center p-4 "> 
                                <img className=' ' src={productDetails.image} width="250px" />
                                    </div>
                        </div>
                        <div className="col-md-6  h-100 ">
                            
                                <div className="border p-4">
                                    
                                   <div className="card-body pt-3">
               
                                        <div className=" mb-2">
                                         <span className='text-muted text-capitalize'>In {productDetails.category}</span>
                                        <h5 className="text-uppercase">{productDetails.title}</h5>
                                          <p className='mb-0'><span className='text-muted text-capitalize'>Rating {productDetails?.rating.rate}</span><i className='fa fa-star text-warning'></i></p>
                                           
                                            <h5 className="card-title pt-0">{productDetails.price}$</h5>

                                        </div>
                                        
                                        <p className="text-muted">{productDetails?.description}</p>
                                        <button className="btn btn-outline-dark text-uppercase mr-2 px-4">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>:<div className=''>
        <i className='fa fa-spinner fa-spin d-flex justify-content-center align-items-center fa-3x'></i>
    </div> }
        </div>
        <Footer/>
    </>
}
