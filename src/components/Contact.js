import React ,{ Component, useRef, useEffect, useState } from 'react'
import "../css/Contact.css";
import "aos/dist/aos.css"
import Aos from 'aos'
import mail  from "../images/mail.png"
import call from "../images/call.png"
import Wa from "../images/whatsapp.png"
import emailjs from "emailjs-com"
import MessengerCustomerChat from 'react-messenger-customer-chat';


const  Contact =()=> {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_td29p0j', 'template_xvcu9ih', form.current, 
    '5EPAKrJcs7eYDbBKF')
     
    e.target.reset()
  };


  useEffect(() =>{
    Aos.init({duration: 1500,
    anchorPlacement:'top-top'
    });
    

  }, {});

    return (
  
    <section data-aos="fade-up" id='contact'>

      <h3 className='getInTouch'>Get In Touch</h3>

    <div className="container contact_container">

      <div className='contact_options'>

        <article className='contact_option'>
        <a href='mailto:momohero2@gmail.com' target="_blank" >
          <img src={mail} alt='email'/>
          <h4>Email</h4>
          <h5>momohero2@gmail.com</h5>
         <a href='mailto:momohero2@gmail.com' target="_blank" >Send an Email</a>
          </a>
        </article>

        <article className='contact_option'>
        <a href='https://wa.me/+2349035331649' target="_blank" >
          <img src={Wa} alt=''/>
          <h4>Whatsapp</h4>
          <h5>+234 903 533 1649</h5>
          <a href='https://wa.me/+2349035331649' target="_blank" >Send a Whatsapp Message</a>
          </a>
        </article>

        <article className='contact_option-phone'> 
        <a  href="tel:+234-903-533-1649" >
          <img src={call} alt='call'/>
          <h4>Phone Call</h4>
          <h5>+234 903 533 1649</h5> 
          <a  href="tel:+234-903-533-1649" >Place a Phone Call</a>
        </a>
        </article>

      </div>

      {/* End  */}

      <form ref={form} onSubmit={sendEmail}>

        <input className='formName' type="text" name='name' placeholder='Your Full Name' required />

        <input  className='formEmail' type="text" name='email' placeholder='Your Email' required />

        <textarea className='formMessage' type="text" name='message' rows="7" placeholder='Your Message'  required />

        <button type='submit' className='formBtn'>Send Message</button>
        
      </form>

      <MessengerCustomerChat
        pageId="100087454950757"
        appId="652573373157617"
      />

    </div>
  
  </section>  
    )
  }


export default Contact