import React, { useEffect } from 'react'
import { useState } from 'react';
import { FilterUsers } from './FilterUsers';
import { DeleteUsers } from './DeleteUsers';
import { AuthContext } from '../../auth/authContext';
import { useContext } from 'react';
import { URL_CRUD } from '../../settings';

export const ManageUsers = ({ users, setUsers }) => {

    const context = useContext(AuthContext);

    useEffect(() => {
        setfilteredUsers(users);
    }, [users])
    // usuarios filtrados para componenete FilterStudents.js
    const [filteredUsers, setfilteredUsers] = useState([]);


    const initialState = {
        id: '',
        userName: '',
        surname: '',
        email: '',
        password: '',
        user_type: 2,
        button: 'Añadir usuario'
    }

    const [form, setForm] = useState(initialState);
    const { id, userName, surname, email, password, user_type, button } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (userName.trim().length > 0 && surname.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            console.log('NEW USER');

            if (id === '') {
                // cogemos valor de id de user
                console.log('insertamos');

                const endPoint = `user`;
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    },
                    body: JSON.stringify(form)
                }
                fetch(`${URL_CRUD}/${endPoint}`, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        // setUsers(data);
                    });
            }
            // si id vale algo estamos modificando
            else {
                console.log('modificamos');
                const endPoint = `user/${form.id}`;
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + context.token
                    },
                    body: JSON.stringify(form)
                }
                fetch(`${URL_CRUD}/${endPoint}`, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        // setUsers(data);
                    });
            }

            ///////////////////////////////
            //// obtenemos repuesta
            const responseUser = 'ok';
            if (responseUser = 'ok') {
                /// refrescamos donde haga falta!!!
                // CRUD - GET usuarios y refrescar para que se muestre el nuevo

            }
        } else {
            alert('Todos los campos son obligatorios ');
        };

    }

    const handleCancel = e => {
        setForm(initialState);
    }


    return (
        <div className='manageUsers_main'>
            <h1>Nuevo tutor</h1>
            <FilterUsers users={users} setfilteredUsers={setfilteredUsers} />
            <DeleteUsers users={users} filteredUsers={filteredUsers} setForm={setForm} />
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        <span>Nombre:</span>
                        <input value={userName} name='userName' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Apellidos:</span>
                        <input value={surname} name="surname" type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input value={email} name='email' type='mail' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input value={password} name='password' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Nivel de pago:</span>
                        <select name='user_type' value={user_type} onChange={handleChange}>
                            <option name='user_type' value={2}>Normal</option>
                            <option name='user_type' value={3}>Con camaras</option>
                        </select>
                    </label>
                    <input type="submit" className='button' value={button} />
                    <input type="button" className='button' value='Cancelar' onClick={handleCancel} />
                </form>
            </div>
        </div>
    )
}
