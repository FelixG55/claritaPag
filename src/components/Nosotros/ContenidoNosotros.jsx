import React, {useState} from 'react'
import ItemPlanTrabajo from './ItemNosotros'
import '../../assets/css/ContenidoNosotros.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ItemBoxTitulos from '../ItemBoxTitulos';
import ItemNosotros from './ItemNosotros';


function ContenidoNosotros() {

    let item1 = {
        titulo: 'Quien Soy',
        contenido: 'Profesional experta en servicios de intervención pedagógica a niños, niñas, y jóvenes en condición de discapacidad, neurodiversos y con talentos excepcionales.',
        contenidoHid: ' Con experiencia en el apoyo y orientación a padres de familia, docentes e instituciones educativas en procesos de inclusión escolar, por medio de estrategias pedagógicas personalizadas, talleres a padres y profesores. A través de mi servicio profesional y con el apoyo de  un equipo de expertos, busco desarrollar en los estudiantes habilidades cognitivas y un aprendizaje significativo, para fortalecer su autonomia e inclusión escolar y social.'
    }

    let item2 = {
        titulo: 'Fortalezas',
        contenido: 'Implemento una metodología personalizada, creativa y con amor, que trasciende fronteras, porque se parte de una caracterización de cada estudiante.',
        contenidoHid: ' Con esto se determina sus características cognitivas, familiares, escolares, sociales y culturales, como punto de partida para planificar y desarrollar espacios de trabajos divertidos, motivantes, que permitan el desarrollo de habilidades, un aprendizaje significativo y una adecuada inclusión escolar.'
    }

    let item3 = {
        titulo: 'Por qué creer en clarita ?',
        contenido: `A través de nuestro trabajo, los niños, niñas y jóvenes han fortalecido en poco tiempo sus habilidades básicas, logrando un aprendizaje significativo en un periodo corto de tiempo, lo cual les ayuda a tener una inclusión escolar adecuada.
    `,
        contenidoHid: `A través de nuestro trabajo, los niños, niñas y jóvenes han fortalecido en poco tiempo sus habilidades básicas, logrando un aprendizaje significativo en un periodo corto de tiempo, lo cual les ayuda a tener una inclusión escolar adecuada.
        Motivación: Gozan y disfrutan los espacios de trabajo.
        
        Liderar procesos de inclusión escolar con excelentes resultados, tanto en los niños como en las instituciones y docentes, lo que ha permitido el fortalecimiento de la institución desde el ámbito social.`
        
    }

    let contenido = {
        titulo: 'NOSOTROS'
    }
    
    const itemProps = [contenido];

    const cardProps = [item1, item2, item3];

  
  return (
    <React.Fragment>
        <section className='nosotros' id='nosotros'>
            <div className ='content-nosotros1'> 
                {
                    itemProps.map((item,index)=>{
                        return <ItemBoxTitulos {...item}  key={index}/>
                    })
                }
            </div>
                <div className='itemspNosotros'>
                    {
                        cardProps.map((item,index) =>{
                            return <ItemNosotros {...item}  key = {index} />
                        })
                    } 
                </div>
        </section>
    </React.Fragment>
  )
}

export default ContenidoNosotros