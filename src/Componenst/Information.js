import React from "react";
import '../css/information.css'



const Information = () => {
  return (
    <div className="information">
      <div className="fuente content-information left">
        <div className="left titulo-content">
          <h2 className="titulo">HOLA, MI NOMBRE ES  JUAN</h2>
        </div>
        <div>
          <div className="line orange"></div>
          <div className="line gray"></div>
        </div>
        <div className="left parrafo-content">
          <p className="parrafo">I am front-end engineer based in ho chi minh city</p>
        </div>
      </div>
    </div>
  )
}

export default Information;