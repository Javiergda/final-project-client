import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import bird from '../../icons/bird.png'
import butterfly from '../../icons/butterfly.png'
import deer from '../../icons/deer.png'
import rabbit from '../../icons/rabbit.png'
import menu from '../../icons/menu.png'

export const Header = () => {
    return (
        <header className="header__main">
            <nav className="nav_small">
                <div className='header_menu'>
                    <img src={bird} height="20px" alt='bird' />
                    <h3><span>Escuela infantil Bambi</span></h3>
                    <img src={menu} height="20px" alt='' />

                </div>
                <ul>
                    <NavLink className='nav-link' to="/" >
                        <li>
                            <img src={bird} height="20px" alt='bird' />
                            <span>Inicio</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="/Alumno">
                        <li>
                            <img src={butterfly} height="20px" alt='butterfly' />
                            <span>Alumno</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="/Profesor">
                        <li>
                            <img src={deer} height="20px" alt='deer' />
                            <span>Profesor</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="/Administracion">
                        <li>
                            <img src={deer} height="20px" alt='deer' />
                            <span>Administracion</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="/Contacto">
                        <li>
                            <img src={rabbit} height="20px" alt='rabbit' />
                            <span>Contacto</span>
                        </li>
                    </NavLink>
                    <NavLink className='nav-link' to="/Login">
                        <li>
                            <img src={rabbit} height="20px" alt='rabbit' />
                            <span >Login</span>
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <nav className='nav_medium'>
                <ul>
                    <li>
                        <h3><span>Escuela infantil Bambi</span></h3>
                    </li>

                    <NavLink className='nav-item' to="/">
                        <li>
                            <span>Inicio</span>
                        </li>
                    </NavLink>

                    <NavLink className='nav-item' to="/Alumno">
                        <li>
                            <span>Alumno</span>
                        </li>
                    </NavLink>

                    <NavLink className='nav-item' to="/Profesor">
                        <li>
                            <span>Profesor</span>
                        </li>
                    </NavLink>

                    <NavLink className='nav-item' to="/Administracion">
                        <li>
                            <span>Admnistracion</span>
                        </li>
                    </NavLink>

                    <NavLink className='nav-item' to="/Contacto">
                        <li>
                            <span>Contacto</span>
                        </li>
                    </NavLink>

                    <li className='empty'></li>

                    <NavLink className='nav-item' to="/Login">
                        <li>
                            <span >Login</span>
                        </li>
                    </NavLink>

                </ul>
            </nav>
        </header >
    )
}
