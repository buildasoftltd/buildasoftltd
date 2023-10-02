import React from 'react'

const Footer = () => {
  return (
    <>
       <footer id="footer" className="footer">
        <div className="footer-elements">
          <div className="footer-text">
            <h4>CONTACT US</h4>
            <span>+25 079 125 6093 <br /> buildasoftltd@gmail.com <br/></span>
          </div>
          <div className="footer-text">
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>INFORMATION</h4>
            <ul>
              <li><a href="#">Work With US</a></li>
              <li><a href="#">Privacy </a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Policy Terms & Conditions</a></li>
              <li><a href="#">Press Enquiries</a></li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>Subscribe to Buildasoft Ltd via Email</h4>
            <p className="text-dark">We would love to hear from you. <br/> Subscribe to get more information about us.</p>
            <form action="#">
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
