import React, {useState} from 'react'
import '../../css/onFlip.css'


import {clonMinecraftImg,
  carritoComprasImg,
  gestorImagenesImg,
  gestorNominaPHPImg,
  gestorNominaReactImg,
  personajesRAMImg} from './images/images'
import ModalProjects from './ModalProjects'


const Projects = () => {

  const initialState = {
    "minecraft": false,
    "carrito": false,
    "gdi": false,
    "gnphp": false,
    "gnreact": false,
    "rickymorty": false
  }

  const [cards, setCards] = useState({
    "minecraft": false,
    "carrito": false,
    "gdi": false,
    "gnphp": false,
    "gnreact": false,
    "rickymorty": false
  })

  console.log(initialState);


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

              <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>HTML</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>CSS</h3>
                </div>

                <div className='project_data light_blue center'>
                  <h3 className='project_name'>JAVASCRIPT</h3>
                </div>
              </div>

              <div className='project_group'>
                <div className='project_data other_blue'>
                  <h3 className='project_name'>REACT</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>THREEJS</h3>
                </div>
              </div>

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
              <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>HTML</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>CSS</h3>
                </div>

                
                <div className='project_data blue'>
                  <h3 className='project_name'>JSON</h3>
                </div>
              </div>

              <div className='project_group'>
                <div className='project_data light_blue'>
                  <h3 className='project_name'>Bootstrap</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>JavaScript</h3>
                </div>
              </div>
            
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
            <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>HTML</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>CSS</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>JAVASCRIPT</h3>
                </div>
              </div>

              <div className='project_group'>
                <div className='project_data light_blue'>
                  <h3 className='project_name'>REACT</h3>
                </div>

                <div className='project_data other_blue'>
                  <h3 className='project_name'>AXIOS</h3>
                </div>

                <div className='project_data yellow'>
                  <h3 className='project_name'>BOOTSTRAP</h3>
                </div>
              </div>
              
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
            <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>REACT</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>BOOTSTRAP</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>AXIOS</h3>
                </div>
              </div>

              <div className='project_group'>
                <div className='project_data light_blue'>
                  <h3 className='project_name'>MONGODB</h3>
                </div>

                <div className='project_data other_blue'>
                  <h3 className='project_name'>NODEJS</h3>
                </div>

                <div className='project_data other_orange'>
                  <h3 className='project_name'>EXPRESS</h3>
                </div>
              </div>
            </div>
          </div>
          
         <div className='project_links'>
            <ModalProjects />
         </div>
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
            <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>HTML</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>CSS</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>BOOTSTRAP</h3>
                </div>
              </div>

              <div className='project_group'>

                <div className='project_data other_orange'>
                  <h3 className='project_name'>JAVASCRIPT</h3>
                </div>

                <div className='project_data light_blue'>
                  <h3 className='project_name'>MYSQL</h3>
                </div>

                <div className='project_data other_blue'>
                  <h3 className='project_name'>PHP</h3>
                </div>

              </div>
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
            <div className='project_group'>
                <div className='project_data yellow'>
                  <h3 className='project_name'>REACT</h3>
                </div>

                <div className='project_data blue'>
                  <h3 className='project_name'>BOOTSTRAP</h3>
                </div>

                <div className='project_data other_blue'>
                  <h3 className='project_name'>ASP .NETCORE</h3>
                </div>

              </div>

              <div className='project_group'>
                <div className='project_data light_blue'>
                  <h3 className='project_name'>SQLSERVER</h3>
                </div>

                <div className='project_data other_orange'>
                  <h3 className='project_name'>AXIOS</h3>
                </div>

                <div className='project_data color_orange'>
                  <h3 className='project_name'>ENTITY FRAMEWORK</h3>
                </div>
              </div>
            </div>
          </div>
          <a className='project_links' href="/#">Probar ➞</a>
        </div>

    
    </div>
  )
}

export default Projects