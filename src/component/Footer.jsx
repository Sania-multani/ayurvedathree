import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaHome, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
   <>
     <footer className="footer">
           <div className="footer-container">
             {/* About Us */}
             <div className="footer-col">
               <h4>About us</h4>
               <p>
                 Pellentesque posuere orci lobortis scelerisque blandit.
                 Donec id tellus lacinia an, tincidunt risus ac, consequat velit.
               </p>
               <a href="/" className="read-more">Read More</a>
               <div className="social-icons">
                 <FaFacebookF />
                 <FaInstagram />
                 <FaPinterestP />
               </div>
             </div>
   
             {/* Help */}
             <div className="footer-col">
               <h4>Help</h4>
               <ul>
                 <li><a href="/">Search</a></li>
                 <li><a href="/">Help</a></li>
                 <li><a href="/">Information</a></li>
                 <li><a href="/">Privacy Policy</a></li>
                 <li><a href="/">Shipping Details</a></li>
               </ul>
             </div>
   
             {/* Support */}
             <div className="footer-col">
               <h4>Support</h4>
               <ul>
                 <li><a href="/">Contact us</a></li>
                 <li><a href="/">About us</a></li>
                 <li><a href="/">Careers</a></li>
                 <li><a href="/">Refunds</a></li>
                 <li><a href="/">Deliveries</a></li>
               </ul>
             </div>
   
             {/* Information */}
             <div className="footer-col">
               <h4>Information</h4>
               <ul>
                 <li><a href="/">Search Terms</a></li>
                 <li><a href="/">Advanced Search</a></li>
                 <li><a href="/">Help & FAQ's</a></li>
                 <li><a href="/">Store Location</a></li>
                 <li><a href="/">Orders & Returns</a></li>
               </ul>
             </div>
   
             {/* Contact */}
             <div className="footer-col">
               <h4>Contact us</h4>
               <p><FaHome /> 11244 Niki Lauda 455 New Zealand</p>
               <p><FaPhoneAlt /> 0000 - 123 - 456789</p>
               <p><FaClock /> 9.30AM - 7.30PM</p>
               <p><FaEnvelope /> mail@example.com</p>
             </div>
           </div>
         </footer>
   </>
  )
}

export default Footer