import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Card from "../Card/Card"
import Resume from "./Resume.pdf"

const Services = () => {
  return (
    <div className="services">
      {/* Left side */}
      <div className="service-left">
        <span>My Awesome</span>
        <span>Skills</span>
        {/* <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Debitis aspernatur optio molestiae sed vero illum accusantium quia, nobis suscipit sit.</span>  */}
        <a href={Resume} download>
        <button className="button s-button"> Download Cv</button>

        </a>
        {/* <div className="blur"></div> */}
      </div>

      <div className="service-right">
        <div style={{left: '14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          details = {"Figma, Corel Draw, Photoshop, canvas"}
          />
          
        </div>
        <div>
          <Card
          emoji = {Glasses}
          heading = {'Developer'}
          details = {"JavaScript, VueJs, ReactJs, PHP, WordPress Firebase, NodeJs"}
          />
          
        </div>
      </div>
    </div>
  )
}

export default Services