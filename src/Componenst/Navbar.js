import '../css/navbar.css'
import {BsLinkedin} from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'


const Navbar = () => {
  

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
  
  return (
    <div className="menu">
      <nav id="menu">
        <ul className="list">
          <li className="white"><a href="#0"  onClick={(e) => addedPaddingInNavigation(e, '0')}  className="white">Home</a></li>
          <li className="white"><a href="#1"  onClick={(e) => addedPaddingInNavigation(e, '1')}  className="white">About me</a></li>
          <li className="white"><a href="#2"  onClick={(e) => addedPaddingInNavigation(e, '2')} className="white">Skill set</a></li>
          <li className="white"><a href="#3"  onClick={(e) => addedPaddingInNavigation(e, '3')} className="white">Portfolio</a></li>
          <li className="white"><a href="#4"  onClick={(e) => addedPaddingInNavigation(e, '4')} className="white">Get in touch</a></li>
          <span className="indicador"></span>
        </ul>
      </nav>
      <ul className="list2">
        {/* <li className="white"><a href="/#"><AiOutlineGithub className="icon"/></a></li> */}
        <li className="white"><a href="/#"><BsLinkedin className="icon"/></a></li>
        <li className="white"><a href="/#"><SiNetlify className="icon"/></a></li>
      </ul>
    </div>
  );
}
export default Navbar;


