import React from 'react'
import { useEffect } from 'react';

export const Course = ({ select, setSelect, students, setFilterStudents }) => {

    const { age, letter } = select;

    const dateToday = new Date();

    const handleChange = e => {

        if (e.target.value) {
            setSelect({
                ...select,
                [e.target.name]: e.target.value
            });
        }
    };

    useEffect(() => {
        if (students) {

            const ageChild = age.slice(-1);// extrae 1,2,3 de age1

            // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar 
            let currentYear = dateToday.getFullYear();
            if (dateToday.getMonth() + 1 < 9) {
                currentYear = currentYear - 1;
            }

            // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento
            const filter = students.filter((element) => element.letter == letter && (currentYear - Number(element.birth_date.slice(0, 4))) == ageChild);
            setFilterStudents(filter);
        }
    }, [select])

    return (
        <div className='course__main'>

            <div className='options'>

                <div className={age + ' age'} onClick={handleChange}>
                    <div className='title'><span>Clase: </span></div>
                    <div><button name='age' value='age0'>0-1 años</button></div>
                    <div><button name='age' value='age1'>1-2 años</button></div>
                    <div><button name='age' value='age2'>2-3 años</button></div>
                </div>

                {/* <button name='breakfast' value='1' id={id_student}>N</button> */}

                <div className={letter + ' letter'} onClick={handleChange}>
                    <div className='title'><span>Letra: </span></div>
                    <div><button name='letter' value='A'>A</button></div>
                    <div><button name='letter' value='B'>B</button></div>
                    <div><button name='letter' value='C'>C</button></div>
                </div>
            </div>

            <div className='day'>
                <span> {`Dia: ${dateToday.getDate()} / ${dateToday.getMonth()} / ${dateToday.getFullYear()}`} </span>
            </div>

        </div>
    )
}
