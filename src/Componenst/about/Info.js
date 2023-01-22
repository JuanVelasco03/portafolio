import React from "react";
import 'boxicons'
import '../../css/aboutme.css'

const Info = () => {
  return (
    <div className="about_info grid">
        <div className="about_box">
        <box-icon name='award' className='about_icon'></box-icon>
          <h3 className="about_title">Experiencia</h3>
          <span className="about_subtitle">8 meses en IT</span>
        </div>

        <div className="about_box">
        <box-icon name='briefcase-alt'className='about_icon'></box-icon>
          <h3 className="about_title">Completo</h3>
          <span className="about_subtitle">8+ Projects</span>
        </div>

        <div className="about_box">
        <box-icon name='support' className='about_icon'></box-icon>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </div>
    </div>
  ) 
}

export default Info