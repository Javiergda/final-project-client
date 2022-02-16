import React, { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { useState } from 'react'
import { ManageStudents } from './ManageStudents'
import { ManageUsers } from './ManageUsers'
import { DeleteStudents } from './DeleteStudents'
import { URL_CRUD } from '../../settings';




export const Management = () => {

    const context = useContext(AuthContext);

    useEffect(() => {

        // Obtenemos todos los Estudiantes
        console.log('FETCH ALL STUDENTS ORDER BY DESC');

        const endPointStudent = `student`;
        const optionsStudent = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            },
        }
        fetch(`${URL_CRUD}/${endPointStudent}`, optionsStudent)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // setStudents(data);
            });


        const dataStudents = [
            {
                id: 10, name: 'Lucia', surname: 'Garcia', birth_date: '2021-04-27',
                phone1: '600111222', phone2: '600444555', letter: 'A', user_id: 1,
            },
            {
                id: 20, name: 'Julia', surname: 'Garcia', birth_date: '2021-04-27',
                phone1: '600111222', phone2: '600444555', letter: 'A', user_id: 1,
            }
        ];


        // Obtenemos todos los Usuarios
        console.log('FETCH ALL USERS ORDER BY DESC');

        const endPointUser = `user`;
        const optionsUser = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            },
        }
        fetch(`${URL_CRUD}/${endPointUser}`, optionsUser)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // setUsers(data);
            });

        const dataUsers = [
            {
                id: 1, name: 'Javier', surname: 'Garcia', email: 'javier@javier.com', password: '123456', userTipe: 1,
            },
            {
                id: 2, name: 'User2name', surname: 'User2surname', email: 'user2@user2.com', password: '123456', userTipe: 1,
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
        // context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
        <div className='management_main'>
            <ManageUsers />
            <ManageStudents users={users} students={students} setStudents={setStudents} />
            {/* <DeleteStudents students={students} /> */}

        </div>
        // :
        // <Navigate to='/login' />
    )
}
