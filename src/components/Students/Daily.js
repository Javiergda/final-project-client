import React from 'react'

export const Daily = ({ daily }) => {

    const { id_daily, id_student, breakfast, lunch1, lunch2, dessert, snack, bottle, diaper, nap, message, date, absence } = daily;

    return (
        <div>
            <span>Falta: {absence && 'FALTA'}</span>
            <h4>COMIDAS</h4>
            <h5>Desayuno</h5>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>
            <h5>Primero</h5>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>
            <h5>Segundo</h5>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>
            <h5>Postre</h5>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>
            <h5>Merienda</h5>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>

            <h4>BIBERONES</h4>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>

            <h4>CAMBIO PAÑAL</h4>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>

            <h4>SIESTA</h4>
            <div className='selector'>
                <div />
                <div />
                <div />
                <div />
            </div>

            <h4>MENSAJE</h4>
            <div className='selector'>
                <span>{message}</span>
            </div>

        </div>
    )
}
