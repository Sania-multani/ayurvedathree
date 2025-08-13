import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'



const Header = () => {
  const[search,setSearch]=useState(false)

 function handleSearch(){
       setSearch(!search)
 }


 const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    quantity: 2,
    image: "assets/images/img74.jpg", // Replace with real image
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    quantity: 1,
    image: "assets/images/img74.jpg", // Replace with real image
  },
];


 const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

 
  return (
<>


  <div className={`cstm-search-box ${search && 'active'}`}>
      {/* <p>HEllo</p> */}
      <input tyep="text" className='cstm-inpt-serch-bar' placeholder='Seach anything......'></input>
    </div>


    <div className='container-fluid'>
        <div className='cstm-bnr-sec'>
         
          <div className=' row cstm-nav-sect shadow mt-5'>

            <div className='col-lg-3 d-flex justify-content-center align-items-center'>
              <img src="assets/images/logo2.png" className='cstm-logo-img '></img>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <NavLink to="/" className="nav-link " aria-current="page">Home</NavLink>
                      <NavLink to="about-us" className="nav-link">About Us</NavLink>
                       <NavLink to="shop" className="nav-link">Shop</NavLink>
                      <NavLink to="contact-us" className="nav-link">Contact</NavLink>
                      <NavLink to="blog" className="nav-link ">Blog</NavLink>
                    </div>
                  </div>
                </div>
              </nav>

            </div>
            <div className='col-lg-3 d-flex justify-content-end align-items-center gap-4'>
              <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i> </button>
              {/* <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i> */}
           
              <i className="fas fa-search" style={{ fontSize: "20px" }} onClick={handleSearch}></i>
              <NavLink to="login" className="cstm-prfl-icon"><i className="fas fa-user" style={{ fontSize: "20px" }}></i></NavLink>
            </div>
          </div>
        </div>
      </div>


      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart Page</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {/* Sample Cart Items */}
            {cartItems.map((item) => (
            <div className="cart-item d-flex mb-3" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-img me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">
                  Qty: {item.quantity} × Rs.{item.price.toFixed(2)}
                </p>
                <p className="mb-0 fw-bold">
                  Total: Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="cstm-cros-btn">
                x
              </button>
            </div>
          ))}

          <hr />
          <h5 className="text-end">Grand Total: Rs.{total.toFixed(2)}</h5>
         <Link to="cart">
          <button className="btn cstm-check-cart w-100 mt-3">Checkout</button>
          </Link>
  </div>
</div>
    
</>
  )
}

export default Header