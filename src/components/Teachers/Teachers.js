import React from 'react'
import { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { useContext } from 'react/cjs/react.development'
// import { AuthContext } from '../../auth/authContext'
import { Course } from './Course'
import { StudentsList } from './StudentsList'

export const Teachers = () => {

    // const context = useContext(AuthContext);

    useEffect(() => {

        ////////// CRUD - GET
        // -- SQL --
        // SELECT * FROM students
        // LEFT JOIN daily ON daily.id_student=students.id_student
        // WHERE TIMESTAMPDIFF(year,birth_date,NOW()) < 4
        // AND 
        // (date = CURDATE() OR date IS NULL);

        // resultado todo alumnos actuales

        const dataStudents = [
            {
                id_student: 10, // clave foranea - no se muestra
                name: 'Lucia',
                surname: 'Garcia',
                birth_date: '2021-04-27',
                phone1: 600111222,
                phone2: 600444555,
                letter: 'A',
                email_user: 'javier@javier', // no se muestra
                id_daily: '', // no se muestra
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
                birth_date: '2021-01-05',
                phone1: 600111222333,
                phone2: 600444555666,
                letter: 'A',
                email_user: 'garcia@garcia',
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
        // context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
        <div>
            <Course select={select} setSelect={setSelect} students={students} setFilterStudents={setFilterStudents} />
            <StudentsList filterStudents={filterStudents} />
        </div>
        // :
        // <Navigate to='/login' />
    )
}
