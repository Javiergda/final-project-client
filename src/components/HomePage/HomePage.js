import React from 'react'

import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Carousel } from './Carousel'
import { Cards } from './Cards'



export const HomePage = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Cards />
            <Footer />
        </div>
    )
}
