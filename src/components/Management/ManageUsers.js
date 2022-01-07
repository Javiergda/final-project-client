import React from 'react'
import { useState } from 'react';

export const ManageUsers = () => {
    const initialState = {
        name1: '',
        lastName: '',
        email: '',
        password: '',
        userLevel: 2
    }

    const [form, setForm] = useState(initialState);
    const { name1, lastName, email, password, userLevel } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (name1.trim().length > 0 && lastName.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0) {
            console.log('NEW USER');

            /// CRUD - POST - Enviamos nuevo usuario insert into alumnos values
            /// name1, lastName, letter, phone1, phone2, email
            ///////////////////////////////
            //// obtenemos repuesta
            const responseUser = 'ok';
            if (responseUser = 'ok') {
                /// refrescamos donde haga falta!!!
                // CRUD - GET usuarios y refrescar para que se muestre el nuevo

            }
        } else {
            alert('Todos los campos son obligatorios menos telefono 2')
        };

    }



    return (
        <div className='manageUsers_main'>
            <h1>Nuevo tutor</h1>

            <div className='wrapper'>

                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        Nombre:
                        <input value={name1} name='name1' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Apellidos:
                        <input value={lastName} name="lastName" type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Email:
                        <input value={email} name='email' type='mail' onChange={handleChange} className='' />
                    </label>

                    <label>
                        Password:
                        <input value={password} name='password' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Nivel de pago:
                        <select name='userLevel' value={userLevel} onChange={handleChange}>
                            <option name='userLevel' value={2}>Normal</option>
                            <option name='userLevel' value={3}>Con camaras</option>
                        </select>
                    </label>


                    <input type="submit" className='button' value="newStudent" />
                </form>
            </div>
        </div>
    )
}
