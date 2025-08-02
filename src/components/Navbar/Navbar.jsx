import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuClick = (selected) => {
    setMenu(selected);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTablet = windowWidth <= 903;
  const isMobile = windowWidth <= 475;

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />

      {/* Show nav links (ul) only on >903px */}
      {!isTablet && (
        <ul className='navbar-menu'>
          <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
          <li onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
          <li onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
          <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
        </ul>
      )}

      <div className="navbar-right">
        {/* Search, Cart, and Sign In: hide only on ≤475px */}
        {!isMobile && (
          <>
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
              <img src={assets.cart} alt="cart" />
              <div className="dot"></div>
            </div>
            <button>Sign In</button>
          </>
        )}

        {/* Hamburger for ≤903px */}
        {isTablet && (
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </div>

      {/* Slide-In Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</span>

          {/* For ≤475px: Show search, cart, sign in */}
          {isMobile && (
            <div className="mobile-top-items">
              <img src={assets.search_icon} alt="search" height="20px" width="20px"/>
              <div className="navbar-search-icon">
                <img src={assets.cart} alt="cart" />
                <div className="dot"></div>
              </div>
              <button>Sign In</button>
            </div>
          )}

          <ul>
            <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
            <li onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
            <li onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
            <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
