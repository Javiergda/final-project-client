import React, { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { useState } from 'react'
import { ManageStudents } from './ManageStudents'
import { ManageUsers } from './ManageUsers'
import { DeleteStudents } from './DeleteStudents'
import { URL_CRUD } from '../../settings';
import { useFetch } from '../Hooks/useFetch'

export const Management = () => {

    const context = useContext(AuthContext);

    const [fetchDataStudents, setfetchDataStudents] = useState({
        endPoint: `student`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            }
        }
    });

    const [fetchDataUsers, setfetchDataUsers] = useState({
        endPoint: `user`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            }
        }
    });

    // 1. obtenemos datos estudiantes
    const allStudents = useFetch(fetchDataStudents);

    // 2. obtenemos datos usuarios
    const allUsers = useFetch(fetchDataUsers);

    // 3. cargamos datos estudiantes y usuarios
    useEffect(() => {
        allStudents.length > 0 && setStudents(allStudents);
    }, [allStudents])

    useEffect(() => {
        allUsers.length > 0 && setUsers(allUsers);
    }, [allUsers])

    const [students, setStudents] = useState([]); // todos los estudiantes
    const [users, setUsers] = useState([]); // todos los usuarios

    const [screen, setScreen] = useState('Users'); // selector usuarios/estudiantes

    const handleClick = e => {
        setScreen(e.target.value)
    }

    return (
        <div className='management_main'>
            {/* <button name='button' className='button' value='Users' onClick={handleClick} >Tutores</button>
            <button name='button' className='button' value='Students' onClick={handleClick} >Alumnos</button>

            {
                screen === 'Users' ?
                    <ManageUsers />
                    : <ManageStudents users={users} students={students} setStudents={setStudents} />
            } */}

            <ManageUsers users={users} setUsers={setUsers} setfetchDataUsers={setfetchDataUsers} />
            <ManageStudents users={users} students={students} setStudents={setStudents} setfetchDataStudents={setfetchDataStudents} />
        </div>
    )
}