import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
  <>
    <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
   <div className='cstm-text-sec-shop'>
    <p>Home/Contact</p>
  </div>
</div>

 <section className="contact-section">
      <h2 className='cstm-cont-text'>Contact us</h2>
      <p>Tortor at risus viverra adipiscing at in tellus integer.</p>

      <div className="stars">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>

      <div className="contact-cards">
        {/* Phone */}
        <div className="contact-card">
          <div className="icon-circle">
            <FaPhoneAlt />
          </div>
          <h3>Phone</h3>
          <p><strong>Toll-Free:</strong> 0000 - 123 - 456789</p>
          <p><strong>Fax:</strong> 0000 - 123 - 456789</p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="icon-circle">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>mail@example.com</p>
          <p>support@example.com</p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <div className="icon-circle">
            <FaMapMarkerAlt />
          </div>
          <h3>Address</h3>
          <p>No: 58 A, East Madison Street,</p>
          <p>Baltimore, MD, USA 4508</p>
        </div>
      </div>
    </section>

     <div className='container mt-4'>
       <section className="contact-map-form">
      {/* Left: Google Map */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092936!2d144.9537353153183!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f7d76f%3A0xf577d2b1c8e0a9c!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1614744110990!5m2!1sen!2sau"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right: Form */}
      <div className="form-container">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" rows="6"></textarea>
          <button type="submit" className='cstm-send'>Send Message</button>
        </form>
      </div>
    </section>
  </div>
  </>
  )
}

export default Contact