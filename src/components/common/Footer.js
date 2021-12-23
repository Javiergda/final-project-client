import React from 'react'
import house from '../../icons/house.png'
import phone from '../../icons/phone.png'
import mobile from '../../icons/mobile.png'
import email from '../../icons/email.png'
import gmail from '../../icons/gmail.png'
import facebook from '../../icons/facebook.png'
import tweeter from '../../icons/tweeter.png'

export const Footer = () => {
    return (
        <footer className='footer__main'>
            <nav className="footer_menu">
                <ul>
                    <li>
                        <h3><span>Escuela infantil BAMBI</span></h3>
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
                </ul>
            </nav>
            <div className='footer_contact'>
                <ul>
                    <li>
                        <h3><span>Contacto</span></h3>
                    </li>
                    <li>
                        <p>
                            <img src={house} height="15px" alt='adress' />
                            <span>Escuela infantil Bambi</span>
                        </p>
                        <p>C/ calle calle calle nº1</p>
                        <p>29010 Málaga</p>
                    </li>
                    <li>
                        <img src={phone} height="15px" alt='phone' />
                        <span>952000000</span>
                    </li>
                    <li>
                        <img src={mobile} height="15px" alt='mobile' />
                        <span>660000000</span>
                    </li>
                    <li>
                        <img src={email} height="15px" alt='email' />
                        <span>bambi@bambi.com</span>
                    </li>

                </ul>
            </div>
            <div className='footer_links'>
                <ul>
                    <li>
                        <h3><span>Siguenos</span></h3>
                    </li>
                    <li>
                        <img src={gmail} height="15px" alt='adress' />
                        <span>Gmail</span>
                    </li>
                    <li>
                        <img src={facebook} height="15px" alt='facebook' />
                        <span>Facebook</span>
                    </li>
                    <li>
                        <img src={tweeter} height="15px" alt='tweeter' />
                        <span>Tweeter</span>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
