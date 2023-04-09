import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import MusicApp from "../../img/musicapp.png"
import Hoc from "../../img/hoc.png"

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
        <img src={Sidebar} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide >
        <img src={Ecommerce} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={MusicApp} alt="" srcset="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Hoc} alt="" srcset="" />
      </SwiperSlide>
    </Swiper>
     
    </div>
  )
}

export default Portfolio