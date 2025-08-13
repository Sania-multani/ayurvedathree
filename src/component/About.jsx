import React from 'react'
import { FaStar } from "react-icons/fa";


const About = () => {
  return (
   <>
    {/* <div className='ctsm-bg-img-about'>
        <div>
          <img src="assets/images/img89.jpg" className='cstm-img-banner'></img>
          </div>
     </div> */}
     <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
   <div className='cstm-text-sec-shop'>
    <p>Home/Shop</p>
  </div>
</div>

 <section className="masala-section container">
      <div className="masala-text">
        <h2>The Essence of Ayurveda</h2>
        <p>
           Ayurveda, the ancient science of life, is a holistic system of
          healing that originated in India over 5,000 years ago. Rooted in the
          belief that health is a delicate balance between the mind, body, and
          spirit, Ayurveda uses natural remedies, herbal formulations, and
          mindful living practices to promote overall well-being.  
          Every herb, spice, and oil is carefully chosen to align with your
          unique constitution, or <em>Prakriti</em>, to restore harmony and
          vitality.
        </p>
        <blockquote>
          <em>
            Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse
            urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec
            justo eget felis facilisis fermentum. Morbi in sem quis dui placerat
            ornare. Tortor dignissim convallis aenean et tortor. Ac tincidunt
            vitae semper quis lectus nulla at volutpat diam.
          </em>
        </blockquote>
      </div>
      <div className="masala-image">
        <img src="assets/images/img74.jpg" alt="Masala" />
      </div>
    </section>

     <div className="blended-container">
      <h2>A unique blended taste</h2>
      <p>Pellentesque habitant morbi tristique senectus et netus et male.</p>
      <div className="stars">
        <FaStar className="gold-star" />
        <FaStar className="black-star" />
        <FaStar className="gold-star" />
      </div>
    </div>


    <div className="finest-container">
      <div className="finest-image">
        <div className="image-border"></div>
        <img src="assets/images/img91.jpg" alt="Finest spices" />
      </div>
      <div className="finest-text">
        <h2>The finest spice</h2>
        <p>
          Donec arcu purus, euismod nec eleifend et, luctus efficitur erat.
          Pellentesque at justo porttitor quis ornare ante integer quis ornare
          ante. Phasellus vel aliquam libero. Donec arcu purus, euismod nec
          eleifend et, luctus efficitur erat. Pellentesque at justo porttitor
          quis ornare ante integer quis ornare ante. Phasellus vel aliquam
          libero.
        </p>
      </div>
    </div>

     <section className="premium-section">
      <div className="text-content">
        <h2>The premium flavor</h2>
        <p>
          Pellentesque at justo porttitor quis ornare ante integer quis ornare ante.
          Phasellus vel aliquam libero. Donec arcu purus, euismod nec eleifend et,
          luctus efficitur erat. Pellentesque at justo porttitor quis ornare ante
          integer quis ornare ante. Phasellus vel aliquam libero. Donec arcu purus,
          euismod nec eleifend et, luctus efficitur erat.
        </p>
      </div>
      <div className="image-content">
        <div className="background-box"></div>
        <img src="assets/images/img92.jpg" alt="Spices" />
      </div>
    </section>
   </>
  )
}

export default About