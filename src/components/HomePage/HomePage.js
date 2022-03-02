import React from 'react'
import { Carousel } from './Carousel'
import { Services } from './Services'
import { CardSection } from './CardSection'

export const HomePage = () => {
    return (
        <div>
            <Carousel />
            <Services />
            <CardSection />
        </div>
    )
}