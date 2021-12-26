import React, { useState, useEffect } from 'react'
import erizo from '../../icons/erizo.png'
import fox from '../../icons/fox.png'
import insect from '../../icons/insect.png'

const title = ['Escuela Infantil Bambi',
    {
        title: 'Un sitio donde investigar y explorar',
        logo: erizo
    },
    {
        title: 'Materiales adaptados a su etapa evolutiva',
        logo: fox
    },
    {
        title: 'Con el Método Montessori',
        logo: insect
    }
]

export const Carousel = () => {

    const [img, setImg] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setImg(previmg => previmg == 3 ? 1 : previmg + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='carousel_main'>
            <div className={`carousel${img}`} >
                <p>
                    <h1>{title[0]}</h1>
                    <img src={title[img].logo} height="50px" alt='phone' color='white' />
                    <h3>{title[img].title}</h3>
                </p>
            </div>
        </div>
    )
}

