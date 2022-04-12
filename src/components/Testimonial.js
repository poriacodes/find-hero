import React, { useEffect }from 'react'
import "../css/Testimonial.css";
import vera from "../images/vera.jpg"
import dynamite from "../images/dynamite.png"
import memoji from "../images/memoji.jpg"
import "aos/dist/aos.css"
import Aos from 'aos'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: dynamite,
  name:"Dynamite Asset Management",
  review: 'Hero is the best Mobile Application Developer we have worked with in a long while. He has great worth ethics and provides the exact result from the design given to him to work with.'
  }, 

  {
    avatar: memoji,
    name:"Ayomide Odulami",
    review: 'If you are looking to build a highly responsive and creative web application , Hero is the man for the job .'
    }, 

    {
      avatar: vera,
      name:"Vera Nwole",
      review: 'Hero came highly recommended to develop a Software Application for my company and he completed the task diligently. '
    },

      // {
      //   avatar: woman,
      //   name:"Sharon Gates",
      //   review: ''
      // }
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