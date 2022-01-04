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
        <div>
            {
                students.map(({ id_student, name, surname, yearBirth, monthBirth, dayBirt, phone1, phone2 }) => (
                    <div key={id_student}>
                        <span>{name}</span>
                        <span >{surname}</span>
                        <span >{yearBirth}</span>
                        <span >{monthBirth}</span>
                        <span >{dayBirt}</span>
                        <span >{phone1}</span>
                        <span >{phone2}</span>
                        <button name='button' type='submit' value={id_student} onClick={handleSubmit}>Eliminar</button >
                    </div>
                ))
            }
        </div>
    )
}
