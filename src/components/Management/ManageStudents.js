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
        email_user: '', // para buscarlo si existe en usuarios cuando lo insertemos en bd
        // emailFounded: '', // se enviara como email_user con el insert
        // emailFoundedName: '', // no se envia con el insert
    }

    const [form, setForm] = useState(initialState); // cambios en formulario y actualizaciones de FilterStudents
    const { name1, surname, letter, phone1, phone2, birth_date, email_user } = form;

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
        if (name1.trim().length > 0 && surname.trim().length > 0 && letter.trim().length > 0 && phone1.trim().length > 0
            && birth_date.trim().length > 0 && email_user.trim().length > 0) {

            // 2. buscamos que el email exista en algun usuario
            const found = users.find(element => element.email == email_user);
            console.log(found);
            if (found) {

                /// CRUD - POST
                // -- SQL --
                // INSERT INTO students(name,surname,user_id,birth_date,phone1,phone2,letter)
                // VALUES ($name1,$surname,found.email,$birthDate,$phone1,$phone2,$letter);

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

    // const handleSearch = e => {
    //     console.log('BUSCAR EMAIL PADRE');

    //     const found = users.find(element => element.email_user == email_user);

    //     if (found) { // si exite el email del tutor se asocia al alumno
    //         console.log(found);

    //         setForm({
    //             ...form,
    //             'emailFounded': email_user,
    //             'emailFoundedName': ` ${found.name} ${found.surname} - ${email_user}`
    //         });
    //     }
    // }


    return (
        <div className='manageStudents_main'>
            <h1>Nuevo alumno</h1>
            <FilterStudents students={students} setStudents={setStudents} setfilteredStudents={setfilteredStudents} />
            <DeleteStudents users={users} filteredStudents={filteredStudents} setForm={setForm} />
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        <span>Nombre:</span>
                        <input value={name1} name='name1' type='text' onChange={handleChange} className='' />
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
                    <input type="submit" className='button' value="Añadir estudiante" />
                </form>
            </div>
        </div>
    )
}
