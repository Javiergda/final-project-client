import React from 'react'

export const DeleteStudents = ({ filteredStudents, setForm, users }) => {

    const handleUpdate = e => {
        e.preventDefault();

        const found = filteredStudents.find(element => element.id == e.target.value);
        if (found) {

            console.log(users);
            console.log(found.user_id);
            const found2 = users.find(element => element.id == found.user_id);
            console.log(found2);

            const state = {
                name1: found.name,
                surname: found.surname,
                letter: found.letter,
                phone1: found.phone1,
                phone2: found.phone2,
                birth_date: found.birth_date,
                email_user: found2.email
                // emailFounded: found.email_user,
                // emailFoundedName: ` ${found.name} ${found.surname} - ${found.email_user}`,
            }
            setForm(state); // Actualiza formulario de ManageStudents con estudiante seleccionado
        }
    }

    const handleDelete = (e) => {


        console.log(`Se borrara el alumno y todas las referencias a los padres`);
        console.log(`Delete from STUDENTS WHERE ID=${e.target.value}`);
        /// CRUD - POST
        // -- SQL --
        // DELETE FROM students
        // WHERE id = $e.target.value
        //
        // --> y actualizar datos


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
                    <div className='date'><span>Fecha nac.</span></div>
                    <div className='phone'><span>Telefono1</span></div>
                    <div className='phone'><span>Telefono2</span></div>
                </div>
                {
                    filteredStudents.map(({ id, name, surname, birth_date, phone1, phone2 }) => (
                        <div key={id} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='date'><span>{birth_date}</span></div>
                            <div className='phone'><span>{phone1}</span></div>
                            <div className='phone'><span>{phone2}</span></div>
                            <div className='button'><button name='button' type='submit' value={id} onClick={handleUpdate}>Modificar</button ></div>
                            <div className='button'><button name='button2' type='submit' value={id} onClick={handleDelete}>Borrar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}