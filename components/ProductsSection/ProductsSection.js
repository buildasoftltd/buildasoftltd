import React from 'react'

const ProductSection = () => {
  return (
    <>
      <div className="products-section" id="products-section">
        <div className="product-header">
          <h1 className="text-4xl">Our Services</h1>
          <span className='text-gray-400'>Crafting mobile, web, and desktop applications with expertise and precision.</span>
        </div>

        <div className="products-group">
          <div className="product">
            <div className="product-image">
              <img src="/mobile-ui.svg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Mobile Applications</h3>
              <p className='text-md font-light'>Mobile applications that seamlessly connect you with a vast Android and iPhone user community.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/ecommerce website.svg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Web Applications</h3>
              <p className='text-md font-light'>Web applications excel in product management and, above all, illuminate actionable data insights.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="/web-development.svg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Desktop Applications</h3>
              <p className='text-md font-light'>Desktop applications streamline management tasks, albeit exclusively accessible on a single computer.</p>
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
