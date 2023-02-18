import React, {useState} from 'react'
import '../../css/contact.css'

import emailjs from 'emailjs-com';


const Contact = () => {
  const formContact = {userName: "", userEmail: "", userMessage: ""}
  const [contact, setContact] = useState(formContact)
  const [showMessage, setShowMessage] = useState(false);

   const handleChange = e => { 
		const {name, value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('service_3fwa329', 'template_e400i9q', contact, 'VPcRupQakqwIUiYTg')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(formContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }

   console.log(contact);
  return (
    <div className="contact section center" id="contact">
        <div className="titles">
          <h2 className="section_title title_contact">Contacto</h2>
        </div>

        { showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">Email Send Success!!</div> : ``}
        
        <form onSubmit={handleSubmit}>

          <div className="pt-3 col-md-5 mx-auto">
            <div className="form-group text-left"> <b>Nombre</b> <br/>
              <input value={contact.userName} required type="text" name="userName" onChange={handleChange}  className="form-control" placeholder="Tu nombre" />
            </div>
          </div>

            <div className="pt-3 col-md-5 mx-auto">
              <div className="form-group text-left"> <b>Correo electronico</b> <br/>
                <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" placeholder="Tu correo electronico" />
            </div>
          </div>



          <div className="pt-3 col-md-5 mx-auto">
            <div className="form-group text-left"> <b>Mensaje, propuesta o comentarios</b> <br/>
              <textarea required name="userMessage" onChange={handleChange} className="form-control" placeholder="Describe your concerns" value={contact.userMessage}></textarea>
            </div>
          </div>

          <div className="pt-3 col-md-5 mx-auto text-left">
            <button className="btn btn-primary">Enviar</button>
          </div>
    		</form>
    </div>
  )
}

export default  Contact