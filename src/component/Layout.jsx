import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {

  
   const location = useLocation();

  useEffect(() => {
    const offcanvasEl = document.querySelector('.offcanvas.show');

    if (offcanvasEl) {
     
      offcanvasEl.classList.remove('show');

     
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.remove();
      }

    
      document.body.style.overflow = '';
    }
  }, [location.pathname]);



  
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/> 
    </>
  )
}

export default Layout