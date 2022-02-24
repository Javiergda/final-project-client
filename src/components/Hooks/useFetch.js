import React, { useEffect, useState } from 'react';
import { URL_CRUD } from '../../settings';

export const useFetch = ({ endPoint, options }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('hook useFetch cargado');
        if (endPoint) {
            fetch(`${URL_CRUD}/${endPoint}`, options)
                .then(response => response.json())
                .then(response => {
                    setData(response)
                    console.log(response);
                })
        }
    }, [endPoint, options])

    return data;
};