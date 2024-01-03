import React,{useState,useRef} from 'react'
import '../../assets/css/ItemPlanTrabajo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

function ItemNosotros(props) {

   const [iconoAmpliado, setIconoAmpliado] = useState(false);
   const [mostraMastexto, setMostrarMasTexto] = useState(false);
   const [cambioIcono, setCambioIcono] = useState(false);

  
   const toggleCuadroHandler = () => {
      setIconoAmpliado(!iconoAmpliado);
      setMostrarMasTexto(!mostraMastexto);
      setCambioIcono(!cambioIcono);
    };

  return (
     <div className={`item-nosotros ${mostraMastexto ? 'agrandado' : ''}`}>
        <h3>{props.titulo}</h3>
        <p>{props.contenido}{mostraMastexto && props.contenidoHid}</p>
        
        {cambioIcono?<FontAwesomeIcon icon={faCircleMinus} className={iconoAmpliado ? 'icono-ampliado' : 'icono-normal'} style={{color: "#003c56",}} onClick={toggleCuadroHandler}/>:
        <FontAwesomeIcon icon={faCirclePlus} className={iconoAmpliado ? 'icono-ampliado' : 'icono-normal'} style={{color: "#003c56",}} onClick={toggleCuadroHandler}/>}
        
     </div>
  )
}

export default ItemNosotros
