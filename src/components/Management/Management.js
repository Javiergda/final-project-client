import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { ManageStudents } from './ManageStudents'
import { ManageUsers } from './ManageUsers'


export const Management = () => {

    const context = useContext(AuthContext);

    return (
        context.logged && context.userTipe == 1 ? // ususario logeado y nivel 2
            <div>
                <ManageStudents />
                <ManageUsers />
            </div>
            :
            <Navigate to='/login' />
    )
}
