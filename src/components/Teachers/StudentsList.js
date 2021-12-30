import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const StudentsList = ({ filterStudents }) => {

    console.log(filterStudents);

    const handleChange = e => {
        if (e.target.id) {
            // cambiamos el valor de falta
            let value = e.target.value;
            if (e.target.name == 'absence') {
                e.target.value == 'a' ? value = '0' : value = 'a';
            }

            // 2. CRUD POST 
            console.log(`instert into table Diario(${e.target.name}) values(${value}) where id_usuario=${e.target.id}`);
            // a. Upade ---> si repuesta -> no existe entonces ->
            // b. Create
        }

    };

    return (
        <div className='studentList_main'>
            <button name='botoncito11111'>N</button>
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
                                <div className='title'>
                                    <h5>Falta</h5>
                                    <div className={absence + ' selector'} onClick={handleChange}>
                                        <div><button name='absence' value={absence} id={id_student}>Falta</button></div>
                                    </div>
                                </div>
                            </div>

                            <div className='message'>
                                <h5>Mensaje:</h5>

                                <input type='text' value={message} id={id_student} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
