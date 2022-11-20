import React from "react";
import '../css/navbar.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'

const Navbar = () => {
  return (
    <div className="menu">
      <ul className="list">
        <li className="white"><a href="/#" className="white">Who i am?</a></li>
        <li className="white"><a href="/#" className="white">Portfolio</a></li>
        <li className="white"><a href="/#" className="white">Skill set</a></li>
        <li className="white"><a href="/#" className="white">Get in touch</a></li>
      </ul>
      <ul className="list2">
        <li className="white"><a href="/#"><AiOutlineGithub className="icon"/></a></li>
        <li className="white"><a href="/#"><BsLinkedin className="icon"/></a></li>
        <li className="white"><a href="/#"><SiNetlify className="icon"/></a></li>
      </ul>
    </div>
  );
}

export default Navbar;
