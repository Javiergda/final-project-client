import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import bird from '../../icons/bird.png'
import butterfly from '../../icons/butterfly.png'
import deer from '../../icons/deer.png'
import rabbit from '../../icons/rabbit.png'
import menu from '../../icons/menu.png'
import logo from '../../images/logo.jpg'
import { AuthContext } from '../../auth/authContext'

export const Header = () => {

    const context = useContext(AuthContext);

    const { email, userTipe, logged } = context;

    return (
        <header className="header__main">
            <nav className="nav_small">
                <div className='header_menu'>
                    <img src={logo} height="30px" alt='logo' />
                    <h3><span>Escuela infantil</span></h3>
                    <img src={menu} height="20px" alt='' />

                </div>
                <ul>
                    <NavLink className='nav-link' to="homepage" >
                        <li>
                            <img src={bird} height="20px" alt='bird' />
                            <span>Inicio</span>
                        </li>
                    </NavLink>

                    <NavLink className={logged && userTipe == 1 ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="alumno">
                        <li>
                            <img src={butterfly} height="20px" alt='butterfly' />
                            <span>Alumno</span>
                        </li>
                    </NavLink>
                    <NavLink className={logged && userTipe == 1 ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="profesor">
                        <li>
                            <img src={deer} height="20px" alt='deer' />
                            <span>Profesor</span>
                        </li>
                    </NavLink>
                    <NavLink className={logged && userTipe == 1 ? 'nav-link' + ' authorized' : 'nav-link' + ' notauthorized'} to="administracion">
                        <li>
                            <img src={deer} height="20px" alt='deer' />
                            <span>Administracion</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="contacto">
                        <li>
                            <img src={rabbit} height="20px" alt='rabbit' />
                            <span>Contacto</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="login">
                        <li>
                            <img src={rabbit} height="20px" alt='rabbit' />
                            <span >{email + ' - Login'}</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
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

                    <NavLink className={logged && userTipe == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="alumno">
                        <li>
                            <span>Alumno</span>
                        </li>
                    </NavLink>

                    <NavLink className={logged && userTipe == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="profesor">
                        <li>
                            <span>Profesor</span>
                        </li>
                    </NavLink>

                    <NavLink className={logged && userTipe == 1 ? 'nav-item' + ' authorized' : 'nav-item' + ' notauthorized'} to="administracion">
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
                            <span >{email + ' - Login'}</span>
                        </li>
                    </NavLink>

                </ul>
            </nav>
        </header >
    )
}
