import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  return (
    <section id='contact'>
      <h2>Reach Zainab On...</h2>
      <div className="container contact_container">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>adedejioyindamola12@gmail.com</h5>
            <a href="mailto: adedejioyindamola12@gmail.com" target="_blank" rel="noopener noreferrer">Send A Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Zainab</h5>
            <a href="https://api.whatsapp.com/send?phone=2348162372746&text=Hello,%20My%20name%20is%20____%20" target="_blank">Send A Message</a>
          </article>
      </div>
    </section>
  )
}

export default Contact