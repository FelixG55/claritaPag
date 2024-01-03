import React from 'react'
import '../../assets/css/ItemPlanTrabajo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function ItemPlanTrabajo(props) {
  return (
     <div className='item-ptrabajo'>
        <h3>{props.titulo}</h3>
        <FontAwesomeIcon className='star-icon' icon={faStar} spin size='2xl' style={{color: "#e1ca56",}} />
        <p>{props.contenido}</p>
     </div>
  )
}

export default ItemPlanTrabajo
