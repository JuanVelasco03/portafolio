import React from 'react'
import '../../css/contact.css'


import ContactEmail from './ContactEmail'
import ContactMedia from './ContactMedia'



const Contact = () => {
  return (
    <div className="contact section center" id="contact">
      <div className="">
        <h2 className="title_contact">Contacto</h2>
      </div>
      
      <div className='contact_container'>
        <div className='media_content'>
          <ContactMedia />
        </div>

        <div className='email_content'>
          <ContactEmail />
        </div>
      </div>
    </div>
  )
}

export default  Contact