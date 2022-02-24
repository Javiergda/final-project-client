import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../auth/authContext'
import { Course } from './Course'
import { StudentsList } from './StudentsList'
import { URL_CRUD } from '../../settings';
import { useFilterStudents } from '../Hooks/useFilterStudents'
import { useFetch } from '../Hooks/useFetch'


export const Teachers = () => {

    const context = useContext(AuthContext);

    const dateToday = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const initalStateFetchData = {
        endPoint: `student/current/${dateToday}`,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + context.token
            }
        }
    }
    const [fetchData, setfetchData] = useState(initalStateFetchData);

    const initialState = {
        age: 'age0',
        letter: 'A'
    }
    const [select, setSelect] = useState(initialState); // opciones del select edad y letra
    const { age, letter } = select;

    const [students, setStudents] = useState([]); //todos los estudiantes para filtrar en las opciones de Course
    const [filterStudents, setFilterStudents] = useState([]); // estudiantes filtrados que vienen de Course

    // 1. obtenemos datos estudiantes
    const allStudents = useFetch(fetchData); // hacemos fetch inicial

    // 2. mapeamos y filtramos estudiantes
    const [allStudentsMaped, allStudentsFiltered] = useFilterStudents(allStudents, letter, age);

    useEffect(() => {
        if (allStudents.length > 0) {
            setStudents(allStudentsMaped);
            setFilterStudents(allStudentsFiltered);
        }
    }, [allStudents])

    // useEffect(() => {

    //     const endPoint = `student/current/2022-02-19`;
    //     const options = {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + context.token
    //         },
    //     }
    //     fetch(`${URL_CRUD}/${endPoint}`, options)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data) {
    //                 console.log(data);
    //                 const dataStudents = data.map((element) => {
    //                     return ({
    //                         name: element.name,
    //                         surname: element.surname,
    //                         id_student: element.id,
    //                         letter: element.letter,
    //                         birth_date: element.birth_date || '',
    //                         breakfast: element.dailies[0]?.breakfast || '',
    //                         lunch1: element.dailies[0]?.lunch1 || '',
    //                         lunch2: element.dailies[0]?.lunch2 || '',
    //                         dessert: element.dailies[0]?.dessert || '',
    //                         snack: element.dailies[0]?.snack || '',
    //                         bottle: element.dailies[0]?.bottle || '',
    //                         diaper: element.dailies[0]?.diaper || '',
    //                         nap: element.dailies[0]?.nap || '',
    //                         message: element.dailies[0]?.message || '',
    //                         date: element.dailies[0]?.date || '',
    //                         absence: element.dailies[0]?.absence || '',
    //                     })
    //                 });
    //                 console.log(dataStudents);

    //                 setStudents(dataStudents);

    //                 const ageChild = age.slice(-1);// extrae 1,2,3 de age1 del hook select
    //                 let currentYear = dateToday.getFullYear();
    //                 // let birth_date = '2021-01-05';
    //                 // console.log(Number(birth_date.slice(0, 4)));

    //                 // de Enero a Septiembre se le quita 1 para que coincida con el curso escolar
    //                 if (dateToday.getMonth() + 1 < 9) {
    //                     currentYear = currentYear - 1;
    //                 }

    //                 // filtra objeto.letra == letra del select  &&  Año actual - año de nacimiento (extrae los 4 primeros xq es el año de date)
    //                 const filterDataStudents = dataStudents.filter((element) => element.letter == letter && (currentYear - Number(element.birth_date.slice(0, 4))) == ageChild);

    //                 console.log(filterDataStudents);
    //                 setFilterStudents(filterDataStudents);
    //             }
    //         });
    // }, [])

    // const dateToday = new Date();

    return (
        <div>
            <Course select={select} setSelect={setSelect} students={students} setFilterStudents={setFilterStudents} />
            <StudentsList filterStudents={filterStudents} setfetchData={setfetchData} />
        </div>
    )
}
