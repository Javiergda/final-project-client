import React from 'react'
import { URL_CRUD } from '../../settings';
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'

export const DeleteUsers = ({ filteredUsers, setForm, users }) => {

    const context = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();

        // selecciona registro usuario
        const userFounded = filteredUsers.find(element => element.id == e.target.value);
        if (userFounded) {

            console.log(userFounded);

            const state = {
                id: userFounded.id,
                userName: userFounded.name,
                surname: userFounded.surname,
                email: userFounded.email,
                password: userFounded.password,
                user_type: userFounded.user_type,
                button: 'Guardar modificacion'
            }
            setForm(state); // Actualiza formulario de ManageUsers con usuario seleccionado
        }
    }

    const handleDelete = (e) => {

        console.log(`Delete from USERS WHERE ID=${e.target.value}`);

        console.log('eliminamos');
        const endPointUser = `user/${e.target.value}`;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            },
        }
        fetch(`${URL_CRUD}/${endPointUser}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // setUsers(data);
            });
    }

    return (
        <div className='delete_main'>
            {/* <div className='title'>
                <h3><span>Eliminar alumno</span></h3>
            </div> */}

            <div className='wrapper'>
                <div className='wrapper2 title'>
                    <div className='name'><span >Nombre</span></div>
                    <div className='surname'><span>Apellidos</span></div>
                    <div className='date'><span>Email</span></div>
                    <div className='phone'><span>Tipo usuario</span></div>
                </div>
                {
                    filteredUsers.map(({ id, name, surname, email, user_type }) => (
                        <div key={id} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='email'><span>{email}</span></div>
                            <div className='user_type'><span>{user_type}</span></div>

                            <div className='button'><button name='button' type='submit' value={id} onClick={handleUpdate}>Modificar</button ></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleDelete}>Borrar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}