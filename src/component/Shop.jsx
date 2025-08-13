import React from 'react'

const Shop = () => {

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


  return (
   <>
  <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
  <div className='cstm-text-sec-shop'>
    <p>Home/About</p>
  </div>
</div>


  <div className='cstm-bg-prdt cstm-prd-shop mb-5 '>
        <div className='cstm-prdt-img-sectn '>
          <h2 className='cstm-prd-sec '>Product </h2>
          <div className="product-section">
            {products.map((p) => (
              <div className="product-card  cstm-botm-img" key={p.id}>
                <div className="product-image">
                  <img src={p.image} alt={p.title} className=' ' />
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
   </>
  )
}

export default Shop