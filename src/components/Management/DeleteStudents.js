import React from 'react'

export const DeleteStudents = ({ students }) => {

    const handleSubmit = e => {
        e.preventDefault();

        console.log(`Se borrara el alumno y todas las referencias a los padres`);
        console.log(`Delete from USE-STU WHERE ID=${e.target.value}`);
        console.log(`Delete from STUDENTS WHERE ID=${e.target.value}`);
        /// actualizar datos de nuevo
    }

    return (
        <div className='delete_main'>
            <div className='wrapper'>
                {
                    students.map(({ id_student, name, surname, yearBirth, monthBirth, dayBirt, phone1, phone2 }) => (
                        <div key={id_student} className='wrapper2'>
                            <div className='name'><span >{name}</span></div>
                            <div className='surname'><span>{surname}</span></div>
                            <div className='date'><span>{yearBirth}</span></div>
                            <div className='date'><span>{monthBirth}</span></div>
                            <div className='date'><span>{dayBirt}</span></div>
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