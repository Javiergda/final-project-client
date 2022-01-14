import React from 'react'

export const DeleteStudents = ({ students }) => {

    const handleSubmit = e => {
        e.preventDefault();

        console.log(`Se borrara el alumno y todas las referencias a los padres`);
        console.log(`Delete from USE-STU WHERE ID=${e.target.value}`);
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
            <div className='title'>
                <h3><span>Eliminar alumno</span></h3>
            </div>

            <div className='wrapper'>
                <div className='wrapper2 title'>
                    <div className='name'><span >Telefono</span></div>
                    <div className='surname'><span>Apellidos</span></div>
                    <div className='date'><span>Fecha nac.</span></div>
                    {/* <div className='date'><span>Mes</span></div>
                    <div className='date'><span>Dia</span></div> */}
                    <div className='phone'><span>Telefono1</span></div>
                    <div className='phone'><span>Telefono2</span></div>
                </div>
                {
                    students.map(({ id_student, name, surname, birth_date, phone1, phone2 }) => (
                        <div key={id_student} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='date'><span>{birth_date}</span></div>
                            {/* <div className='date'><span>{monthBirth}</span></div>
                            <div className='date'><span>{dayBirt}</span></div> */}
                            <div className='phone'><span>{phone1}</span></div>
                            <div className='phone'><span>{phone2}</span></div>
                            <div className='button'><button name='button' type='submit' value={id_student} onClick={handleSubmit}>Eliminar</button ></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}