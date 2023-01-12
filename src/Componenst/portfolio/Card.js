import React, {useState} from 'react'
import Card from './Card.js'  
import {clonMinecraftImg,
  carritoComprasImg,
  gestorImagenesImg,
  gestorNominaPHPImg,
  gestorNominaReactImg,
  personajesRAMImg} from './images/images'

import { CSSTransition } from 'react-transition-group'

const Cards = () => {
  const [showFront, setShowFront] = useState(true)

  const mostrarFrente = () => {
    setShowFront((v) => !v)
  }
  return (
    <div className="project_content" onClick={mostrarFrente}>  
      <div className='project_demo'>
        <h3 className="project_title">Clon Minecraft hecho con react, javaScript y three js</h3> 
      </div>
      <CSSTransition in={showFront} timeout={300} classNames='flip' >
      <div className='cards'>
        <div className='front'>
          <img src={clonMinecraftImg} alt="" className='project_image'/>
        </div>
        <div className='back'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      </CSSTransition>
    </div>
  )
}



export default Cards




