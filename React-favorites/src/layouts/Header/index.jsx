import React from 'react'
import styles from "./index.module.scss"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink ></li>
                    <li><NavLink to={"/about"}>About</NavLink ></li>
                    <li><NavLink to={"/products"}>Products</NavLink ></li>
                    <li><NavLink to={"/favorites"}>Favorites</NavLink ></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header