import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="service-left">
          <span>Get In Touch</span>
          <span>Contact Me</span>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user" placeholder='Name' />
          <input type="email" name="user_email" className="user" placeholder='Email' />
          <textarea name="message" className="user" placeholder='Message'></textarea>
          <input type="submit" value="Send" className="button" />
        </form>
      </div>
    </div>
  )
}

export default Contact