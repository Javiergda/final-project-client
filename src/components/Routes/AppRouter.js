import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { HomePage } from '../HomePage/HomePage'
import { Students } from '../Students/Students'
import { Teachers } from '../Teachers/Teachers'
import { Management } from '../Management/Management'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Alumno" element={<Students />} />
                <Route path="/Profesor" element={<Teachers />} />
                <Route path="/Administracion" element={<Management />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
