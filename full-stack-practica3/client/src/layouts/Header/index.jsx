import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
      <section className={styles.head}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h1>Tasty</h1>
          </div>
          <div className={styles.right}>
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
          </div>
        </div>
        <div className={styles.bottom}>
          <h1>Tasty & Delicius Food</h1>
          <button>Book a table</button>
        </div>
      </section>
    </header>
  );
}

export default Header
