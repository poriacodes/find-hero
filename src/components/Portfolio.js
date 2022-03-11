import React, { useEffect } from 'react'
import "../css/Portfolio.css"
import "aos/dist/aos.css"
import Aos from 'aos'
import portfolio1 from "../images/kash.png"
import portfolio2 from "../images/mentorafrica.png"
import portfolio3 from "../images/nirogstreet.png"
import portfolio4 from "../images/find_am.png"
import portfolio5 from "../images/travelTube.png"
import portfolio6 from "../images/traveltube_part.png"
import portfolio7 from "../images/T_courier.png"


const  Portfolio =()=> {

  useEffect(() =>{
    Aos.init({
      duration: 1500,
      anchorPlacement:'bottom-bottom'
    });

  }, {});

    return (
      
  
      <section data-aos="fade-down" id='portfolio'>

        <h2 className='recentWork'>My Recent Works</h2>

        <div className='container portfolio_container'>
          <article className='portfolio_item'>
            <div className='portfolio_test-image'> <img src={portfolio1} alt="Kashbase" /> </div>
            <h3>Kashbase: A digital finance app for savings and investment</h3>
            <a href='https://play.google.com/store/apps/details?id=com.kashbase.spark&hl=en&gl=US' target="blank" style={{ textDecoration: "none"}}  className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/kashbase-save-invest-now/id1498590590' target="blank" style={{ textDecoration: "none"}} className='PortBtn2'>AppStore</a>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_test-image'><img src={portfolio2} alt="Mentor Africa" /> </div>
            <h3> Mentor Africa: An app to connect mentors with mentees.</h3>
            <a href='https://play.google.com/store/apps/details?id=com.sarge.maf_mentor.mentor&hl=en&gl=US' target="blank"  style={{ textDecoration: "none"}} className='portBtn'>PlayStore</a>
            <a href='https://play.google.com/store/apps/details?id=com.sarge.maf_mentor.mentor&hl=en&gl=US' target="blank" style={{ textDecoration: "none"}}  className='PortBtn2'>AppStore</a>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_test-image'> <img src={portfolio3} alt="Nirog Street" /></div>
            <h3> Nirog Street: An app for the Ayurvedic doctors and students</h3>
            <a href='https://play.google.com/store/apps/details?id=com.app.nirogstreet&hl=en&gl=US' target="blank" style={{ textDecoration: "none"}} className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/nirogstreet/id1352321621' target="blank" style={{ textDecoration: "none"}}  className='PortBtn2'>AppStore</a>
          </article>

          
          <article className='portfolio_item'>
            <div className='portfolio_test-image'> <img src={portfolio4} alt="Nirog Street" /></div>
            <h3> Findam: A Food and Drinks Delivery App </h3>
            <a href='https://play.google.com/store/apps/details?id=com.findamapp.find_am&hl=en&gl=US' target="blank" style={{ textDecoration: "none"}} className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/findam/id1561266673' target="blank" style={{ textDecoration: "none"}} className='PortBtn2'>AppStore</a>
          </article>

          <article className='portfolio_item'>
            <div className='portfolio_test-image'><img src={portfolio5} alt="Travel Tube" /></div>
            <h3>TravelTube: An App that provides video content</h3>
            <a href='https://play.google.com/store/apps/details?id=com.traveltube.tclubmobile' target="blank" style={{ textDecoration: "none"}} className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/traveltube/id1580895770' target="blank" style={{ textDecoration: "none"}} className='PortBtn2'>AppStore</a>
          </article>

           <article className='portfolio_item'>
            <div className='portfolio_test-image'><img src={portfolio6} alt="TravelTube Partner Central" /></div>
            <h3>TravelTube Partner Central: A food ordering App</h3>
            <a href='https://play.google.com/store/apps/details?id=com.traveltube.order_tracker' target="blank"  style={{ textDecoration: "none"}} className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/traveltube-partner-central/id1585107311' target="blank" style={{ textDecoration: "none"}} className='PortBtn2'>AppStore</a>
          </article> 

          <article className='portfolio_item'>
            <div className='portfolio_test-image'><img src={portfolio7} alt="TCourier" /></div>
            <h3>	TCourier Delivery Driver: Food and Drink Delivery App</h3>
            <a href='https://play.google.com/store/apps/details?id=com.traveltube.tcourier' target="blank" style={{ textDecoration: "none"}}  className='portBtn'>PlayStore</a>
            <a href='https://apps.apple.com/ng/app/tcourier-delivery-driver/id1579848131' target="blank" style={{ textDecoration: "none"}} className='PortBtn2'>AppStore</a>
          </article>


        </div>
  
  
      </section>
    )
  }

export default Portfolio