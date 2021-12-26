import React, { useState, useEffect } from 'react'

const title = ['Escuela Infantil Bambi',
    'Un sitio donde investigar y explorar',
    'Materiales adaptados a su etapa evolutiva',
    'Con el Método Montessori',
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
                    <h3>{title[img]}</h3>
                </p>
            </div>
        </div>
    )
}

