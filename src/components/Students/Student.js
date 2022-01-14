import React from 'react';

export const Student = ({ students, student, setStudent }) => {

    const { birth_date, phone1, id_student, letter, phone2, name, surname } = student;

    // Pintamos ficha alumno seleccionado
    const handleChange = e => {
        const filterStudents = students.filter((element) => element.id_student == e.target.value);
        setStudent(filterStudents[0]);
    };

    return (
        <div className='student_main'>
            <div className='wrapper'>
                <div className='box1'>
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
                </div>

                <div className='box2'>
                    <span>Telefono 1: {phone1}</span>
                    <span>Telefono 2: {phone2}</span>
                    {/* <span>Fecha nacimiento: {birth_date}</span> */}
                </div>
            </div>
        </div>
    )
}
