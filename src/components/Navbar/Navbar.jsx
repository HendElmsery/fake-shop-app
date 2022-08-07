import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
    <nav className="navbar bg-light  shadow">
  <div className="container container-fuild">
      
<a className="btn " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <i className='fa fa-bars'></i>
</a>


<div className="offcanvas offcanvas-start"  id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
  <Link className='' to='home'><img src={'../FakeShop.png'}/></Link>

    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
  <div className="about mt-2 pl-2">
    <h5>About shop</h5>
    <p className='text-muted pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusantium dolores aut ad amet non aliquid odio, velit laboriosam quae dicta aliquam expedita deserunt</p>
  </div>
    </div>
  
  
  </div>
</div>
    <div className="m-auto" >
  
        <Link  to='home'><img className='w-50' src={'../FakeShop.png'}/></Link>
     
      </div>
    <Link to='/cart'>
    <div className="cart ">
     <i className="fa-solid fa-cart-shopping"></i>
     </div>
    </Link>


    </div>
  
</nav>


</>
}
