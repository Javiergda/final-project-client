import React from 'react'
import { useState } from 'react';


export const ManageStudents = ({ users, setStudents }) => {


    const initialState = {
        name1: '',
        lastName: '',
        letter: 'A',
        phone1: '',
        phone2: '',
        yearBirth: '',
        monthBirth: '',
        dayBirt: '',
        email_user: '', // no se envia con el insert x si lo cambia despues de asociarlo
        emailFounded: '', // se enviara como email_user con el insert
        emailFoundedName: '', // no se envia con el insert
    }

    const [form, setForm] = useState(initialState);
    const { name1, lastName, letter, phone1, phone2, yearBirth, monthBirth, dayBirth, email_user, emailFounded, emailFoundedName } = form;

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // 1. Comprobacion: comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (name1.trim().length > 0 && lastName.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0 && yearBirth.trim().length > 0 && monthBirth.trim().length > 0 && dayBirth.trim().length > 0 && email_user.trim().length > 0) {
            console.log('NEW USER');
            if (emailFounded) { // 2. Comprobacion: si esta asociado a email de tutor con alumno

                /// CRUD - POST - Enviamos nuevo usuario insert into alumnos values
                /// name1, lastName, letter, phone1, phone2, email
                ///////////////////////////////
                //// obtenemos repuesta
                const responseUser = 'ok';
                if (responseUser = 'ok') {

                    /// refrescamos donde haga falta!!!
                    setForm(initialState); // CRUD - GET estudiantes y refrescar para que se muestre el nuevo
                    setStudents([]);

                }
            }


        } else {
            alert('¡Todos los campos son obligatorios!')
        };

    }

    const handleSearch = e => {
        console.log('BUSCAR EMAIL PADRE');

        const found = users.find(element => element.email_user == email_user);


        if (found) { // si exite el email del tutor se asocia al alumno
            console.log(found);

            setForm({
                ...form,
                'emailFounded': email_user,
                'emailFoundedName': ` ${found.name} ${found.surname} - ${email_user}`
            });
        }
    }


    return (
        <div className='manageStudents_main'>
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
                        <input value={phone1} name='phone1' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Telefono2:
                        <input value={phone2} name='phone2' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Año de nacimiento:
                        <input value={yearBirth} name='year' type='number' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Mes:
                        <input value={monthBirth} name='month' type='number' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Dia:
                        <input value={dayBirth} name='day' type='number' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Email tutor:
                        <input value={email_user} name='email_user' type='text' onChange={handleChange} className='' />
                    </label>

                    <input type='button' className='buttonSearch' value="Asociar email" onClick={handleSearch} />


                    <label>
                        Tutor:
                        <span name='emailFounded'>{emailFoundedName}</span>



                    </label>







                    <input type="submit" className='button' value="newStudent" />
                </form>
            </div>
        </div>
    )
}
