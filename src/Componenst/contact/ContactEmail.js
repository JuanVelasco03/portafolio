import React, {useState} from 'react'
import '../../css/contact-email.css'


import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


const ContactEmail = () => {

  const formContact = {userName: "", userEmail: "", userMessage: ""}
  const [contact, setContact] = useState(formContact)

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
           Swal.fire('Se envio el correo correctamente')

		}, (err) => {
				   console.log('FAILED...', err);
           Swal.fire('Ocurrio un problema y no logramos enviar el correo, una disculpa :(.')

		});

   }

   console.log(contact);
  return (
    <div className="email_container" id="contact">        
        <form onSubmit={handleSubmit}>
            <div className='flex'>
              <div className="form-group text-left aliceblue"aliceblue> <b>Nombre</b> <br/>
                <input value={contact.userName} required type="text" name="userName" onChange={handleChange}  className="form-control" />
              </div>

              <div className="form-group text-left aliceblue"> <b>Correo electronico</b> <br/>
                <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control" />
              </div>
            </div>


            <div className="group_area text-left aliceblue"> <b>Mensaje, propuesta o comentario</b> <br/>
              <textarea required name="userMessage" onChange={handleChange} className="form-control text-area" value={contact.userMessage}></textarea>
            </div>

          <div className="text-left ">
            <button className="btn aliceblue">Enviar mensaje!</button>
          </div>
    		</form>
    </div>
  )
}

export default  ContactEmail