import React from 'react'
import { Card } from './Card'
import bambi1 from '../../images/bambi1.jpg'
import bambi2 from '../../images/bambi2.jpg'
import bambi3 from '../../images/bambi3.jpg'
import bambi4 from '../../images/bambi4.jpg'

const cardValues = [
    {
        img: bambi1,
        title: 'SERVICIOS',
        description: 'Los mejores servicios de toda la zona'
    },
    {
        img: bambi2,
        title: 'HORARIOS',
        description: 'Los mejores horarios de toda la zona'
    },
    {
        img: bambi3,
        title: 'PROFESORES',
        description: 'Los mejores profesores del mundo'
    },
    {
        img: bambi4,
        title: 'CONTACTO',
        description: 'Contacta con nosotros'
    }
];

export const Cards = () => {
    return (
        <div className='cards_main'>
            {
                cardValues.map((values, index) => {
                    return (
                        <Card key={index} values={values} />
                    )
                })
            }
        </div>
    )
}
