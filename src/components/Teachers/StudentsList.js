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
        console.log(e.target);
        if (e.target.id) {
            let nameItem = e.target.name;
            let valueItem = e.target.value;
            let idItem = e.target.id;
            idItem = idItem.slice(2);
            // cambiamos al contrario el valor de falta
            if (e.target.name == 'absence') {
                e.target.value == 'a' ? valueItem = '0' : valueItem = 'a';
            }
            // cambiamos el valor de nameItem xq viene de className
            if (e.target.className == 'message') {
                nameItem = e.target.className;
            }

            // 2. CRUD POST 
            console.log(`instert into table Diario(${nameItem}) values(${valueItem}) where id_usuario=${idItem}`);
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

                        <div key={id_student} className='wrapper' onClick={handleChange}>
                            <span>{name + ' ' + surname}</span>
                            <div className='boxStudent'>
                                <div className='title'>
                                    <h5>Desayuno</h5>
                                    <div className={breakfast + ' selector'} >
                                        <div><button name='breakfast' value='a' id={'aa' + id_student}>N</button></div>
                                        <div><button name='breakfast' value='b' id={'ab' + id_student}>R</button></div>
                                        <div><button name='breakfast' value='c' id={'ac' + id_student}>B</button></div>
                                        <div><button name='breakfast' value='d' id={'ad' + id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Primero</h5>
                                    <div className={lunch1 + ' selector'} >
                                        <div><button name='lunch1' value='a' id={'ae' + id_student}>N</button></div>
                                        <div><button name='lunch1' value='b' id={'af' + id_student}>R</button></div>
                                        <div><button name='lunch1' value='c' id={'ag' + id_student}>B</button></div>
                                        <div><button name='lunch1' value='d' id={'ah' + id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Segundo</h5>
                                    <div className={lunch2 + ' selector'} >
                                        <div><button name='lunch2' value='a' id={'ai' + id_student}>N</button></div>
                                        <div><button name='lunch2' value='b' id={'aj' + id_student}>R</button></div>
                                        <div><button name='lunch3' value='c' id={'ak' + id_student}>B</button></div>
                                        <div><button name='lunch4' value='d' id={'al' + id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Postre</h5>
                                    <div className={dessert + ' selector'} >
                                        <div><button name='dessert' value='a' id={'am' + id_student}>N</button></div>
                                        <div><button name='dessert' value='b' id={'an' + id_student}>R</button></div>
                                        <div><button name='dessert' value='c' id={'ao' + id_student}>B</button></div>
                                        <div><button name='dessert' value='d' id={'ap' + id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Merienda</h5>
                                    <div className={snack + ' selector'} >
                                        <div><button name='snack' value='a' id={'aq' + id_student}>N</button></div>
                                        <div><button name='snack' value='b' id={'ar' + id_student}>R</button></div>
                                        <div><button name='snack' value='c' id={'as' + id_student}>B</button></div>
                                        <div><button name='snack' value='d' id={'at' + id_student}>T</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Biberon</h5>
                                    <div className={bottle + ' selector'} >
                                        <div><button name='bottle' value='a' id={'au' + id_student}>1</button></div>
                                        <div><button name='bottle' value='b' id={'av' + id_student}>2</button></div>
                                        <div><button name='bottle' value='c' id={'aw' + id_student}>3</button></div>
                                        <div><button name='bottle' value='d' id={'ax' + id_student}>4</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Pañal</h5>
                                    <div className={diaper + ' selector'} >
                                        <div><button name='diaper' value='a' id={'ay' + id_student}>1</button></div>
                                        <div><button name='diaper' value='b' id={'az' + id_student}>2</button></div>
                                        <div><button name='diaper' value='c' id={'ba' + id_student}>3</button></div>
                                        <div><button name='diaper' value='d' id={'bb' + id_student}>4</button></div>
                                    </div>
                                </div>
                                <div className='title'>
                                    <h5>Siesta</h5>
                                    <div className={nap + ' selector'} >
                                        <div><button name='nap' value='a' id={'bc' + id_student}>No</button></div>
                                        <div><button name='nap' value='b' id={'bd' + id_student}>1/2</button></div>
                                        <div><button name='nap' value='c' id={'be' + id_student}>1</button></div>
                                        <div><button name='nap' value='d' id={'bf' + id_student}>+1</button></div>
                                    </div>
                                </div>
                                <div className='title absence' >
                                    <h5 >Falta</h5>
                                    <div className={absence + ' selector'} >
                                        <div><button name='absence' value={absence} id={'bg' + id_student} id='absence' >Falta</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className='message'>
                                <h5>Mensaje:</h5>
                                {/* Se usa defaultValue xq es un elemento no controlado. Funciona igual que value */}
                                <input type='text' name={index} defaultValue={msn[index]} id={'bh' + id_student} className='message' onChange={handleMsn} onBlur={handleChange} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
