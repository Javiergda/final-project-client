import React from 'react'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { Course } from './Course'
import { StudentsList } from './StudentsList'



export const Teachers = () => {

    const context = useContext(AuthContext);

    useEffect(() => {

        ////////// CRUD - GET
        // tabla diario + alumnos (join)
        // select * where id_alumno and año_nacimiento 
        // año actual 22 - año nacimiento 19 = 3 (entre 0 y 3 años)
        // resultado todo alumnos actuales

        const dataStudents = [
            {
                id_student: 10,
                name: 'Lucia',
                surname: 'Garcia',
                yearBirth: 2021,
                monthBirth: 4,
                dayBirth: 27,
                fatherPhone: 600111222,
                motherPhone: 600444555,
                letter: 'A',
                id_daily: '',
                breakfast: '',
                lunch1: '',
                lunch2: '',
                dessert: '',
                snack: '',
                bottle: '',
                diaper: '',
                nap: '',
                message: '',
                date: '',
                absence: '0'
            },
            {
                id_student: 20,
                name: 'Julia',
                surname: 'Garcia',
                yearBirth: 2021,
                monthBirth: 1,
                dayBirth: 5,
                fatherPhone: 600111222333,
                motherPhone: 600444555666,
                letter: 'A',
                id_daily: 'b',
                breakfast: 'b',
                lunch1: 'a',
                lunch2: 'b',
                dessert: 'a',
                snack: 'b',
                bottle: 'd',
                diaper: 'a',
                nap: 'c',
                message: 'se ha portado muy regular',
                date: '2021-10-10',
                absence: 'a'
            }
        ];

        if (dataStudents) {

            setStudents(dataStudents);

            const ageChild = age.slice(-1);// extrae 1,2,3 de age1
            let currentYear = dateToday.getFullYear();

            // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar
            if (dateToday.getMonth() + 1 < 9) {
                currentYear = currentYear - 1;
            }

            // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento
            const filter = dataStudents.filter((element) => element.letter == letter && (currentYear - element.yearBirth) == ageChild);
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
        context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
            <div>
                <Course select={select} setSelect={setSelect} students={students} setFilterStudents={setFilterStudents} />
                <StudentsList filterStudents={filterStudents} />
            </div>
            :
            <Navigate to='/login' />
    )
}
