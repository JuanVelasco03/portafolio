import React from 'react'
import '../../css/services.css'

import {clonMinecraftImg,
  carritoComprasImg,
  gestorImagenesImg,
  gestorNominaPHPImg,
  gestorNominaReactImg,
  personajesRAMImg} from './images/images'


const Projects = () => {


  return (
    <div className="project_container container grid">
    
    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Clon Minecraft hecho con react, javaScript y three js</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={clonMinecraftImg} alt="" className='project_image'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>

    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Carrito de compras hecho javaScript vanilla.</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={carritoComprasImg} alt="" className='project_image'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>

    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Gestor de imagenes hecho con mongoDb, nodeJs y react.</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={gestorImagenesImg} alt="" className='project_image image_height'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>

    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Gestor de nomina hecho con php, Mysql</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={gestorNominaPHPImg} alt="" className='project_image image_height'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>

    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Gestor de nomina hecho con react, sql server y asp.net core c#</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={gestorNominaReactImg} alt="" className='project_image image_height'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>

    <div className="project_content">  
      <div className='project_demo'>
        <h3 className="project_title">Lista de personajes Rick And Morty hecho con React.</h3> 
      </div>
      <div className='project_box cards'>
        <div className='front'>
          <img src={personajesRAMImg} alt="" className='project_image image_height'/>
        </div>
        <div className='back'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
        </div>
      </div>
      <a href="/#">Probar ➞</a>
    </div>
    
</div>
  )
}

export default Projects