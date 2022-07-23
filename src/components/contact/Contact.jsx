import React from 'react'
import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isMsgDisplayed, setDisplay] = useState(false);

  const toggleClass = () => {
    setDisplay(!isMsgDisplayed);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qfn4lrg', 'template_jp8zkcq', form.current, 'SSSsVJVpsMnVELWFn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      toggleClass();
      e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' cols='30' rows='10' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <p className={isMsgDisplayed ? 'msg-success' : 'hide-msg-success'}>You have sucessfully sent a message!</p>
      </div>
    </section>
  )
}

export default Contact