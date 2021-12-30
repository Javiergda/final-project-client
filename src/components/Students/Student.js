import React from 'react';

export const Student = ({ students, student, setStudent }) => {

    const { yearBirth, fatherPhone, id_student, letter, motherPhone, name, surname } = student;

    // Pintamos ficha alumno seleccionado
    const handleChange = e => {
        const filterStudents = students.filter((element) => element.id_student == e.target.value);
        setStudent(filterStudents[0]);
    };

    return (
        <div className='student_main'>
            <h4>Alumno: </h4>
            {/* LLenamos el select */}
            <select name='select' onChange={handleChange}>
                {
                    students.map(({ name, surname, id_student }) => (
                        <option key={id_student} value={id_student}>{`${name} ${surname}`}</option>
                    ))
                }
            </select>
            <span>Clase: {letter}</span>

            <span>Tfno padre: {fatherPhone}</span>
            <span>Tfno madre: {motherPhone}</span>
            <span>Fecha nacimiento: {yearBirth}</span>

        </div>
    )
}
