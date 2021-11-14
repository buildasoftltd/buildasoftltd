import React from 'react'

const ProductSection = () => {
  return (
    <>
      <div className="products-section" id="products-section">
        <div className="product-header">
          <h1>Our Products</h1>
          <span>We produce Mobile, Web and Desktop applications </span>
        </div>

        <div className="products-group">
          <div className="product">
            <div className="product-image">
              <img src="/mobile-ui.svg" alt=""/>
            </div>
            <div className="detail">
              <h3>Mobile Applications</h3>
              <p>Mobile applications will connect you to a large number of Android and Iphone users</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/ecommerce website.svg" alt=""/>
            </div>
            <div className="detail">
              <h3>Web Applications</h3>
              <p>Web applications helps in management of products but mostly it shows data insights.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/web-development.svg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3>Desktop Applications</h3>
              <p>Desktop applications also helps in management but only accessed by one computer</p>
            </div>
          </div>

        </div>
        <div className="product-sec-image">
          <img src="Path 364.svg" alt=""/>
        </div>
      </div>
    </>
  )
}

export default ProductSection
