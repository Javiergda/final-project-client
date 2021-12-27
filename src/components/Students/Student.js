import React from 'react';

export const Student = ({ students, student, setStudent }) => {

    const { birthDate, fatherPhone, id_student, letter, motherPhone, name, surname } = student;

    // Pintamos ficha alumno seleccionado
    const handleChange = e => {
        const filterStudents = students.filter((element) => element.id_student == e.target.value);
        setStudent(filterStudents[0]);
    };

    return (
        <div>
            {/* LLenamos el select */}
            <select name='select' onChange={handleChange}>
                {
                    students.map(({ name, surname, id_student }) => (
                        <option key={id_student} value={id_student}>{`${name} ${surname}`}</option>
                    ))
                }
            </select>

            <span>{fatherPhone}</span>
            <span>{motherPhone}</span>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{birthDate}</span>
            <span>{letter}</span>

        </div>
    )
}
