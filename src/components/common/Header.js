import React from 'react'
import bird from '../../icons/bird.png'
import butterfly from '../../icons/butterfly.png'
import deer from '../../icons/deer.png'
import rabbit from '../../icons/rabbit.png'
import menu from '../../icons/menu.png'

export const Header = () => {
    return (
        <header className="header__main">
            <nav className="nav_small">
                <ul>
                    <li>
                        <img src={bird} height="20px" alt='bird' />
                        <h3><span>Escuela infantil Bambi</span></h3>
                        <img src={menu} height="20px" alt='' />
                    </li>
                    <li>
                        <img src={bird} height="20px" alt='bird' />
                        <span>Inicio</span>
                    </li>
                    <li>
                        <img src={butterfly} height="20px" alt='butterfly' />
                        <span>Alumno</span>
                    </li>
                    <li>
                        <img src={deer} height="20px" alt='deer' />
                        <span>Profesor</span>
                    </li>
                    <li>
                        <img src={rabbit} height="20px" alt='rabbit' />
                        <span>Contacto</span>
                    </li>
                    <li>
                        <span >Login</span>
                    </li>
                </ul>
            </nav>
            <nav className='nav_medium'>
                <ul>
                    <li>
                        <h3><span>Escuela infantil Bambi</span></h3>
                    </li>
                    <li>
                        <span>Inicio</span>
                    </li>
                    <li>
                        <span>Alumno</span>
                    </li>
                    <li>
                        <span>Profesor</span>
                    </li>
                    <li>
                        <span>Contacto</span>
                    </li>
                    <li className='empty'></li>
                    <li>
                        <span >Login</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
