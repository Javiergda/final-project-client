import React, { useContext } from 'react'
import { Daily } from './Daily'
import { Student } from './Student'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../auth/authContext'
import { Navigate } from 'react-router-dom'
import { URL_CRUD } from '../../settings';


export const Students = () => {

    const context = useContext(AuthContext);

    useEffect(() => {
        ///////////////////////// CRUD - GET
        // -- SQL --
        // SELECT * FROM students
        // LEFT JOIN daily ON daily.student_id=students.student_id
        // WHERE 
        // (students.user_id='1' AND TIMESTAMPDIFF(year,birth_date,NOW()) < 4) 
        // AND 
        // (date = CURDATE() OR date IS NULL);


        console.log('FETCH ALUMNOS');
        console.log(context.id);

        const endPoint = `student/${context.id}`;
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
                setStudents(data);
                console.log(data[0]);
                setStudent(data[0]);
                // Cargamos token o mostramos mensaje error
                // (data.token) ? setToken(data) : console.log(data);
            });



        // resultado 2 registros. Tiene 2 hijos en la guarde
        const dataStudents = [
            {
                // student_id: 10,// clave foranea - no se muestra
                name: 'Lucia',
                surname: 'Garcia',
                birth_date: '2019-04-27',
                phone1: 600111222,
                phone2: 600444555,
                letter: 'A',
                user_id: 1, // no se muestra
                id: 1, // no se muestra
                breakfast: 'a',
                lunch1: 'b',
                lunch2: 'b',
                dessert: 'c',
                snack: 'a',
                bottle: 'd',
                diaper: 'a',
                nap: 'b',
                message: 'se ha portado muy bien',
                date: '2021-10-10',
                absence: false
            },
            {
                // student_id: 20, // clave foranea - no se muestra
                name: 'Julia',
                surname: 'Garcia',
                birth_date: '2020-05-01',
                phone1: 600111222333,
                phone2: 600444555666,
                letter: 'C',
                user_id: 1, // no se muestra
                id: 2, // no se muestra
                breakfast: 'b',
                lunch1: 'a',
                lunch2: 'b',
                dessert: 'a',
                snack: 'b',
                bottle: 'd',
                diaper: 'a',
                nap: 'c',
                message: 'se ha portado muy mal',
                date: '2021-10-10',
                absence: true
            }
        ];

        // if (dataStudents) {
        //     setStudents(dataStudents)
        //     setStudent(dataStudents[0]); // cargamos primer estudiante filtrado
        // }

    }, [])

    // Student
    const [students, setStudents] = useState([]); // Todos los estudiantes para opciones del select
    const [student, setStudent] = useState({}); // Dias de un estudiante para opciones del select

    // Daily
    const [dailyStudent, setDailyStudent] = useState({}); // Daily de studiante seleccionado

    return (
        <div className='students_main'>
            <Student students={students} student={student} setStudent={setStudent} setDailyStudent={setDailyStudent} />
            <Daily dailyStudent={dailyStudent} student={student} />
        </div>
    )
}
