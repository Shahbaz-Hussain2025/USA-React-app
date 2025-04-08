import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className='home-main'>
        <div className="image-home">
          <img src="./home.webp" alt="" />
        </div>
        <div className="home-cont">
          <h3>Website Design & Development</h3>
          <h1>Sumra Soft</h1>
          <p>At WebsOpus, we are proud to present Sumra Soft, a dynamic and responsive website designed and developed by our expert team. Leveraging powerful technologies like CodeIgniter, Bootstrap, and jQuery, we crafted a platform that not only showcases Sumra Soft’s software solutions but also serves as a hub for students seeking knowledge in cutting-edge fields like DevOps.</p>
        </div>
      </div>

      <div className='home'>

        <h1>About</h1>
      </div>

      <div className="main">
        <div className="content">
          <h3>
          Sumra Soft is a Pvt Ltd company specializing in professional website development, e-commerce solutions, and digital marketing services. Our team is dedicated to delivering high-quality solutions that help businesses thrive in the digital world.

          </h3>
          <Link to="/about" className='home-btn' >Learn More About</Link>
        </div>
        <div className="images">
          <img src="./about1.png" alt="" />
        </div>
      </div>


      {/* services  content will be write here */}


      <div className="services">
        <h1>Services</h1>
        <p>We love & know what we do!</p>
      </div>
    
    <div className="services-main-cont">
       <div className="services-main">
        <img src="1.webp" alt="" />
        <h1>Web Design & Development </h1>
        <p>Our web design and development services are dedicated to helping businesses and organizations build professional, user-friendly websites that effectively communicate their brand and message. We combine cutting-edge design with the latest technologies to create dynamic, responsive sites that engage and convert visitors.</p>
        <Link  to="/services" className='service-btn'>Check Detail</Link>
       </div>
       <div className="services-main">
        <img src="2.webp" alt="" />
        <h1>Brand Identity Design </h1>
        <p>Our brand identity services are all about helping your business or organization stand out in a crowded marketplace. We believe that a strong brand is the cornerstone of any successful business, and we work with you to create a cohesive, memorable brand identity that reflects your values and resonates with your target audience.</p>
        <Link  to="/services" className='service-btn' >Check Detail</Link>
       </div>
       <div className="services-main">
        <img src="3.webp" alt="" />
        <h1>Social Media Marketing </h1>
        <p>Our social media marketing services are designed to help businesses connect with their customers on popular social media platforms. Whether you're looking to build brand awareness, drive website traffic, or generate leads, we have the tools and expertise to help you succeed. Our expert team will develop a strategy to maximize your results.</p>
        <Link to="/services" className='service-btn'>Check Detail</Link>
       </div>
    </div>
       

        {/* blog content written will be start */}

    <div className="contact">
      <h1>Contact</h1>
      <h1>Want to discuss your project?</h1>
    
    
  
   <div className="con-main">
   <h3>Call Now</h3>
 <div>
 <p>0346 7191284</p>
 <p>0341 0060234</p>
 </div>
 <Link to="/contact us" className='btn-contact' >Contact</Link>
     </div>
  
     </div>
    </>
  )
}

export default Home