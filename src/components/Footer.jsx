import '../assets/css/Footer.css'
import React from 'react'
import ItemBoxTitulos from './ItemBoxTitulos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {

  let contenido = {
    titulo: 'CONTACTO'
}
const itemProps = [contenido];
const CorreoLink = ({ direccionCorreo, asunto, cuerpoMensaje }) => {
  const mailtoLink = `mailto:${direccionCorreo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoMensaje)}`;

  return (
    <a href={mailtoLink}>Enviar correo</a>
  );
};
  return (
    <React.Fragment>
      <div className='footer' id='footer'>
        <div className='content-ptrabajo2'>
          {
             itemProps.map((item,index)=>{
                 return <ItemBoxTitulos {...item}  key={index}/>
              })
          }
        </div>
        <div className='footer-quiensoy  width-cont'>
          <div className='contact-info'>
            <h3><FontAwesomeIcon icon={faWhatsapp} beat size="xl" style={{color: "#003c56",}} /> +57 3114957878</h3>
            <a href="mailto:claritaeducacionconamor67@gmail.com" style={{color:'inherit'}}><h3><FontAwesomeIcon icon={faEnvelope} beat size="xl" style={{color: "#003c56",}} /> claritaeducacionconamor67@gmail.com</h3></a>
          </div>
          <div className='contact-info-write'>
            <h3><FontAwesomeIcon icon={faLocationDot} beat size="xl" style={{color: "#003c56",}} /> Calle 125 # 21a – 47 - primer piso. <br></br>
              Bogotá, Colombia</h3>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.374794158691!2d-74.05505482541282!3d4.704783995270233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab569ed2b1f%3A0x8936ccea1991d7c5!2zQ2wuIDEyNSAjMjFhLTQ3LCBCb2dvdMOhLCBELkMsIEJvZ290w6E!5e0!3m2!1sen!2sco!4v1701270049733!5m2!1sen!2sco"></iframe>
      </div>
      
    </React.Fragment>
    
  )
}
