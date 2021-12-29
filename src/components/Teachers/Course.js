import React from 'react'
import { useState } from 'react';

export const Course = () => {

    const initialState = {
        age: 'age1',
        letter: 'A'
    }

    const [select, setSelect] = useState(initialState);
    const { age, letter } = select;

    const handleChange = e => {

        if (e.target.id) {
            setSelect({
                ...select,
                [e.target.title]: e.target.id
            });
        }
    };

    return (
        <div className='course__main'>
            <form>
                <div className='options'>

                    <div className={age + ' age'} onClick={handleChange}>
                        <div className='title'><span>Clase: </span></div>
                        <div><span title='age' id='age1'>1 año</span></div>
                        <div><span title='age' id='age2'>2 años</span></div>
                        <div><span title='age' id='age3'>3 años</span></div>
                    </div>

                    <div className={letter + ' letter'} onClick={handleChange}>
                        <div className='title'><span>Letra: </span></div>
                        <div><span title='letter' id='A'>A</span></div>
                        <div><span title='letter' id='B'>B</span></div>
                        <div><span title='letter' id='C'>C</span></div>
                    </div>
                </div>
            </form>

            <div className='day'>
                <span>Dia: OBTERNER FECHA DE SERVIDOR</span>
            </div>

        </div>
    )
}
