import React, { useState, useEffect } from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hasScrolled: false,
      showMenuMobile: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("hashchange", this.hideMenuMobile);
  }

  hideMenuMobile = () => {
    this.setState({showMenuMobile: false})
  }
  
  handleScroll = () => {
    const scrollTop = window.pageYOffset
    scrollTop > 50 ? this.setState({ hasScrolled: true }) : this.setState({ hasScrolled: false });
  }

  render() {
    return (
      <div className="header-section" id="home">
        <div className={`header ${this.state.hasScrolled ? 'hascrolled ' : '' }` }>
          <div className="header-group">
            <div className="logo">
              <img src="/buildasoft-logos_white.png" alt="Buildasoft" />
            </div>
            <div className={`nav-group ${this.state.showMenuMobile ? " display-important" : ""}`}>
              <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#mission-section">About Us</a></li>
                <li><a href="#products-section">Products</a></li>
                <li><a href="#team-section">The Founder</a></li>
                {/* <li><a href="#blog-section">Blog</a></li> */}
              </ul>
            </div>
            <button className="contact-us">
              <span className="d-block hide-mobile"><a href="#footer">Contact Us</a></span>
              <span className="d-block show-mobile" onClick={ () => this.setState({ showMenuMobile: !this.state.showMenuMobile }) }>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6H22" stroke="white" strokeOpacity="1" stroke-width="1.2" strokeLinecap="round"/>
                  <path d="M2 12H14" stroke="white" strokeOpacity="1" stroke-width="1.2" strokeLinecap="round"/>
                  <path d="M2 18H22" stroke="white" strokeOpacity="1" stroke-width="1.2" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </div>

        </div>
        <div className="left-shape">
          <img src="main-pic.svg" alt=""/>
        </div>
        <div className="right-top-shape">
          <img src="top-right.svg" alt=""/>
        </div>
        <div className="main-title-container">
          <h2>LET DIGITAL LEAD THE WAY</h2>
          <span>We make digital lead the way by providing software applications to your daily life. We provide analyzed, fast, and secured world-class software applications.</span>
        </div>
      </div>
    )
  } 
}

export default Header
