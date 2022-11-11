import React from "react";
import Information from "../Componenst/Information";
import Imagen from "../Componenst/Imagen";
import Navbar from "../Componenst/Navbar"

const Home = () => {
  return (
    <div className="contenido-home">
      <div className="container-menu">
        <Navbar />
      </div>
      <div className="information">
        <Information />
      </div>
      <div className="imagen">
        <Imagen />
      </div>
    </div>
  )
}

export default Home;