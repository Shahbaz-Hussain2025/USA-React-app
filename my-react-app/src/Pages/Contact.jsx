import React, { useState } from 'react';
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

function Searchi() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
    // You can add API call here if needed
  };

  return (
    <>
      <div className='contact-main1'>
        <h1>Contact</h1>
      </div>

      <div className="contact-main2">
        <div className="contact-card">
          <IoMdMail className='contact-icon' />
          <h3>Mail</h3>
          <p>Hussain.shahbazhere@12345</p>
        </div>

        <div className="contact-card">
          <FaLocationDot className='contact-icon' />
          <h3>Location</h3>
          <p>Shop 1-6 Shah Badar Road, Hashmi Colony Multan</p>
        </div>

        <div className="contact-card">
          <IoCallSharp className='contact-icon' />
          <h3>Call</h3>
          <div className='contact-card1'>
            <p>0346 7291284</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="form-made">
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          {/* Email */}
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          {/* Service */}
          <label htmlFor="service">Service</label>
          <select 
            id="service" 
            name="service" 
            value={formData.service} 
            onChange={handleChange} 
            required
          >
            <option value="">Select a Service</option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO Services">SEO Services</option>
          </select>

          {/* Message */}
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Searchi;
