import React from 'react'
import './Portfolio.css'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import MusicApp from "../../img/musicapp.png"
import Hoc from "../../img/hoc.png"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Project</span>
      <span>Portfolio</span>
    <div className="parent-slider">
    <div className="slider">
        <img src={Sidebar} alt="" srcset="" />
      </div>
      <div className="slider">
        <img src={Ecommerce} alt="" srcset="" />
      </div>
      <div className="slider">
        <img src={MusicApp} alt="" srcset="" />
      </div>
      <div className="slider">
        <img src={Hoc} alt="" srcset="" />
      </div>
    </div>
     
    </div>
  )
}

export default Portfolio