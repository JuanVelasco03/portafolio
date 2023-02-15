import React, {useState} from 'react'
import '../css/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'


const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  const addedPaddingInNavigation = (e, id) => {
    e.preventDefault()

    const element = document.getElementById(id)

    if(element){
      const position = getOffset(element)?.top - 15
      window.scroll({
        top: position, 
        left: 0, 
        behavior: 'smooth'
      })
    } 
  }

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <div className='navbar'>

      <button className='nav_button'  onClick={toggleMenu}>
         <box-icon name='list-ul' color='#121010' ></box-icon>
      </button>

      <nav className={`menu ${menuOpen ? 'isActive' : ''}`}>
        <ul className="list">
          <li className="white nav_li"><a href="#0"  onClick={(e) => addedPaddingInNavigation(e, '0')}  className="white">Inicio</a></li>
          <li className="white nav_li"><a href="#1"  onClick={(e) => addedPaddingInNavigation(e, '1')}  className="white">Sobre mi</a></li>
          <li className="white nav_li"><a href="#2"  onClick={(e) => addedPaddingInNavigation(e, '2')} className="white">Habilidades</a></li>
          <li className="white nav_li"><a href="#3"  onClick={(e) => addedPaddingInNavigation(e, '3')} className="white">Proyectos</a></li>
          <li className="white nav_li"><a href="#4"  onClick={(e) => addedPaddingInNavigation(e, '4')} className="white">Contacto</a></li>
          <span className="indicador"></span>
        </ul>
      </nav>

      <ul className="list2 none">
        <li className="white none"><a href="/#"><BsLinkedin className="icon"/></a></li>
        <li className="white none"><a href="/#"><SiNetlify className="icon"/></a></li>
      </ul>
    </div>
  );
}
export default Navbar;


