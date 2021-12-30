import React from 'react'
import { Daily } from './Daily'
import { Student } from './Student'
import { useEffect } from 'react'
import { useState } from 'react'

export const Students = () => {

    useEffect(() => {
        ///////////////////////// CRUD - GET
        // GET Tabla Usuarios + Alumnos + Diario (Join) where id_alumno(Usuario)==id_alumno(Alumnos)
        // id_usuario(Usuario) logeado and where birtDate (year-actualyear <3)
        // resultado 2 registros. Tiene 2 hijos en la guarde
        const dataStudents = [
            {
                id_student: 10,
                name: 'Lucia',
                surname: 'Garcia',
                yearBirth: 2019,
                monthBirth: 4,
                dayBirth: 27,
                fatherPhone: 600111222,
                motherPhone: 600444555,
                letter: 'A',
                id_daily: 'a',
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
                absence: true
            },
            {
                id_student: 20,
                name: 'Julia',
                surname: 'Garcia',
                yearBirth: 2020,
                monthBirth: 1,
                dayBirth: 5,
                fatherPhone: 600111222333,
                motherPhone: 600444555666,
                letter: 'C',
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
        <div className='students_main'>
            <Student students={students} student={student} setStudent={setStudent} />
            <Daily student={student} />
        </div>
    )
}
