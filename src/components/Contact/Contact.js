import React from 'react'
import { Cards } from '../common/Cards'
import person1 from '../../images/person1.jpg'
import bambi2 from '../../images/bambi2.jpg'
import bambi3 from '../../images/bambi3.jpg'
import bambi4 from '../../images/bambi4.jpg'

const cardValues = [
    {
        img: person1,
        title: 'Servicios',
        description: 'Los mejores servicios de toda la zona',
        info: '+ Info'
    },
    {
        img: bambi2,
        title: 'Horarios',
        description: 'Los mejores horarios de toda la zona',
        info: '+ Info'
    },
    {
        img: bambi3,
        title: 'Profesores',
        description: 'Los mejores profesores del mundo',
        info: '+ Info'
    },
    {
        img: bambi4,
        title: 'Contacto',
        description: 'Contacta con nosotros',
        info: '+ Info'
    }
];

export const Contact = () => {

    return (
        <div className='contact_main'>
            <div className='wrap'>
                <h1>Contacta con nosotros</h1>


                <p>
                    When an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <h2>Informacion de contacto</h2>
                <p>C/ calle nº1 29010 Málaga</p>
                <p>C/ calle nº1 29010 Málaga</p>
                <p>C/ calle nº1 29010 Málaga</p>
                <p>C/ calle nº1 29010 Málaga</p>


                <h2>Nuestro profesores</h2>

                <Cards cardValues={cardValues} />

                <h2>Siguenos</h2>

                <div className='boxs'>
                    <div className='box-text'>
                        <span className='numbers'>15</span>
                        <span>Alumnos/clase</span>
                    </div>

                    <div className='box-text'>
                        <span className='numbers'>8</span>
                        <span>Profesores</span>
                    </div>

                    <div className='box-text'>
                        <span className='numbers'>+ 10</span>
                        <span>Años de experiencia</span>
                    </div>
                </div>
            </div>
        </div>






    )
}
