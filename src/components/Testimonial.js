import React, { useEffect }from 'react'
import "../css/Testimonial.css";
import vera from "../images/vera.jpg"
import jenna from "../images/jenna.JPG"
import man from "../images/man.png"
import woman from "../images/woman.png"
import "aos/dist/aos.css"
import Aos from 'aos'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: vera,
  name:"Vera Nwole",
  review: 'This is the best Mobile Developer I have worked with in a long while. He has great worth ethics and provides the exact result from the deign given to him to work with.'
  }, 

  {
    avatar: jenna,
    name:"Jenna Oriaku",
    review: 'This is the best Mobile Developer I have worked with in a long while.  He has great worth ethics and provides the exact result from the deign given to him to work with.'
    }, 

    {
      avatar: man,
      name:"Ciroma Emeka",
      review: 'This is the best Mobile Developer I have worked with in a long while. He has great worth ethics and provides the exact result from the deign given to him to work with.'
      }, 

      {
        avatar: woman,
        name:"Sharon Gates",
        review: 'This is the best Mobile Developer I have worked with in a long while. He has great worth ethics and provides the exact result from the deign given to him to work with.'
        }, 
      
  

]

const  Testimonial =()=> {

  useEffect(() =>{
    Aos.init({
      duration: 1500,
      anchorPlacement:'bottom-bottom'
    });

  }, {});

  return (

    <section  data-aos="fade-up" id='testimonial'>

      <h2 className='reviewFromClients'> Reviews From Clients</h2>

      <Swiper className='container testimonials_container'

            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
      
      >
        {

          data.map(({avatar, name, review}, index) => {

            return(
              <SwiperSlide key={index} className='testimonials'>
              <div className='client_avatar'>
              <img src={avatar} alt='avatar1'/>
              </div>
              <h5 className='client_Name'>{name}</h5>
              <small className='client_review'>{review}</small>
              </SwiperSlide>

            )

          })

        }
      
      </Swiper>

          



    </section>
  )
}

export default Testimonial