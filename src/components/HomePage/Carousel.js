import React, { useState, useEffect } from 'react'
import img1 from '../../images/child1.jpg'
import img2 from '../../images/child2.jpg'
import img3 from '../../images/child3.jpg'

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
            <div className={`carousel${img}`} />
        </div>
    )
}

