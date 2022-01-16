import React from 'react'
import { useState, useEffect } from 'react';
import { FilterStudents } from './FilterStudents';
import { DeleteStudents } from './DeleteStudents';


export const ManageStudents = ({ users, students, setStudents }) => {

    useEffect(() => {

        setfilteredStudents(students);
    }, [students])
    // usuarios filtrados para componenete FilterStudents.js
    const [filteredStudents, setfilteredStudents] = useState([]);


    console.log(students);
    console.log(filteredStudents);



    const initialState = {
        name1: '',
        surname: '',
        letter: 'A',
        phone1: '',
        phone2: '',
        birth_date: '',
        email_user: '', // no se envia con el insert x si lo cambia despues de asociarlo
        emailFounded: '', // se enviara como email_user con el insert
        emailFoundedName: '', // no se envia con el insert
    }

    const [form, setForm] = useState(initialState); // cambios en formulario y actualizaciones de FilterStudents
    const { name1, surname, letter, phone1, phone2, birth_date, email_user, emailFounded, emailFoundedName } = form;

    const handleChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // 1. Comprobacion: comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (name1.trim().length > 0 && surname.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0 && birth_date.trim().length > 0 && email_user.trim().length > 0) {
            console.log('NEW USER');
            if (emailFounded) { // 2. Comprobacion: si esta asociado a email de tutor con alumno

                /// CRUD - POST
                // -- SQL --
                // INSERT INTO students(name,surname,email_user,birth_date,phone1,phone2,letter)
                // VALUES ($name1,$surname,$emailFounded,$birthDate,$phone1,$phone2,$letter);

                //// obtenemos repuesta
                const responseUser = 'ok';
                if (responseUser == 'ok') {

                    /// refrescamos donde haga falta!!!
                    setForm(initialState); // CRUD - GET estudiantes y refrescar para que se muestre el nuevo
                    // setStudents([]);

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
            <FilterStudents students={students} setStudents={setStudents} setfilteredStudents={setfilteredStudents} />
            <DeleteStudents filteredStudents={filteredStudents} setForm={setForm} />
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        Nombre:
                        <input value={name1} name='name1' type='text' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Apellidos:
                        <input value={surname} name="surname" type='text' onChange={handleChange} className='' />
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
                        <input value={birth_date} name='birth_date' type='date' onChange={handleChange} className='' />
                    </label>
                    <label>
                        Email tutor:
                        <input value={email_user} name='email_user' type='text' onChange={handleChange} className='' />
                    </label>
                    <input type='button' className='buttonSearch' value="Asociar email" onClick={handleSearch} />
                    <label>
                        Tutor:
                        <span name='emailFounded' className='textSearch'>{emailFoundedName}</span>
                    </label>
                    <input type="submit" className='button' value="Añadir estudiante" />
                </form>
            </div>
        </div>
    )
}
