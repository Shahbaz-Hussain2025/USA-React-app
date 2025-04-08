import React from 'react';
import Test from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Project/Navbar';
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Home from "./Pages/Home"
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Footer from './Pages/Footer';
const App = () => {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact us" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
