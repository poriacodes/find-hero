import React from 'react';
import Header from "../components/Header"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import Footer from "../components/Footer"



const Homepage = () => {

  return (

    <div>
         <Header />
         <About/> 
          <Portfolio/>
         <Testimonial/>
         <Contact/> 
         <Footer/>
          
    </div>

  )
  
  
}

export default Homepage;
