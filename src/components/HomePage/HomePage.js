import React from 'react'
import { Carousel } from './Carousel'
import { Cards } from '../common/Cards'
import { Services } from './Services'
import bambi1 from '../../images/bambi1.jpg'
import bambi2 from '../../images/bambi2.jpg'
import bambi3 from '../../images/bambi3.jpg'
import bambi4 from '../../images/bambi4.jpg'

const cardValues = [
    {
        img: bambi1,
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

export const HomePage = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <Cards cardValues={cardValues} />
        </div>
    )
}
