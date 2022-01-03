import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {



    const navigate = useNavigate();



    const initialState = {
        email: '',
        password: ''
    }

    const [form, setForm] = useState(initialState);
    const { email, password } = form;

    const hadlechange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = e => {
        e.preventDefault();
        // comprobamos que no este vacio quitandole espacios en blanco a derecha e izquierda

        // if (email.trim().length > 0 && password.trim().length > 0) {
        console.log('LOGIN');

        /// CRUD - POST - Enviamos usuario/email para chequearlo
        const checkUser = email + password;
        ///////////////////////////////
        //// obtenemos repuesta
        const user = 'ok';

        if (user == 'ok') {
            setForm(initialState);

            navigate('/homepage', {
                replace: true // reemplaza del historial
            }
            );

        }


        // }





    };

    return (
        <div>
            <h1>login</h1>


            <div className="cointainerLista" >
                <form onSubmit={handlesubmit}>
                    <input value={email} name='email' type='email' onChange={hadlechange} className='' placeholder='email' />
                    <input value={password} name="password" type='password' onChange={hadlechange} className='' placeholder='password' />

                    <br /><input type="submit" className='' value="Login" />
                </form>
            </div>
        </div>
    )
}
