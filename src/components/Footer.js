import React from 'react'
import "../css/Footer.css"
import Twitter from "../images/twitterb.png"
import LI from "../images/linkedinb.png"
import GIT from "../images/gitb.png"
import Stack from "../images/stackb.png"
import {  faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const  Footer =()=> {

  return (

    <footer id='footer'>

      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>

      <ul className='footerIcons'>
     
     <li> <a href="https://www.linkedin.com/in/momoh-herodion-038185183" target="blank" className="" ><img className="" src={LI} alt="LinkedIn"/></a></li>

      <li>  <a href="http://twitter.com/herocodes_" target="blank" className=""> <img className="" src={Twitter} alt="Twitter"/> </a></li>

       <li> <a href="https://stackoverflow.com/users/9373832/herocodes" target="blank" className=""> <img className="" src={Stack} alt="Stack Overflow"/></a></li>    

      <li> <a href="http://github.com/herocodess " target="blank" className=""><img className="" src={GIT} alt="Github"/></a></li>
      </ul>

      <ul className='footerMenu'>

        <li><a href='#home' style={{textDecoration:"none" }}>Home</a></li>
        <li><a href='#about' style={{textDecoration:"none" }}>About</a></li>
        <li><a href='#portfolio' style={{textDecoration:"none" }}>Portfolio</a></li>
        <li><a href='#testimonial' style={{textDecoration:"none" }}>Testimonial</a></li>
        <li><a href='#contact'style={{textDecoration:"none" }}>Contact</a></li>

      </ul>

      <p> <span> <FontAwesomeIcon icon={faCopyright} className="fa" /> </span> 2022 Herocodes | All rights reserved</p>


    </footer>
  )
}


export default Footer