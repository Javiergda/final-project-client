import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react';
import { FilterStudents } from './FilterStudents';
import { DeleteStudents } from './DeleteStudents';
import { AuthContext } from '../../auth/authContext'
import { URL_CRUD } from '../../settings';

export const ManageStudents = ({ users, students, setStudents }) => {

    const context = useContext(AuthContext);

    useEffect(() => {

        setfilteredStudents(students);
    }, [students])
    // usuarios filtrados para componenete FilterStudents.js
    const [filteredStudents, setfilteredStudents] = useState([]);


    console.log(students);
    console.log(filteredStudents);



    const initialState = {
        id: '', // vacio si es insertar - con valor para modificar
        user_id: '', // vacio si es intertar - con valor para modificar
        userName: '',
        surname: '',
        letter: 'A',
        phone1: '',
        phone2: '',
        birth_date: '',
        email_user: '', // para buscarlo si existe en usuarios cuando lo insertemos en bd
        button: 'Añadir estudiante'
    }

    const [form, setForm] = useState(initialState); // cambios en formulario y actualizaciones de FilterStudents
    const { id, userName, surname, letter, phone1, phone2, birth_date, email_user, button } = form;

    const handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        console.log('NEW USER');
        e.preventDefault();

        // 1. Comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (userName.trim().length > 0 && surname.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0
            && birth_date.trim().length > 0 && email_user.trim().length > 0) {

            // 2. buscamos que el email exista en algun usuario
            const foundUser = users.find(element => element.email == email_user);
            console.log(foundUser);
            console.log(form);
            if (foundUser) {

                /// CRUD - POST
                // -- SQL --
                // INSERT INTO students(name,surname,user_id,birth_date,phone1,phone2,letter)
                // VALUES ($userName,$surname,foundUser.email,$birthDate,$phone1,$phone2,$letter);

                // Asignamos id del usuario encontrado a user_id

                // si id='' estamos insertando
                if (id === '') {
                    // cogemos valor de id de user
                    console.log('insertamos');
                    const valuesForm = form;
                    valuesForm.user_id = foundUser.id;

                    const endPoint = `student`;
                    const options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + context.token
                        },
                        body: JSON.stringify(valuesForm)
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
                    const endPoint = `student/${form.id}`;
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


                //// obtenemos repuesta
                const responseUser = 'ok';
                if (responseUser == 'ok') {

                    /// refrescamos donde haga falta!!!
                    setForm(initialState); // CRUD - GET estudiantes y refrescar para que se muestre el nuevo
                    // setStudents([]);

                }
                // }
            } else {
                alert('¡El email debe existir en algun usuario!')
            }
        } else {
            alert('¡Todos los campos son obligatorios!')
        };
    }

    const handleCancel = e => {
        setForm(initialState);
    }

    return (
        <div className='manageStudents_main'>
            <h1>Nuevo alumno</h1>
            <FilterStudents students={students} setStudents={setStudents} setfilteredStudents={setfilteredStudents} />
            <DeleteStudents users={users} filteredStudents={filteredStudents} setForm={setForm} />
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
                        <span>Letra:</span>
                        <select name='letter' value={letter} onChange={handleChange}>
                            <option name='letter' value='A'>A</option>
                            <option name='letter' value='B'>B</option>
                            <option name='letter' value='C'>C</option>
                        </select>
                    </label>
                    <label>
                        <span>Telefono1:</span>
                        <input value={phone1} name='phone1' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Telefono2:</span>
                        <input value={phone2} name='phone2' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Nacimiento:</span>
                        <input value={birth_date} name='birth_date' type='date' onChange={handleChange} className='' />
                    </label>
                    <label>
                        <span>Email/Tutor:</span>
                        <input value={email_user} name='email_user' type='text' onChange={handleChange} className='' />
                    </label>
                    {/* <input type='button' className='buttonSearch' value="Asociar email" onClick={handleSearch} /> */}
                    {/* <label>
                        <span>Tutor:</span>
                        <span name='emailFounded' className='textSearch'>{emailFoundedName}</span>
                    </label> */}
                    <input type="submit" className='button' value={button} />
                    <input type="button" className='button' value='Cancelar' onClick={handleCancel} />
                </form>
            </div>
        </div>
    )
}
