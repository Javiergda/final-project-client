import React, { useEffect } from 'react';
import { URL_CRUD } from '../../settings';

export const useFetch = (endPoint, queryMethod, queryData) => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`${URL_CRUD}/${endPoint}`, {
                    method: queryMethod,
                    body: JSON.stringify(queryData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const { data } = await resp.json();
                return data;
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, []);

};

// Llamar hook
// queryMethod='GET','POST','PUT','DELETE'
// endPoint='/create','/read','/update','/delete'

// useCRUD('insert','POST',{nombre:Javier,apellido:Garcia}); 