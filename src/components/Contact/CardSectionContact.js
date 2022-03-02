import React from 'react'
import { Cards } from '../common/Cards'
import person1 from '../../images/person1.jpg'
import bambi2 from '../../images/bambi2.jpg'
import bambi3 from '../../images/bambi3.jpg'
import bambi4 from '../../images/bambi4.jpg'

const cardValues = [
    {
        img: person1,
        title: 'Carmen Garcia Sanchez',
        description: 'Directora de la escuela',
        info: 'Teléfono: 600 111 222'
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

export const CardSectionContact = () => {
    return (
        <div className='cardSectionContact_main'>
            <Cards cardValues={cardValues} />
        </div>
    )
}