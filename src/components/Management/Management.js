import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../auth/authContext'
import { ManageStudents } from './ManageStudents'
import { ManageUsers } from './ManageUsers'
import { DeleteStudents } from './DeleteStudents'



export const Management = () => {

    const context = useContext(AuthContext);


    useEffect(() => {
        ////////// CRUD - GET
        // tabla usuario + usua-alum + aflumnos (join)
        // select * where id_usuario(usuarios)==id_usuario(usua-alumn) and id_alumno(usuarios)==id_alumno(alumnos) 

        // resultado TODOS alumnos con su respectivo padre de la bd

        const dataUsersStudents = [
            {
                name: 'Javier', surname: 'Garcia', email: 'javier@javier.com', password: '123456', userTipe: 1,
                id_usu_stu: 1, id_user: 1, id_student: 10,
                name: 'Lucia', surname: 'Garcia', yearBirth: 2021, monthBirth: 4, dayBirth: 27, phone1: 600111222, phone2: 600444555, letter: 'A',
            },
            {
                name: 'Javier', surname: 'Garcia', email: 'javier@javier.com', password: '123456', userTipe: 1,
                id_usu_stu: 2, id_user: 1, id_student: 20,
                name: 'Julia', surname: 'Garcia', yearBirth: 2019, monthBirth: 3, dayBirth: 11, phone1: 600111222, phone2: 600444555, letter: 'A',
            }
        ];
        const dataStudents = [
            {
                id_student: 10, name: 'Lucia', surname: 'Garcia', yearBirth: 2021, monthBirth: 4, dayBirth: 27, phone1: 600111222, phone2: 600444555, letter: 'A', email_user: 'javier@javier',
            },
            {
                id_student: 20, name: 'Julia', surname: 'Garcia', yearBirth: 2019, monthBirth: 3, dayBirth: 11, phone1: 600111222, phone2: 600444555, letter: 'A', email_user: 'javier@javier',
            }
        ];
        const dataUsers = [
            {
                name: 'Javier', surname: 'Garcia', email_user: 'javier@javier.com', password: '123456', userTipe: 1,
            },
            {
                name: 'Javier', surname: 'Garcia', email_user: 'javier@javier.com', password: '123456', userTipe: 1,
            }
        ];
        if (dataStudents) {
            setStudents(dataStudents);
        }
        if (dataStudents) {
            setUsers(dataUsers);
        }


    }, [])


    const [students, setStudents] = useState([]);
    const [users, setUsers] = useState([]);

    return (
        context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
            <div>
                <ManageUsers />
                <ManageStudents users={users} setStudents={setStudents} />
                <DeleteStudents students={students} />

            </div>
            :
            <Navigate to='/login' />
    )
}
