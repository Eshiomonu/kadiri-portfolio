import React,{ useRef }  from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useState } from 'react';
export const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8jfso6e', 'template_1ee9e8d', form.current, 'MnBITNHpmxf0KUEY5')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="service-left">
          <span>Get In Touch</span>
          <span>Contact Me</span>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder='Name' />
          <input type="email" name="user_email" className="user" placeholder='Email' />
          <textarea name="message" className="user" placeholder='Message'></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thank You for contacting me"}</span>
        </form>
      </div>
    </div>
  )
}


export default Contact