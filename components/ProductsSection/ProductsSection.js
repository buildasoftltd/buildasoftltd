import React from 'react'
import "./ProductsSection.module.css"

const ProductSection = () => {
  return (
    <>
      <div className="products-section">
        <div className="product-header">
          <h3 className='mission-tag'>OUR SERVICES</h3>
          <h1 className="text-4xl">Tailored Software Solutions</h1>
          <span className='text-gray-400'>Providing tailored software development services to optimize business processes and enhance efficiency.</span>
        </div>

        <div className="products-group">
          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d90570ce-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'><a href="#" className='product-name'>Custom software development</a></h3>
              <p className='text-md font-light'>Tailored solutions to meet your unique business needs.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d96ff426-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'><a href="#" className='product-name'>Mobile app development</a></h3>
              <p className='text-md font-light'>Innovative apps to engage your mobile audience.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d9aad384-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'><a href="#" className='product-name'>Web applications development</a></h3>
              <p className='text-md font-light'>Crafting responsive websites for seamless user experience.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d895ea10-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'><a href="#" className='product-name'>UI/UX design</a></h3>
              <p className='text-md font-light'>Intuitive designs for exceptional user experiences.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d93bd7cc-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-2xl'><a href="#" className='product-name'>Quality assurance</a></h3>
              <p className='text-md font-light'>Ensuring flawless performance for your software products.</p>
            </div>
          </div>

          <div className="product">
            <div className="product-image">
              <img src="https://cdn.b12.io/client_media/izKCJUi0/d8cceb8c-345d-11ef-91b0-0242ac110002-jpg-hero_image.jpeg" className="product-img" alt=""/>
            </div>
            <div className="detail">
              <h3 className='text-3xl'><a href="#" className='product-name'>Cloud solutions</a></h3>
              <p className='text-md font-light'>Scalable cloud solutions for seamless data management.</p>
            </div>
          </div>

        </div>
        <div className="product-sec-image">
          <img src="Path 364.svg" alt=""/>
        </div>
      </div>
      <div id="team-section" style={{ padding: "45px" }}></div>
    </>
  )
}

export default ProductSection
