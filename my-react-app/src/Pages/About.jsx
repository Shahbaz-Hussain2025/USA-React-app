import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
function About() {
  return (
   <>
    <div className='about-main'>
      <div className="about-image">
      <img src="./sumra.webp" alt="" />
      </div>
      <div className="about-content">
        <h1>About Sumra Soft</h1>
        <p>Welcome to Sumra Soft, your trusted partner in the world of digital solutions. We are a dynamic and innovative web design agency dedicated to providing top-notch services in web design and development, software development, SEO, digital marketing, and graphics designing. With a team of passionate professionals and a strong commitment to excellence, Sumra Soft is your one-stop shop for all your digital needs.</p>
      
        <Link to="/contact us" className='about-btn' >Contact Us</Link>
      </div>
    </div>
      
      <div className="under">
        <h1>Why Decide</h1>
      </div>
   
     <div className="about-card">
      <div className="card">
        <h1>Who Are We</h1>
        <p>At Azsoftech Solutions, we are a team of expert developers and designers committed to creating custom, high-quality websites that drive success. We work closely with businesses to bring their vision to life and ensure a strong online presence.</p>
      </div>
      <div className="card">
        <h1>Our Mission</h1>
        <p>At Azsoftech Solutions, our mission is to empower businesses by delivering innovative, high-quality website solutions that drive growth and success. We strive to provide custom, user-friendly websites that meet the unique needs of our clients.</p>
      </div>
      <div className="card">
        <h1>What We Do</h1>
        <p>1-UI UX Design</p>
         <p>2-Website Development</p>
           <p>3-Marketing</p>
          <p>4-Social Media</p>
           <p>5-eCommerce Store</p>
         
      </div>
     </div>
     <div className="under">
      <h1>Our Achievements</h1>
     </div>
     <div className="achieve-main">
        <div className="achieve">
        <h1>100+</h1>
        <h3>Successful Projects</h3>
        </div>
        <div className="achieve">
        <h1>500+</h1>
        <h3>Satisfied Clients</h3>
        </div>
        <div className="achieve">
        <h1>98%</h1>
        <h3>Retention Rate</h3>
        </div>
        <div className="achieve">
        <h1>99%</h1>
        <h3>Uptime Delivered</h3>
        </div>
     </div>
     <div className="choose">
      <h1>Why Choose Us?</h1>

      <div className="choose-cont-main">
          <div className="choose-cont">
            <h1>Expert Team</h1>
            <p>Highly skilled professionals with years of industry experience.</p>
          </div>
          <div className="choose-cont">
            <h1>Custom Solutions</h1>
            <p>Strategies tailored to your specific business needs.</p>
          </div>
          <div className="choose-cont">
            <h1>24/7 Support</h1>
            <p>Dedicated customer service for your convenience.</p>
          </div>
          <div className="choose-cont">
            <h1>Result-driven approach</h1>
            <p>Focused on delivering measurable success and ROI.</p>
          </div>
          <div className="choose-cont">
            <h1>Innovative Technologies</h1>
            <p>We implement the latest industry trends and tools to keep your business ahead.</p>
          </div>
      </div>
     </div>
   
   </>
  )
}

export default About