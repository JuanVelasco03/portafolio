import React from "react";
import imagenAstronauta from '../images/reverse.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'




const Imagen = () => {
  return(
    <div className="fondo" style={{ backgroundImage: "url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}>
      <div className="redes">
      <FontAwesomeIcon icon="fa-brands fa-github-alt" />
      {/* <FontAwesomeIcon icon={faCoffee} className="white" /> */}
        {/* <a><FontAwesomeIcon icon={faEnvelope} className="white"/></a> */}
      </div>
      <div className="foto">
        <img src={imagenAstronauta} alt="" className="astronauta"/>
      </div>  
    </div>
  )
}

export default Imagen;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <style>
    

//   </style>
// </head>
// <body>
//   <div class="container" >
//     <h2>TEXTO</h2>
//     <P>texto</P>
//     <div class="line orange" ></div>
//     <div class="line gray" ></div>
//   </div>
// </body>
// </html>