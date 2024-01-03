import React from 'react'
import '../../assets/css/ObjetivoGeneral.css'

const ObjetivoGeneral = () => {
  return (
    <div className='objGeneral'>
            <div className='itemObjGeneral'>
                <h3>OBJETIVO GENERAL</h3>
                <p>Brindar un servicio pedagógico integral, para desarrollar en los
                niños, niñas y jóvenes las habilidades cognitivas, fortalecer el
                aprendizaje y su autonomía, orientar a los padres de familia,
                docentes e instituciones educativas, con el fin de lograr un adecuado
                proceso de inclusión escolar.</p>
            </div>
            <div className='imgObjGeneral'>
                <div id='imgsSup'>
                    <img src="/images/recurso4.png" alt="" id='recurso4'/>
                    <img src="/images/recurso5.png" alt="" id='recurso5'/>
                </div>
                <img src="/images/recurso6.png" alt="" id='recurso6'/>
            </div>
    </div>
  )
}

export default ObjetivoGeneral