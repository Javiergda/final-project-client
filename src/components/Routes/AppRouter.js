import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { HomePage } from '../HomePage/HomePage'
import { Students } from '../Students/Students'
import { Teachers } from '../Teachers/Teachers'
import { Management } from '../Management/Management'
import { Login } from '../Login/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="homepage" element={<HomePage />} />
                <Route path="alumno" element={<Students />} />
                <Route path="profesor" element={<Teachers />} />
                <Route path="administracion" element={<Management />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
