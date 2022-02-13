import React, { useEffect } from 'react';
import { URL_CRUD } from '../../settings';

export const useFetch = (url, options) => {


    // const options = {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(queryData)//datos desdes fuera queryData
    // }

    console.log('hook useFetch cargado');

    fetch(url, options)

        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                return data;
            } else {
                console.log(data);
                return false;
            }
        });


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const resp = await fetch(`${URL_CRUD}/${endPoint}`, {
    //                 method: queryMethod,
    //                 body: JSON.stringify(queryData),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             const { data } = await resp.json();
    //             return data;
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

};

// Llamar hook
// queryMethod='GET','POST','PUT','DELETE'
// endPoint='/create','/read','/update','/delete'

// useCRUD('insert','POST',{nombre:Javier,apellido:Garcia}); 