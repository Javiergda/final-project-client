import React from 'react'

export const Card = ({ values }) => {

    console.log(values);

    const { img, title, description } = values;
    return (
        <div className='card'>
            <img src={img} alt='img' />
            <div>
                <h5>{title}</h5>
            </div>
            <p>
                {description}
            </p>
            <span>+ Info</span>
        </div>
    )
}
