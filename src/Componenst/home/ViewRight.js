import React from "react";
import imagenAstronauta from '../../images/reverse.png'
import '../../css/imagen.css'

const  ViewRight = () => {
  return (
      <div className="fondo">
          <img src={imagenAstronauta} alt="fondo" className="astronauta"/>
      </div>
  );
}

export default ViewRight;