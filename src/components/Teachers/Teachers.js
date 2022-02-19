import React from 'react'
import { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { Course } from './Course'
import { StudentsList } from './StudentsList'
import { URL_CRUD } from '../../settings';

export const Teachers = () => {

    const context = useContext(AuthContext);

    useEffect(() => {

        ////////// CRUD - GET
        // -- SQL --
        // SELECT * FROM students
        // LEFT JOIN daily ON daily.id_student=students.id_student
        // WHERE TIMESTAMPDIFF(year,birth_date,NOW()) < 4
        // AND 
        // (date = CURDATE() OR date IS NULL);

        console.log('FETCH ALUMNOS');

        const endPoint = `daily/${context.id}`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            },
        }
        fetch(`${URL_CRUD}/${endPoint}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Cargamos token o mostramos mensaje error
                // (data.token) ? setToken(data) : console.log(data);
            });

        // resultado todo alumnos actuales




        if (dataStudents) {

            setStudents(dataStudents);

            const ageChild = age.slice(-1);// extrae 1,2,3 de age1
            let currentYear = dateToday.getFullYear();


            let birth_date = '2021-01-05';
            console.log(Number(birth_date.slice(0, 4)));


            // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar
            if (dateToday.getMonth() + 1 < 9) {
                currentYear = currentYear - 1;
            }

            // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento (extrae los 4 primeros xq es el año de date)
            const filter = dataStudents.filter((element) => element.letter == letter && (currentYear - Number(element.birth_date.slice(0, 4))) == ageChild);
            setFilterStudents(filter);
        }

    }, [])

    const dateToday = new Date();

    const initialState = {
        age: 'age0',
        letter: 'A'
    }
    const [select, setSelect] = useState(initialState);
    const { age, letter } = select;

    const [students, setStudents] = useState([]); //todos los estudiantes para filtrar en las opciones de Course
    const [filterStudents, setFilterStudents] = useState([]); // estudiantes filtrados que vienen de Course

    return (
        <div>
            <Course select={select} setSelect={setSelect} students={students} setFilterStudents={setFilterStudents} />
            <StudentsList filterStudents={filterStudents} />
        </div>
    )
}
