import React from 'react'
import { Carousel } from './Carousel'
import { Cards } from './Cards'
import { Services } from './Services'

export const HomePage = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <Cards />
        </div>
    )
}
