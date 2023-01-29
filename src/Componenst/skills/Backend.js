import React from 'react'

const Backend = () => {
  return (
    <div className="skills_content">
    <h3 className="skills_title">Desarrollo Backend</h3>

    <div className="skills_box">
      
      <div className="skills_group">
        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">Node js</h3>
            <span className='skills_level'>Pre-intermedio</span>
          </div>
        </div>  

        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">PHP</h3>
            <span className='skills_level'>Pre-intermedio</span>
          </div>
        </div> 

        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">C#</h3>
            <span className='skills_level'>Basic</span>
          </div>
        </div> 
      </div>  

      <div className="skills_group">
        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">MySql</h3>
            <span className='skills_level'>Intermedio</span>
          </div>
        </div>  

        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">Sql Server</h3>
            <span className='skills_level'>Basic</span>
          </div>
        </div> 

        <div className='skills_data'>
          <box-icon name='badge-check'></box-icon>
          <div>
            <h3 className="skills_name">MongoDB</h3>
            <span className='skills_level'>Basic</span>
          </div>
        </div> 
      </div>
    </div> 
    </div>
  )
}

export default Backend
