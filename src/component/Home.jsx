import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaHome, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";


const Home = () => {


  const categories = [
    { name: 'Package Foods', img: '/assets/images/img37.jpg' },
    { name: 'Package Foods', img: '/assets/images/img37.jpg' },
    { name: 'Package Foods', img: '/assets/images/img37.jpg' },
    { name: 'Awesome Broccoli', img: '/assets/images/img37.jpg' },
    { name: 'Organic Snacks', img: '/assets/images/img37.jpg' },
    //   { name: 'Package Foods', img: '/assets/images/img23.jpg' },
    //   { name: 'Package Foods', img: '/assets/images/img23.jpg' },
    //   { name: 'Package Foods', img: '/assets/images/img23.jpg' },
    //   { name: 'Awesome Broccoli', img: '/assets/images/img23.jpg' },
    //   { name: 'Organic Snacks', img: '/assets/images/img23.jpg' },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };



  const products = [
    {
      id: 1,
      title: "Controls Blood Sugar Levels, Lowers Bad Cholesterol",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 22.0,
      rating: 4
    },
    {
      id: 2,
      title: "Power of Triphala and Wheatgrass to fight constipation",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 25.0,
      rating: 0
    },
    {
      id: 3,
      title: "Controlling Blood Pressure & Cholesterol Level",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 25.0,
      rating: 0
    },
    {
      id: 4,
      title: "Relieves Constipation & Improves Digestion",
      image: "assets/images/img79.jpg",
      oldPrice: 24.0,
      price: 19.0,
      rating: 0
    },
    {
      id: 1,
      title: "Controls Blood Sugar Levels, Lowers Bad Cholesterol",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 22.0,
      rating: 4
    },
    {
      id: 2,
      title: "Power of Triphala and Wheatgrass to fight constipation",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 25.0,
      rating: 0
    },
    {
      id: 3,
      title: "Controlling Blood Pressure & Cholesterol Level",
      image: "assets/images/img79.jpg",
      oldPrice: 27.0,
      price: 25.0,
      rating: 0
    },
    {
      id: 4,
      title: "Relieves Constipation & Improves Digestion",
      image: "assets/images/img79.jpg",
      oldPrice: 24.0,
      price: 19.0,
      rating: 0
    },

    {
      id: 4,
      title: "Relieves Constipation & Improves Digestion",
      image: "assets/images/img79.jpg",
      oldPrice: 24.0,
      price: 19.0,
      rating: 0
    },

    {
      id: 4,
      title: "Relieves Constipation & Improves Digestion",
      image: "assets/images/img79.jpg",
      oldPrice: 24.0,
      price: 19.0,
      rating: 0
    },




  ];


  const testimonials = [
    {
      id: 1,
      text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
      name: "Samuel Edwards",
      role: "Business man",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
      name: "Sarah Johnson",
      role: "Business woman",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      text: "Habitasse quis elit sapien hac suscipit phasellus quam cursus. Torquent dolor vulputate magnis ligula dapibus. Aliquam vulputate fringilla tempor hendrerit metus dictumst libero.",
      name: "Emily Brown",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];


  return (
    <>
          {/* <div className='container-fluid'>
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
                      <a className="nav-link " aria-current="page" href="#">Home</a>
                      <a className="nav-link" href="#">About Us</a>
                      <a className="nav-link" href="#">Contact</a>
                      <a className="nav-link " aria-disabled="true">Blog</a>
                    </div>
                  </div>
                </div>
              </nav>

            </div>
            <div className='col-lg-3 d-flex justify-content-end align-items-center gap-4'>
              <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i>
              <i className="fas fa-search" style={{ fontSize: "20px" }}></i>
              <i className="fas fa-user" style={{ fontSize: "20px" }}></i>
            </div>
          </div>
        </div>
      </div> */}

     <div className='ctsm-bg-img-home'>
          <img src="assets/images/img25.jpg" className='cstm-img-banner'></img>
     </div>

      <h2 className='text-center mt-5 '>Categories</h2>

      <div className='container mt-4  mb-5 '>
        <div className='row '>
          <div className='col-lg-3'>
            <div className='cstm-ctgr-sectn '>
              <img src="assets/images/img29.jpg" className='cstm-catg-img w-100'></img>
              <p className='text-center fs-5  cstm-fot'>Wine Spa Facial</p>
            </div>
          </div>



          <div className='col-lg-3 ' >
            <div className='cstm-ctgr-sectn'>
              <img src="assets/images/img37.jpg" className='cstm-catg-img w-100'></img>
              <p className='text-center fs-5  cstm-fot'>Gold Spa Facial</p>
            </div>
          </div>

          <div className='col-lg-3 '>
            <div className='cstm-ctgr-sectn'>
              <img src="assets/images/img34.jpg" className='cstm-catg-img w-100'></img>
              <p className='text-center fs-5  cstm-fot'>Diamond Spa Facial</p>
            </div>
          </div>

          <div className='col-lg-3  '>
            <div className='cstm-ctgr-sectn'>
              <img src="assets/images/img35.jpg" className='cstm-catg-img w-100'></img>
              <p className='text-center fs-5 cstm-fot'>Papaya Spa Facial</p>
            </div>
          </div>

          {/* <div className='col-lg-2'>
             <img src="assets/images/img29.jpg" className='img-fluid'></img>
        </div> */}

          {/* <div className='col-lg-2'>
             <img src="assets/images/img29.jpg" className='img-fluid'></img>
        </div> */}
        </div>
      </div>

      {/* <div className='container-fluid'>
        <img src="assets/images/img23.jpg" className='w-100'></img>
      </div> */}



      <div className='container cstm-sectn-ab'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className="card-container">
              <img
                src="/assets/images/img44.jpg"
                alt="Cardamom"
                className='h-100 w-100 cstm-img-sec'
              />
              <div className="overlay">
                <h3 className="overlay-title">Cardamom</h3>
                <button className="overlay-btn">Shop Now</button>
              </div>
            </div>


          </div>
          <div className='col-lg-8'>
            <div className='g-4'>
              <div className='d-flex gap-3 '>
                <div className='cstm-img1'>
                  <img src="assets/images/img48.jpg" className='cstm-sml-img w-100'></img>
                  <div className='overlay-cstm-one'>
                    <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                    <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                  </div>
                </div>


                <div className='cstm-img1'>
                  <img src="assets/images/img47.jpg" className='cstm-sml-img w-100'></img>
                  <div className='overlay-cstm-one'>
                    <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                    <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='d-flex gap-3'>

              <div className='cstm-img1'>
                <img src="assets/images/img54.jpg" className='cstm-sml-img-to w-100 '></img>
                <div className='overlay-cstm-one'>
                  <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                  <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                </div>
              </div>


              <div className='cstm-img1'>
                <img src="assets/images/img52.jpg" className='cstm-sml-img-to w-100 '></img>
                <div className='overlay-cstm-one'>
                  <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                  <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>




      <div className='container cstm-sectn-ab mt-5'>
        <div className='row'>

          <div className='col-lg-8'>
            <div className='g-4'>
              <div className='d-flex gap-3 '>
                <div className='cstm-img1'>
                  <img src="assets/images/img70.jpg" className='cstm-sml-img w-100'></img>
                  <div className='overlay-cstm-one'>
                    <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                    <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                  </div>
                </div>


                <div className='cstm-img1'>
                  <img src="assets/images/img71.jpg" className='cstm-sml-img w-100'></img>
                  <div className='overlay-cstm-one'>
                    <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                    <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='d-flex gap-3'>

              <div className='cstm-img1'>
                <img src="assets/images/img72.jpg" className='cstm-sml-img-to w-100 '></img>
                <div className='overlay-cstm-one'>
                  <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                  <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                </div>
              </div>


              <div className='cstm-img1'>
                <img src="assets/images/img74.jpg" className='cstm-sml-img-to w-100 '></img>
                <div className='overlay-cstm-one'>
                  <h4 className='cstm-cara-text text-white'>Caradamom</h4>
                  <button type="button" className='cstm-shop-btn-one'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className="card-container">
              <img
                src="/assets/images/img58.jpg"
                alt="Cardamom"
                className='h-100 w-100 cstm-img-sec'
              />
              <div className="overlay">
                <h3 className="overlay-title">Cardamom</h3>
                <button className="overlay-btn">Shop Now</button>
              </div>
            </div>


          </div>
        </div>
      </div>


      <div className='cstm-bg-img-sec'>
        <div className='cstm-bg-paralax-img'>

        </div>
        <div className='cstm-bg-img-text'>
          <p className='cstm-dis-text'>Discount up to 50% for first purchase.</p>
          <p className='cstm-lorm-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button type="button" className='cstm-bg-img-shop'>Shop Now</button>
        </div>
      </div>


      <div className='cstm-bg-prdt '>
        <div className='cstm-prdt-img-sectn '>
          <h2 className='cstm-prd-sec '>Product </h2>
          <div className="product-section">
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image">
                  <img src={p.image} alt={p.title} className='mb-5' />
                  <span className="sale-badge">Sale!</span>
                </div>
                <h3 className="product-title">{p.title}</h3>
                {p.rating > 0 && (
                  <div className="rating">
                    {"★".repeat(p.rating)}
                    {"☆".repeat(5 - p.rating)}
                  </div>
                )}
                <div className="price">
                  <span className="old-price">Rs.{p.oldPrice.toFixed(2)}</span>
                  <span className="new-price">Rs.{p.price.toFixed(2)}</span>
                </div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            ))}
          </div>
        </div>

      </div>


      <section
        className="testimonials-section"
      // style={{ backgroundImage: `url(assets/images/img70.jpg)` }}
      >
        <div className="container">
          <p className="section-subtitle">Testimonial</p>
          <h2 className="section-title">What they say about us</h2>
          <p className="section-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="author-img" />
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}

export default Home