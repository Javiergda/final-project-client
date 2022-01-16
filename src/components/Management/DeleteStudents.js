import React from 'react'

export const DeleteStudents = ({ filteredStudents, setForm }) => {

    const handleUpdate = e => {
        e.preventDefault();

        const found = filteredStudents.find(element => element.id_student == e.target.value);
        if (found) {
            const state = {
                name1: found.name,
                surname: found.surname,
                letter: found.letter,
                phone1: found.phone1,
                phone2: found.phone2,
                birth_date: found.birth_date,
                email_user: found.email_user,
                emailFounded: found.email_user,
                emailFoundedName: ` ${found.name} ${found.surname} - ${found.email_user}`,
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
        // WHERE id_student = $e.target.value
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
                    filteredStudents.map(({ id_student, name, surname, birth_date, phone1, phone2 }) => (
                        <div key={id_student} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='date'><span>{birth_date}</span></div>
                            <div className='phone'><span>{phone1}</span></div>
                            <div className='phone'><span>{phone2}</span></div>
                            <div className='button'><button name='button' type='submit' value={id_student} onClick={handleUpdate}>Modificar</button ></div>
                            <div className='button'><button name='button2' type='submit' value={id_student} onClick={handleDelete}>Borrar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}