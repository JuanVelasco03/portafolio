import React from "react";
import imagenAstronauta from '../images/reverse.png'

import '../css/imagen.css'




const Imagen = () => {
  return(
    <div className="fondo">
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