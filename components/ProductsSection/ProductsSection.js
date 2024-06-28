import React from 'react'

const ProductSection = () => {
  return (
    <>
      <div className="products-section">
        <div className="product-header">
          <h3 className='mission-tag'>OUR SERVICES</h3>
          <h1 className="text-4xl">Customized software development</h1>
          <span className='text-gray-400'>Providing tailored software development services to optimize business processes and enhance efficiency.</span>
        </div>

        <div className="products-group">
          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d90570ce-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Custom software development</h3>
              <p className='text-md font-light'>Tailored solutions to meet your unique business needs.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d96ff426-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Mobile app development</h3>
              <p className='text-md font-light'>Innovative apps to engage your mobile audience.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d9aad384-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Web applications development</h3>
              <p className='text-md font-light'>Crafting responsive websites for seamless user experience.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d895ea10-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>UI/UX design</h3>
              <p className='text-md font-light'>Intuitive designs for exceptional user experiences.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d93bd7cc-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Quality assurance</h3>
              <p className='text-md font-light'>Ensuring flawless performance for your software products.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d8cceb8c-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'>Cloud solutions</h3>
              <p className='text-md font-light'>Scalable cloud solutions for seamless data management.</p>
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
