import React from 'react'
import { useState } from 'react';


export const ManageStudents = () => {

    const initialState = {
        name1: '',
        lastName: '',
        letter: 'A',
        phone1: '',
        phone2: '',
        email: '',
    }

    const [form, setForm] = useState(initialState);
    const { name1, lastName, letter, phone1, phone2, email } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (name1.trim().length > 0 && lastName.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0 && email.trim().length > 0) {
            console.log('NEW USER');

            /// CRUD - POST - Enviamos nuevo usuario insert into alumnos values
            /// name1, lastName, letter, phone1, phone2, email
            ///////////////////////////////
            //// obtenemos repuesta
            const responseUser = 'ok';
            if (responseUser = 'ok') {
                /// refrescamos donde haga falta!!!

            }
        } else {
            alert('Todos los campos son obligatorios menos telefono 2')
        };

    }



    return (
        <div>
            <h1>Nuevo alumno</h1>

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
                        Letra:
                        <select name='letter' value={letter} onChange={handleChange}>
                            <option name='letter' value='A'>A</option>
                            <option name='letter' value='B'>B</option>
                            <option name='letter' value='C'>C</option>
                        </select>
                    </label>
                    <label>
                        Telefono1:
                        <input value={phone1} name='phone2' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Telefono2:
                        <input value={phone2} name='phone2' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Año de nacimiento:
                        <input value={email} name='email' type='number' onChange={handleChange} className='' />
                    </label>

                    <input type="submit" className='button' value="newStudent" />
                </form>
            </div>
        </div>
    )
}
