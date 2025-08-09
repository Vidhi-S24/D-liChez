import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
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

      {!isTablet && (
        <ul className='navbar-menu'>
          <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href='#explore-menu' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
          <a href='#app-download' onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
          <a href='#footer' onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
        </ul>
      )}

      <div className="navbar-right">
        {!isMobile && (
          <>
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
              <img src={assets.cart} alt="cart" />
              <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
          </>
        )}

        {isTablet && (
          <div className="hamburger" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        )}
      </div>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>×</span>

          {isMobile && (
            <div className="mobile-top-items">
              <img src={assets.search_icon} alt="search" height="20px" width="20px"/>
              <div className="navbar-search-icon">
                <img src={assets.cart} alt="cart" />
                <div className="dot"></div>
              </div>
              <button onClick={()=>setShowLogin(true)}>Sign In</button>
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
