import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Pinnacle from "../../img/pinnacle_events.PNG"
import Royal from "../../img/royalolive.PNG"
import Zero from "../../img/zero_harm.PNG"
import Azam from "../../img/azamtv.PNG"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Project</span>
      <span>Portfolio</span>
    <Swiper 
       spaceBetween={30}
       slidesPerView={3}
       grabCursor={true}
       className='portfolio-slider'
    >
      
    <SwiperSlide>
        <img src={Pinnacle} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide >
        <img src={Royal} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Zero} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Azam} alt="" srcset="" />
      </SwiperSlide>
    </Swiper>
     
    </div>
  )
}

export default Portfolio