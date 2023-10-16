import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-elements">
          <div className="footer-text">
            <h4>CONTACT US</h4>
            <span>
              +25 079 125 6093 <br /> buildasoftltd@gmail.com <br /><br />
            </span>
            <span style={{fontWeight: "semibold", fontSize: "18px"}}>Social Media: <br /></span>
            <span className="footer-social-media">
              <a href="https://x.com/Buildasoft_Ltd" target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 1200 1227"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="white"
                  />
                </svg>
              </a>
            </span>
          </div>
          <div className="footer-text">
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-text">
            <h4>INFORMATION</h4>
            <ul>
              <li>
                <a href="#">Work With US</a>
              </li>
              <li>
                <a href="#">Privacy </a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Policy Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Press Enquiries</a>
              </li>
            </ul>
          </div>
          <div className="footer-text">
            <h4 className="text-lg font-bold">Delighted to offer my assistance at Buildasoft Ltd.</h4>
            <p className="text-dark">
              We would love to hear from you. <br /> Chat or Email with us to get more
              information about us.
            </p>
            {/* <form action="#">
              <input
                type="text"
                className="form-input"
                placeholder="Email Address"
              />
              <button className="btn sub-button ml-15px">SUBSCRIBE</button>
            </form> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
