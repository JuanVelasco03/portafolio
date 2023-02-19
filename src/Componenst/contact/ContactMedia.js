import React from 'react'
import '../../css/contact-media.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const ContactMedia = () => {
  return (
    <div>
      <p className='media_subtitle'>Sigamos en contacto por medio de correo electronico o por alguna de mis redes sociales.</p>
      <div className='social_content'>
        <ul className='social_list'>
          <a href="https://www.linkedin.com/in/jp-velasco/" className='white linkedin' target='_blank'><BsLinkedin className="icon_media"/></a>
          <a href="https://github.com/JuanVelasco03" className='white' target='_blank'><BsGithub className="icon_media"/></a>
          <a href="https://wa.me/3124241874" className='white' target='_blank'> <BsWhatsapp className='icon_media'/></a>
        </ul>
      </div>
    </div>
  )
}

export default ContactMedia
