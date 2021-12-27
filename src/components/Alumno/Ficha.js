import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';


// GET Tabla Usuarios + Alumnos
// join tabla Usuario + table Alumnos -> where id_alumno(Usuario)==id_alumno(Alumnos)
// where birtDate (year-actualyear <3)
// resultado 2 registros. Tiene 2 hijos en la guarde

export const Ficha = () => {

    useEffect(() => {
        ///////////////////////// CRUD - GET
        const dataStudents = [
            {
                id_student: 10,
                name: 'Lucia',
                surname: 'Garcia',
                birthDate: '2019-04-27',
                fatherPhone: 600111222,
                motherPhone: 600444555,
                letter: 'A'
            },
            {
                id_student: 20,
                name: 'Julia',
                surname: 'Garcia',
                birthDate: '2020-01-05',
                fatherPhone: 600111222333,
                motherPhone: 600444555666,
                letter: 'C'
            }
        ];
        /////////////////////////

        if (dataStudents) {
            setStudents(dataStudents)
            setStudent(dataStudents[0]);
        }
    }, [])

    const [students, setStudents] = useState([]);// Todos los estudiantes - opciones del select
    const [student, setStudent] = useState({});// objeto filtrado de 1 estudiante
    const { birthDate, fatherPhone, id_student, letter, motherPhone, name, surname } = student;


    console.log('render');

    // Pintamos ficha alumno seleccionado
    const handleChange = e => {
        const filterStudents = students.filter((element) => element.id_student == e.target.value);
        setStudent(filterStudents[0]);
    };

    return (
        <div>
            {/* LLenamos el select */}
            <select name='select' onChange={handleChange}>
                {
                    students.map(({ name, surname, id_student }) => (
                        <option key={id_student} value={id_student}>{`${name} ${surname}`}</option>
                    ))
                }
            </select>

            <span>{fatherPhone}</span>
            <span>{motherPhone}</span>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{birthDate}</span>
            <span>{letter}</span>

        </div>
    )
}
