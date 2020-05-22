import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>
                <NavLink className='navlink' to='/'>Star Wars</NavLink>
            </h1>
        </header>
    )
}