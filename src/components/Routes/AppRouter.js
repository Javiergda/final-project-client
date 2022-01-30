import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { HomePage } from '../HomePage/HomePage'
import { Students } from '../Students/Students'
import { Teachers } from '../Teachers/Teachers'
import { Management } from '../Management/Management'
import { Login } from '../Login/Login';
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { Navigate } from 'react-router-dom'

// Teachers: ususario logeado y nivel 2
// Management: ususario logeado y nivel 2

export const AppRouter = () => {

    const context = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="homepage" element={<HomePage />} />
                <Route path="alumno" element={<Students />} />
                <Route path="profesor" element={context.logged && context.userTipe == 1 ? <Teachers /> : <Navigate to='/login' />} />
                <Route path="administracion" element={context.logged && context.userTipe == 1 ? <Management /> : <Navigate to='/login' />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
