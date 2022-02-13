import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useFetch } from '../Hooks/useFetch'
import { URL_CRUD } from '../../settings';

export const Login = () => {

    const navigate = useNavigate();

    const initialState = {
        username: '',
        password: ''
    }

    const [form, setForm] = useState(initialState);
    const { username, password } = form;

    const [token, setToken] = useState(null);

    const hadlechange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    // Obtenemos token
    const handlesubmit = e => {
        e.preventDefault();
        // comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda
        if (username.trim().length > 0 && password.trim().length > 0) {
            console.log('LOGIN');
            //     {"username": "javier@garcia.com", "password": "123456"}
            const endPoint = 'login_check';
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }
            fetch(`${URL_CRUD}/${endPoint}`, options)
                .then(response => response.json())
                .then(data => {
                    // Cargamos token o mostramos mensaje error
                    (data.token) ? setToken(data) : console.log(data);
                });
        };
    };

    useEffect(() => { // Cuando obtenemos token cargamos usuario
        if (token) {
            console.log('entramos en useEfect');

            const endPoint = `user/${username}`;
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token.token
                }
            }

            const userData = fetch(`${URL_CRUD}/${endPoint}`, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setForm(initialState); // vaciamo formulario
                    localStorage.setItem('user', JSON.stringify(data)); // guardamos en localstorage
                    // navigate('/homepage', { // navegamos pagina inicio y cargamos usuario del localstorage
                    //     replace: true // reemplaza del historial
                    // });

                    window.location.replace("/homepage");
                });
        }
    }, [token])

    return (
        <div className="login_main">
            <h1>login</h1>
            <div className='wrapper'>
                <form onSubmit={handlesubmit} className='form'>
                    <label>
                        Email:
                        <input value={username} name='username' type='email' onChange={hadlechange} className='' placeholder='email' />
                    </label>
                    <label>
                        Password:
                        <input value={password} name="password" type='password' onChange={hadlechange} className='' placeholder='password' />
                    </label>
                    <input type="submit" className='button' value="Login" />
                </form>
            </div>
        </div>
    )
}
