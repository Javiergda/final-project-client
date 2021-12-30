import React from 'react'
import { useEffect } from 'react';

export const Course = ({ select, setSelect, students, setFilterStudents }) => {

    const { age, letter } = select;

    const dateToday = new Date();

    const handleChange = e => {

        if (e.target.id) {
            setSelect({
                ...select,
                [e.target.title]: e.target.id
            });
        }
    };

    useEffect(() => {
        if (students) {

            const ageChild = age.slice(-1);// extrae 1,2,3 de age1

            // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar 
            const currentYear = dateToday.getFullYear();
            if (dateToday.getMonth() + 1 < 9) {
                currentYear = currentYear - 1;
            }

            // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento
            const filter = students.filter((element) => element.letter == letter && (currentYear - element.yearBirth) == ageChild);
            setFilterStudents(filter);
        }
    }, [select])

    return (
        <div className='course__main'>

            <div className='options'>

                <div className={age + ' age'} onClick={handleChange}>
                    <div className='title'><span>Clase: </span></div>
                    <div><span title='age' id='age0'>0-1 años</span></div>
                    <div><span title='age' id='age1'>1-2 años</span></div>
                    <div><span title='age' id='age2'>2-3 años</span></div>
                </div>

                <div className={letter + ' letter'} onClick={handleChange}>
                    <div className='title'><span>Letra: </span></div>
                    <div><span title='letter' id='A'>A</span></div>
                    <div><span title='letter' id='B'>B</span></div>
                    <div><span title='letter' id='C'>C</span></div>
                </div>
            </div>

            <div className='day'>
                <span> {`Dia: ${dateToday.getDate()} / ${dateToday.getMonth()} / ${dateToday.getFullYear()}`} </span>
            </div>

        </div>
    )
}
