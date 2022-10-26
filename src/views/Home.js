import React from "react";
import Information from "../Componenst/Information";
import Imagen from "../Componenst/Imagen";

const Home = () => {
  return (
    <div className="contenido-home">
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