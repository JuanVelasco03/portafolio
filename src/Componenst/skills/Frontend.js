import React from 'react'
import 'boxicons'

const Frontend = () => {
  return (
      <div className="skills_content">
        <h3 className="skills_title">Desarrollo Frontend</h3>   

        <div className="skills_box">
          <div className="skills_group">
            <div className='skills_data'>
              <box-icon name='badge-check' className="bx-badge-check"></box-icon>
              <div>
                <h3 className="skills_name">HTML</h3>
                <span className='skills_level'>Intermedio</span>
              </div>
            </div>  

            <div className='skills_data'>
              <box-icon name='badge-check' className="bx-badge-check"></box-icon>
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className='skills_level'>Intermedio</span>
              </div>
            </div> 

            <div className='skills_data'>
              <box-icon name='badge-check' className="bx-badge-check"></box-icon>
              <div>
                <h3 className="skills_name">JavaScript</h3>
                <span className='skills_level'>Intermedio</span>
              </div>
            </div> 
          </div>  

          <div className="skills_group">
            <div className='skills_data'>
                <box-icon name='badge-check' className="bx-badge-check"></box-icon>
                <div>
                  <h3 className="skills_name">Bootstrap</h3>
                  <span className='skills_level'>Pre-intermedio</span>
                </div>
              </div> 

              <div className='skills_data'>
                <box-icon name='badge-check' className="bx-badge-check"></box-icon>
                <div>
                  <h3 className="skills_name">React</h3>
                  <span className='skills_level'>Intermedio</span>
                </div>
              </div> 

              <div className='skills_data'>
                <box-icon name='badge-check' className="bx-badge-check"></box-icon>
                <div>
                  <h3 className="skills_name">three js</h3>
                  <span className='skills_level'>Basic</span>
                </div>
              </div> 
          </div>  
        </div> 

      </div>
  )
}

export default Frontend
