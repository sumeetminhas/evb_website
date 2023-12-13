import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-elements">
                <ul>
                    <li>
                        <NavLink to="/ourBeers">Our Beers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tastingRoom">Tasting Room</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buy">Where to Buy</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}