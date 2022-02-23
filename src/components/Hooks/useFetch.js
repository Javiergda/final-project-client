import React, { useEffect, useState } from 'react';
import { URL_CRUD } from '../../settings';

export const useFetch = ({ endPoint, options, body }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('hook useFetch cargado');

        fetch(`${URL_CRUD}/${endPoint}`, options)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
    }, [endPoint])

    return data;
};