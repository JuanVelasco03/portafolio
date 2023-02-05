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
          <div>
           <p className="about_description">Soy desarrollador de software y cuento con conocimientos para el manejo tanto del desarrollo front end como back end. A lo largo de mi carrera como tecnólogo en análisis y desarrollo de sistemas de información adquirí excelentes habilidades de responsabilidad, trabajo en equipo y trabajo individual. Me considero un desarrollador autodidacta, he logrado aprender más de 10 tecnologías gracias a esta habilidad. Enfoco mi aprendizaje en desarrollar resultados de software que no solo solucionen problemas, sino que hagan que el objetivo del desarrollo se cumpla de manera más eficaz.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme;