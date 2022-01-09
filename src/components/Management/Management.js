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
        // -- SQL --
        // SELECT * FROM students ORDER BY id_student DESC;
        const dataStudents = [
            {
                id_student: 10, name: 'Lucia', surname: 'Garcia', yearBirth: 2021, monthBirth: 4, dayBirth: 27, phone1: 600111222, phone2: 600444555, letter: 'A', email_user: 'javier@javier',
            },
            {
                id_student: 20, name: 'Julia', surname: 'Garcia', yearBirth: 2019, monthBirth: 3, dayBirth: 11, phone1: 600111222, phone2: 600444555, letter: 'A', email_user: 'javier@javier',
            }
        ];

        // -- SQL --
        // SELECT * FROM users ORDER BY id_user DESC;
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
            <div className='management_main'>
                <ManageUsers />
                <ManageStudents users={users} setStudents={setStudents} />
                <DeleteStudents students={students} />

            </div>
            :
            <Navigate to='/login' />
    )
}
