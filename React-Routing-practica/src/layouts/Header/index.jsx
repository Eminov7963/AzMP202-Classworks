import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
            <li><NavLink to={"/favorites"}>Favorites</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
        </ul>
    </nav>
    </header>
  )
}

export default Header