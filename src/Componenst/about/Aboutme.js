import React from "react";
import '../../css/aboutme.css'

import Info from "./Info";

const Aboutme = () => {
  return (
    <section className="about section center" id="about">
      <div className="">
        <div>
          <h2 className="section_title text-center">Acerca de mi</h2>
          <p className="section_subtitle text-center">Mi introduccion</p>
        </div>
        <div className="about_container container grid">
          <Info />
          <p className="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eaque cupiditate architecto minus sed, necessitatibus, facere exercitationem magnam, quas dolores ipsum aperiam voluptates animi possimus sit repellat voluptate. Quis, numquam!</p>
        </div>
      </div>
    </section>
  )
}

export default Aboutme;