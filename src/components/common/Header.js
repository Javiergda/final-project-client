import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import { HeaderSmall } from './HeaderSmall'
import { HeaderMedium } from './HeaderMedium'

export const Header = () => {

    const context = useContext(AuthContext);

    return (
        <header className="header__main">
            <HeaderSmall context={context} />
            <HeaderMedium context={context} />
        </header >
    )
}