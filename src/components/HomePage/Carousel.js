import React, { useState, useEffect } from 'react'
import img1 from '../../images/child1.jpg'
import img2 from '../../images/child2.jpg'
import img3 from '../../images/child3.jpg'

export const Carousel = () => {

    const [img, setImg] = useState(1);
    console.log(img);

    useEffect(() => {
        const interval = setInterval(() => {

            setImg(img + 1);
            console.log(img);
            // img == 3 ? setImg(1) : setImg(img + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className='carousel_main'>
            {img}


            {/* <div className={`carousel${img}`} /> */}


        </div>
    )
}

