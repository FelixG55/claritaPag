import React, {useState, useEffect} from 'react'
import ItemPlanTrabajo from './ItemPlanTrabajo'
import '../../assets/css/ContenidoPlanTrabajo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBoxTitulos from '../ItemBoxTitulos';

function ContenidoPlanTrabajo() {

    let item1 = {
        titulo: 'Evaluación inicial',
        contenido: 'Determinamos los antecedentes clínicos y escolares, junto con las habilidades, fortalezas y necesidades de cada niño'
    }

    let item2 = {
        titulo: 'Caracterización',
        contenido: 'A partir de la caracterización de cada niño, realizamos un informe general con recomendaciones y pasos a seguir'
    }

    let item3 = {
        titulo: 'Plan de intervención',
        contenido: 'Diseñamos los objetivos y el plan de trabajo, implementando estrategias y metodologías pedagógicas personalizadas.'
    }

    let item4 = {
        titulo: 'Apoyo pedagógico personalizado',
        contenido: 'Ponemos en práctica el plan de intervención con una metodología con corazón.'
    }

    let item5 = {
        titulo: 'Evaluación de seguimiento',
        contenido: 'Evaluación permanente del proceso para plantear conclusiones y recomendaciones.'
    }

    let contenido = {
        titulo: 'PLAN TRABAJO'
    }
    
    const itemProps = [contenido];

    const cardProps = [item1, item2, item3, item4, item5];

        const [startIndex, setStartIndex] = useState(0);
        const [miConstante, setMiConstante] = useState(0);
          
            useEffect(() => {
              const ajustarValorConstante = () => {
                if (window.innerWidth > 839) {
                  setMiConstante(3);
                } else if (window.innerWidth > 559) {
                  setMiConstante(2);
                }else{
                  setMiConstante(1);
                }
              };
              ajustarValorConstante();
              window.addEventListener('resize', ajustarValorConstante);
              return () => {
                window.removeEventListener('resize', ajustarValorConstante);
              };
            }, []); // 
      
        const totalItems = 5;
        const itemsToShow = miConstante;
      
        const nextItems = () => {
          setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
        };
      
        const prevItems = () => {
          setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
        };
      
        const visibleItems = startIndex + itemsToShow <= totalItems
        ? cardProps.slice(startIndex, startIndex + itemsToShow)
        : [...cardProps.slice(startIndex), ...cardProps.slice(0, itemsToShow - (totalItems - startIndex))];
  
  return (
    <React.Fragment>
        <div className='plantrabajo'>
            <div className ='content-ptrabajo1'> 
                {
                    itemProps.map((item,index)=>{
                        return <ItemBoxTitulos {...item}  key={index}/>
                    })
                }
            </div>
                <div className='itemspTrabajo'>
                    {
                        visibleItems.map((item,index) =>{
                            return <ItemPlanTrabajo {...item}  key = {index} />
                        })
                    } 
                    <div className='buttons-slice'>
                        <FontAwesomeIcon icon={faCircleLeft} onClick={prevItems} style={{color: "#003c56",}} className='pointer' />
                        <FontAwesomeIcon icon={faCircleRight} onClick={nextItems} style={{color: "#003c56",}} className='pointer'/>
                    </div>
                </div>
        </div>
         
    </React.Fragment>
  )
}

export default ContenidoPlanTrabajo