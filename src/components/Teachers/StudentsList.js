import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const StudentsList = ({ filterStudents }) => {

    console.log(filterStudents);

    // Crea dinamicamente array de indexs para controlas los cambios de inputs
    useEffect(() => {
        const filterMsn = filterStudents.map((element) => {
            return (
                element.message
            )
        });
        setMsn(filterMsn);
    }, [filterStudents])

    const [msn, setMsn] = useState([]);

    // controlar los cambios de los inputs creados dinamicamente
    const handleMsn = e => {
        setMsn({
            ...msn,
            [e.target.name]: e.target.value
        });
    };

    const handleChange = e => {
        if (e.target.id) {
            let nameItem = e.target.name;
            let valueItem = e.target.value;
            // cambiamos al contrario el valor de falta
            if (e.target.name == 'absence') {
                e.target.value == 'a' ? valueItem = '0' : valueItem = 'a';
            }
            // cambiamos el valor de nameItem xq viene de className
            if (e.target.className == 'message') {
                nameItem = e.target.className;
            }

            // 2. CRUD POST 
            console.log(`instert into table Diario(${nameItem}) values(${valueItem}) where id_usuario=${e.target.id}`);
            // a. Upade ---> si repuesta -> no existe entonces ->
            // b. Create
            // Recibimos dataStudents e inicializamos de nuevo el componente.


            // CRUD de nuevo y ...... (hay que pasar props de Teachers)


            // if (dataStudents) {

            //     setStudents(dataStudents);

            //     const ageChild = age.slice(-1);// extrae 1,2,3 de age1
            //     const currentYear = dateToday.getFullYear();   
            //     // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar
            //     if (dateToday.getMonth() + 1 < 9) {
            //         currentYear = currentYear - 1;
            //     }

            //     // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento
            //     const filter = dataStudents.filter((element) => element.letter == letter && (currentYear - element.yearBirth) == ageChild);
            //     setFilterStudents(filter);
            // }
        }
    };

    return (
        <div className='studentList_main'>
            {
                filterStudents.map(({ name, surname, id_student, breakfast, lunch1, lunch2, dessert, snack, bottle, diaper, nap, message, date, absence }, index) => {
                    return (

                        <div key={id_student} className='wrapper'>
                            <span>{name + ' ' + surname}</span>
                            <div className='boxStudent'>
                                <div className='title'>
                                    <h5>Desayuno</h5>
                                    <div className={breakfast + ' selector'} onClick={handleChange} >
                                        <div><button name='breakfast' value='1' id={id_student}>N</button></div>
                                        <div><button name='breakfast' value='2' id={id_student}>R</button></div>
                                        <div><button name='breakfast' value='3' id={id_student}>B</button></div>
                                        <div><button name='breakfast' value='4' id={id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Primero</h5>
                                    <div className={lunch1 + ' selector'} onClick={handleChange}>
                                        <div><button name='lunch1' value='1' id={id_student}>N</button></div>
                                        <div><button name='lunch1' value='2' id={id_student}>R</button></div>
                                        <div><button name='lunch1' value='3' id={id_student}>B</button></div>
                                        <div><button name='lunch1' value='4' id={id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Segundo</h5>
                                    <div className={lunch2 + ' selector'} onClick={handleChange}>
                                        <div><button name='lunch2' value='1' id={id_student}>N</button></div>
                                        <div><button name='lunch2' value='2' id={id_student}>R</button></div>
                                        <div><button name='lunch3' value='3' id={id_student}>B</button></div>
                                        <div><button name='lunch4' value='4' id={id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Postre</h5>
                                    <div className={dessert + ' selector'} onClick={handleChange}>
                                        <div><button name='dessert' value='1' id={id_student}>N</button></div>
                                        <div><button name='dessert' value='2' id={id_student}>R</button></div>
                                        <div><button name='dessert' value='3' id={id_student}>B</button></div>
                                        <div><button name='dessert' value='4' id={id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Merienda</h5>
                                    <div className={snack + ' selector'} onClick={handleChange}>
                                        <div><button name='snack' value='1' id={id_student}>N</button></div>
                                        <div><button name='snack' value='2' id={id_student}>R</button></div>
                                        <div><button name='snack' value='3' id={id_student}>B</button></div>
                                        <div><button name='snack' value='4' id={id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Biberon</h5>
                                    <div className={bottle + ' selector'} onClick={handleChange}>
                                        <div><button name='bottle' value='1' id={id_student}>1</button></div>
                                        <div><button name='bottle' value='2' id={id_student}>2</button></div>
                                        <div><button name='bottle' value='3' id={id_student}>3</button></div>
                                        <div><button name='bottle' value='4' id={id_student}>4</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Pañal</h5>
                                    <div className={diaper + ' selector'} onClick={handleChange}>
                                        <div><button name='diaper' value='1' id={id_student}>1</button></div>
                                        <div><button name='diaper' value='2' id={id_student}>2</button></div>
                                        <div><button name='diaper' value='3' id={id_student}>3</button></div>
                                        <div><button name='diaper' value='4' id={id_student}>4</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Siesta</h5>
                                    <div className={nap + ' selector'} onClick={handleChange}>
                                        <div><button name='nap' value='1' id={id_student}>No</button></div>
                                        <div><button name='nap' value='2' id={id_student}>1/2</button></div>
                                        <div><button name='nap' value='3' id={id_student}>1</button></div>
                                        <div><button name='nap' value='4' id={id_student}>+1</button></div>
                                    </div>
                                </div>
                                <div className='title absence' >
                                    <h5 >Falta</h5>
                                    <div className={absence + ' selector'} onClick={handleChange}>
                                        <div><button name='absence' value={absence} id={id_student} id='absence' >Falta</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className='message'>
                                <h5>Mensaje:</h5>
                                {/* Se usa defaultValue xq es un elemento no controlado. Funciona igual que value */}
                                <input type='text' name={index} defaultValue={msn[index]} id={id_student} className='message' onChange={handleMsn} onBlur={handleChange} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
