import React from 'react'
import "./Services.css"
import { MdEventNote } from "react-icons/md";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { FaCloud } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { SiConsul } from "react-icons/si";
import { SiLitiengine } from "react-icons/si";
const Services = () => {
  return (
   <>
    <div className='server'>
   <h1>Our Servicers</h1>
    </div>
   
    <div className="services-images">
      <img src="./services.webp" alt="" />
    </div>
    <div className="content-service">
      <h1>Cutting-edge Technology Services to Drive Your Business Forward</h1>
    </div>

    <div className="service-card">
      <div className="ser-card">
      <MdEventNote  className='icon' />
      <h1>Digital Experience</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
      <div className="ser-card">
      <TiSocialDribbbleCircular  className='icon' />
      <h1>Software House</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
      <div className="ser-card">
      <FaCloud   className='icon' />
      <h1> Cloud Engenering</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
      <div className="ser-card">
      <IoMdAnalytics  className='icon' />
      <h1>IT & Consulting</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
      <div className="ser-card">
      <SiConsul  className='icon' />
      <h1>Digital Experience</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
      <div className="ser-card">
      <SiLitiengine  className='icon' />
      <h1>Data Analysis</h1>
      <p>Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.</p>
      </div>
    </div>
   <div className="rating-main">
   <div className="rating">
    <h1>14+</h1>
    <h2>Years in business</h2>
   </div>
   <div className="rating">
    <h1>300+</h1>
    <h2>Global clients</h2>
   </div>
   <div className="rating">
    <h1>250+</h1>
    <h2>Tech experts</h2>
   </div>
   </div>
    <div className="service-part-main">
    <div className="service-part2">
        <h1>Ideal Technology Services Partner</h1>
      </div>
      <div className="service-part">
        <img src="./service1.webp" alt="" />
      </div>
     
    </div>
   </>

  )
}

export default Services