import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
    
    
    
   
    <div className="nav-main">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="/logo1.png" alt="Logo" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact us">Contact Us</Link></li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="react-icon">
       <div className="insta">
       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
       </div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
    {/* <div className="background">
     <h1>Dream Big, Achieve Bigger with  Sumra Soft Solutions</h1>
     <p>We provide cutting-edge website development services tailored to your business needs. Let’s build your online presence and boost your success!</p>
    </div>
    */}
    </>
  );
}

export default Navbar;
