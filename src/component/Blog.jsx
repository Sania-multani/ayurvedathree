import React from 'react'

const recentArticles = [
  {
    id: 1,
    title: 'Black pepper powder',
    excerpt: 'Quis imperdiet massa tincidunt nunc...',
    img: 'assets/images/img54.jpg'
  },
  {
    id: 2,
    title: 'The full cardamom',
    excerpt: 'Gravida quis blandit turpis cursus...',
    img: 'assets/images/img54.jpg'
  },
  {
    id: 3,
    title: 'Various Spices powder',
    excerpt: 'Fames ac turpis egestas integer...',
    img: 'assets/images/img54.jpg'
  }
];

const mainArticles = [
  {
    id: 1,
    title: 'Black pepper powder',
    description: 'Quis imperdiet massa tincidunt nunc pulvinar sapien et. Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nib...',
    img: 'assets/images/img93.jpg'
  },
  {
    id: 2,
    title: 'The full cardamom',
    description: 'Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh praesent. Elementum facilisis leo vel fringilla est ul...',
    img: 'assets/images/img93.jpg'
  },
  {
    id: 2,
    title: 'The full cardamom',
    description: 'Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh praesent. Elementum facilisis leo vel fringilla est ul...',
    img: 'assets/images/img93.jpg'
  },
  {
    id: 2,
    title: 'The full cardamom',
    description: 'Gravida quis blandit turpis cursus in hac. Fames ac turpis egestas integer eget aliquet nibh praesent. Elementum facilisis leo vel fringilla est ul...',
    img: 'assets/images/img93.jpg'
  }
];

const tags = [
  'Container',
  'Flavour Masalas',
  'Garam',
  'Gorcerry',
  'Masala Powder'
];

const categories = [
  {
    name: 'Dried Ginger',
    price: 299.00,
    // image: gingerImg
     img: 'assets/images/img54.jpg'
  },
  {
    name: 'Pimento',
    price: 629.00,
    img: 'assets/images/img54.jpg'
  }
];

const Blog = () => {
  return (
   <>
   
      <div className="ctsm-bg-img-about">
  <img src="assets/images/img89.jpg" className="cstm-img-banner" />
  <div className="overlay"></div>
   <div className='cstm-text-sec-shop'>
    <p>Home/Blog</p>
  </div>
</div>

 <section className="articles-section">
      <aside className="sidebar">
        <h3>Recent articles</h3>
        <ul className="recent-articles">
          {recentArticles.map(article => (
            <li key={article.id}>
              <img src={article.img} alt={article.title} />
              <div>
                <h4>{article.title}</h4>
                <p>{article.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="sidebar-section">
      <div className="block">
        <h3 className="heading">Tags</h3>
        <ul className="list">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>

     
    </div>
     
      <div className="category-section">
      <h3 className="category-heading">Categories</h3>
      {categories.map((item, index) => (
        <div key={index} className="category-item">
          <img src={item.img} alt={item.name} className="category-img" />
          <div className="category-details">
            <h4>{item.name}</h4>
            <p>RS.{item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
      </aside>

      <main className="main-content">
        {mainArticles.map(article => (
          <div className="article" key={article.id}>
            <img src={article.img} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button>Read more</button>
          </div>
        ))}
      </main>
    </section>
   </>
  )
}

export default Blog
