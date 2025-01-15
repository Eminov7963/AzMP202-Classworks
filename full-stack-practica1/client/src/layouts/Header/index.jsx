import React from 'react'
import {NavLink} from "react-router-dom"
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
      <section className={styles.head}>
        <img
          src="https://preview.colorlib.com/theme/wines/images/logo.png"
          alt=""
        />
      </section>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
