/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../css/skillset.css'
import js from '../icons/js.png'
import php from '../icons/php.png'
import sql from '../icons/servidor-sql.png'
import cs from '../icons/c--4.svg'
import react from '../icons/react.png'
import node from '../icons/node-js.png'
import bs from '../icons/bootstrap.png'
import git from '../icons/git.png'


const Skillset = () => {
  return (
    <div className="content-skillset">
      <div>
        <h3 className="title">Skillset</h3>
      </div>
      <div className="texto back-content">
        <div className="border-skillset">
            <div className="margin">
              <div>
              <p className="bold">Lenguajes</p>
              </div>
              <div className="iconos">
                <ul className="lista-iconos">
                  <li>
                    <img src={js} className="js"/>
                    <p>JavaScript</p>
                  </li>
                  <li>
                    <img src={php} className="php"/> 
                    <p>Php</p>
                  </li>
                  <li>
                    <img src={cs} className="c#"/> 
                    <p>c#</p>
                  </li>
                  <li>
                    <img src={sql} className="sql"/> 
                    <p>Sql</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="margin">
              <div>
              <p className="bold">Frameworks</p>
              </div>
              <div className="iconos">
                <ul className="lista-iconos">
                  <li>
                    <img src={react} className="js"/>
                    <p>React Js</p>
                  </li>
                  <li>
                    <img src={node} className="php"/> 
                    <p>Node Js</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="margin">
              <div>
              <p className="bold">Tools</p>
              </div>
              <div className="iconos">
                <ul className="lista-iconos">
                  <li>
                    <img src={bs} className="js"/>
                    <p>Bootstrap</p>
                  </li>
                  <li>
                    <img src={git} className="php"/> 
                    <p>Git</p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset;