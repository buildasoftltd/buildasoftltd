import React from 'react'

const BlogSection = () => {
  return (
    <>
      <div className="blog-section" id="blog-section">
        <div className="blog-header">
          <h1>Blogs</h1>
        </div>
        <div className="blog-group">
          <div className="blog">
            <div className="blog-image">
              <img src="https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png" alt=""/>
             {/* <img src="" alt=""/> */}
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <span>Category</span>
                <span>24 Nov 2019</span>
              </div>
              <div className="blog-title">
                <h3>Two Line Long Title for Blog in web Example</h3>
              </div>
            </div>
          </div>

          <div className="blog">
            <div className="blog-image">
              <img src="https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png" alt=""/>
             {/* <img src="" alt=""/> */}
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <span>Category</span>
                <span>24 Nov 2019</span>
              </div>
              <div className="blog-title">
                <h3>Two Line Long Title for Blog in web Example</h3>
              </div>
            </div>
          </div>

          <div className="blog">
            <div className="blog-image">
              <img src="https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png" alt=""/>
             {/* <img src="" alt=""/> */}
            </div>
            <div className="blog-content">
              <div className="blog-date">
                <span>Category</span>
                <span>24 Nov 2019</span>
              </div>
              <div className="blog-title">
                <h3>Two Line Long Title for Blog in web Example</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection
