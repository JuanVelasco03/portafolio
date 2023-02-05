import React from "react";
import '../../css/information.css'

const ViewLeft = () => {
  return (
      <div className="information">
        <div className="fuente content-information left">
          <div className="left titulo-content">
            <h2 className="titulo">HOLA, ME LLAMO JUAN</h2>
          </div>
          <div>
            <div className="line orange"></div>
            <div className="line gray"></div>
          </div>
          <div className="left parrafo-content">
            <p className="parrafo">Soy un tecnólogo de análisis y desarrollo de sistemas de información con ánimo de convertirse en desarrollador full-stack.</p>
          </div>
        </div>
      </div>
  )
}

export default ViewLeft;