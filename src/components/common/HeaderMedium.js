import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.jpg'

export const HeaderMedium = ({ context }) => {

    const { email, user_type, logged } = context;

    return (
        <nav className='nav_medium'>
            <ul>
                <li>
                    <h3><span><img src={logo} height="30px" alt='logo' /></span></h3>
                </li>
                <NavLink className='nav-item' to="homepage">
                    <li>
                        <span>Inicio</span>
                    </li>
                </NavLink>
                <NavLink className={logged && user_type == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="alumno">
                    <li>
                        <span>Alumno</span>
                    </li>
                </NavLink>
                <NavLink className={logged && user_type == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="profesor">
                    <li>
                        <span>Profesor</span>
                    </li>
                </NavLink>
                <NavLink className={logged && user_type == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="administracion">
                    <li>
                        <span>Admnistracion</span>
                    </li>
                </NavLink>
                <NavLink className='nav-item' to="contacto">
                    <li>
                        <span>Contacto</span>
                    </li>
                </NavLink>
                <li className='empty'></li>
                <NavLink className='nav-item' to="login">
                    <li>
                        <span >{email ? email : 'Login'}</span>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}
