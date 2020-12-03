import React from 'react'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer">
        <div className="footer-elements">
          <div className="footer-text">
            <h4>CONTACT US</h4>
            <span>+44 345 678 903 adobexd@mail.com <br/> Find a Store</span>
          </div>
          <div className="footer-text">
            <h4>CUSTOMER RERVICE</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Ordering & Payment</a></li>
              <li><a href="#">Shipping Returns</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>INFORMATION</h4>
            <ul>  
              <li><a href="#">About Adobe XD Kit</a></li>
              <li><a href="#">Work With US</a></li>
              <li><a href="#">Privacy </a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Policy Terms & Conditions</a></li>
              <li><a href="#">Press Enquiries</a></li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>Subscribe to AdobeXD via Email</h4>
            <p className="text-dark">Excepteur sint occaecat cupidatat non <br/> proident, sunt in culpa qui officia</p>
            <form action="">
              <input type="text" className="form-input" placeholder="Email Address" />
              <button className="btn sub-button ml-15px">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
