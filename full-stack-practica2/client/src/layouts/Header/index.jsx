import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss"
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBasket } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <section className={styles.head}>
        <div className={styles.search}>
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.shoppers}>
          <h3>Shoppers</h3>
        </div>
        <div className={styles.icons}>
          <CiUser />
          <CiHeart />
          <BsBasket />
        </div>
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
