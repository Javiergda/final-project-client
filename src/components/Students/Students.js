import React, { useContext } from 'react'
import { Daily } from './Daily'
import { Student } from './Student'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../auth/authContext'
import { Navigate } from 'react-router-dom'


export const Students = () => {

    const context = useContext(AuthContext);

    useEffect(() => {
        ///////////////////////// CRUD - GET
        // -- SQL --
        // SELECT * FROM students
        // LEFT JOIN daily ON daily.id_student=students.id_student
        // WHERE 
        // (students.email_user='usuario1@gmail.com' AND TIMESTAMPDIFF(year,birth_date,NOW()) < 4) 
        // AND 
        // (date = CURDATE() OR date IS NULL);


        // resultado 2 registros. Tiene 2 hijos en la guarde
        const dataStudents = [
            {
                id_student: 10,// clave foranea - no se muestra
                name: 'Lucia',
                surname: 'Garcia',
                birth_date: '2019-04-27',
                phone1: 600111222,
                phone2: 600444555,
                letter: 'A',
                email_user: 'javier@javier', // no se muestra
                id_daily: 1, // no se muestra
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
                id_student: 20, // clave foranea - no se muestra
                name: 'Julia',
                surname: 'Garcia',
                birth_date: '2020-05-01',
                phone1: 600111222333,
                phone2: 600444555666,
                letter: 'C',
                email_user: 'javier@javier', // no se muestra
                id_daily: 2, // no se muestra
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
                absence: true
            }
        ];

        if (dataStudents) {
            setStudents(dataStudents)
            setStudent(dataStudents[0]);
        }

    }, [])

    // Student
    const [students, setStudents] = useState([]);// Todos los estudiantes para opciones del select
    const [student, setStudent] = useState({});// objeto filtrado de 1 estudiante

    return (
        context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
            <div className='students_main'>
                <Student students={students} student={student} setStudent={setStudent} />
                <Daily student={student} />
            </div>
            :
            <Navigate to='/login' />
    )
}
