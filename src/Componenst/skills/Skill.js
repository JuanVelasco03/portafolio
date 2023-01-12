import React from "react";
import '../../css/skill.css'
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section center" id="skills">
      <div className="titles">
        <h2 className="section_title">Habilidades</h2>
        <p className="section_subtitle">Mi nivel tecnologico</p>
      </div>
      <div className="skills_container container grid">
        <Frontend/>
        <Backend/>
      </div>
    </section>
  )
}

export default Skills