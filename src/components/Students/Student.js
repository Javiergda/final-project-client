import React, { useEffect } from 'react';

export const Student = ({ students, student, setStudent, setDailyStudent }) => {

    // estudiante seleccionado
    const { birth_date, phone1, id, letter, phone2, name, surname, dailies = {} } = student;

    // guardamos fechas del estudiante seleccionado
    const studentDates = Object.entries(dailies).map(([key, value], index) => {
        return ({
            key,
            value
        })
    })

    useEffect(() => {
        // rellenamos Daily
        if (studentDates.length > 0) {
            setDailyStudent(studentDates[0].value)
        }
    }, [student])

    // Cargamos select de fechas
    const handleChange = e => {
        const filterStudents = students.filter((element) => element.id == e.target.value);
        setStudent(filterStudents[0]);
    };

    // Pintamos ficha alumno seleccionado
    const handleChangeDate = e => {
        const filterDailyStudents = studentDates.filter((element) => element.key == e.target.value);
        setDailyStudent(filterDailyStudents[0].value)
    }

    return (
        <div className='student_main'>
            <div className='wrapper'>
                <div className='box1'>
                    <h4>Alumno: </h4>
                    {/* LLenamos el select de estudiantes*/}
                    <select name='select' onChange={handleChange}>
                        {
                            students.map(({ name, surname, id }) => (
                                <option key={id} value={id}>{`${name} ${surname}`}</option>
                            ))
                        }
                    </select>
                    <span>Clase: {letter}</span>
                </div>
                {/* <div className='box2'>
                    <span>Telefono 1: {phone1}</span>
                    <span>Telefono 2: {phone2}</span>
                </div> */}

                <div className='box1'>
                    <h4>Dia: </h4>
                    {/* LLenamos el select de fechas*/}
                    <select name='select2' onChange={handleChangeDate}>
                        {
                            Object.entries(dailies).map(([key, value], index) => {
                                return (
                                    <option key={index} value={key}>{key}</option>
                                )
                            })
                        }
                    </select>

                </div>

            </div>
        </div >
    )
}
