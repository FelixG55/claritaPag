import React,{useState} from 'react'
import '../assets/css/QuienSoy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function ContenidoQuienSoy() {

  const [mostrarCuadro, setMostrarCuadro] = useState(false);
  const [iconoCambio, setIconoCambio] = useState(false);

  const toggleCuadroHandler = () => {
    setMostrarCuadro(!mostrarCuadro);
    setIconoCambio(!iconoCambio);
  };


  return (
    <React.Fragment>
        <div id='QuienSoy' className='QuienSoy'>
            <div></div>
            <div className='name-quiensoy' >
             <h1>Clara Anaya</h1>
             <h2>Pedagoga especializada</h2>
              <div className='buttonSaberMas'>
               <h3>Saber mas</h3>
               
               {iconoCambio ?<FontAwesomeIcon icon={faCircleMinus}  style={{color: "#003c56",}} onClick={toggleCuadroHandler}/>:
               <FontAwesomeIcon icon={faCirclePlus}  style={{color: "#003c56",}} onClick={toggleCuadroHandler}/>}
                
              </div>
              { mostrarCuadro && 
                <p>Soy profesional experta en educación especial con amplia <br></br> experiencia en manejo integral de:
                        
                    <li>Retardo generalizado en el desarrollo</li>
                    <li>Autismo</li>
                    <li>Déficit de atención e hiperactividad</li>
                    <li>Dificultades en el aprendizaje</li>
                    <li>Asesora en procesos de inclusión social y escolar</li>
                    <li>Desarrollo en estimulación de habilidades cognitivas en <br></br>niños, niñas y jóvenes.</li>    
                </p>
              }
            </div>
            <div className='img-container'>
            <img src="/images/clarita.png" alt="clarita" />
            </div>
        </div>
    </React.Fragment>
  )
}
