import React, {useState} from 'react'
import '../../css/onFlip.css'


import {clonMinecraftImg,
  carritoComprasImg,
  gestorImagenesImg,
  gestorNominaPHPImg,
  gestorNominaReactImg,
  personajesRAMImg} from './images/images'


const Projects = () => {
  const [cards, setCards] = useState({
    "minecraft": false,
    "carrito": false,
    "gdi": false,
    "gnphp": false,
    "gnreact": false,
    "rickymorty": false
  })


  return (
    <div className="project_container container grid">
    
        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Clon Minecraft </h3> 
          </div>
          <div className={`project_box cards ${cards.minecraft ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, minecraft: true})}}>
              <img src={clonMinecraftImg} alt="" className='project_image'/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, minecraft: false})}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptatum!</p>
            </div>
          </div>
          <a className='project_links' href="https://juanvelasco03.github.io/minecraft-clone/" target="_blank" rel="noreferrer">Probar ➞</a>
        </div>

        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Carrito de compras</h3> 
          </div>
          <div className={`project_box cards ${cards.carrito ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, carrito: true})}}>
              <img src={carritoComprasImg} alt="" className='project_image'/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, carrito: false})}} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
            </div>
          </div>
          <a className='project_links' href="https://eager-roentgen-03386e.netlify.app/" target="_blank" rel="noreferrer">Probar ➞</a>
        </div>

        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Lista de personajes Rick And Morty </h3> 
          </div>
          <div className={`project_box cards ${cards.rickymorty ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, rickymorty: true})}}>
              <img src={personajesRAMImg} alt="" className='project_image'/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, rickymorty: false})}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
            </div>
          </div>
          <a className='project_links' href="https://juanvelasco03.github.io/rickandmorty/" target="_blank" rel="noreferrer">Probar ➞</a>
        </div>

        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Gestor de imagenes (MERN) </h3> 
          </div>
          <div className={`project_box cards ${cards.gdi ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, gdi: true})}}>
              <img src={gestorImagenesImg} alt="" className='project_image'/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, gdi: false})}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
            </div>
          </div>
          <a className='project_links' href="/#">Probar ➞</a>
        </div>

        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Gestor de nomina hecho con PHP</h3> 
          </div>
          <div className={`project_box cards ${cards.gnphp ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, gnphp: true})}}>
              <img src={gestorNominaPHPImg} alt="" className='project_image '/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, gnphp: false})}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
            </div>
          </div>
          <a className='project_links' href="/#">Probar ➞</a>
        </div>

        <div className="project_content">  
          <div className='project_demo'>
            <h3 className="project_title">Gestor de nomina hecho con react</h3> 
          </div>
          <div className={`project_box cards ${cards.gnreact ? "flip" : ""}`}>
            <div className='front' onMouseEnter={() => {setCards({...cards, gnreact: true})}}>
              <img src={gestorNominaReactImg} alt="" className='project_image'/>
            </div>
            <div className='back' onMouseLeave={() => {setCards({...cards, gnreact: false})}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque quod harum dignissimos magnam necessitatibus perspiciatis voluptatum voluptates error voluptate.
            </div>
          </div>
          <a className='project_links' href="/#">Probar ➞</a>
        </div>
    
    </div>
  )
}

export default Projects