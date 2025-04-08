import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
        {/* Logo Section */}
        <div className="footer-section">
          <a href="/" className="logo">
            <img src="/logo1.png" alt="Logo" />
          </a>
          <p>Sumra Software – Your Trusted Web Development Partner.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h1>Quick Links</h1>
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h1>Services</h1>
          <p>Website Development</p>
          <p>E-commerce Solutions</p>
          <p>Graphic Design</p>
          <p>Mobile App Development</p>
          <p>SEO & Digital Marketing</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h1>Contact us</h1>
          <p>Hussain.shahbazhere@12345</p>
          <p>0346 7291284</p>

          {/* Social Icons */}
          <div className="react-icon">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
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
      </div>
    </div>
  );
}

export default Footer;
