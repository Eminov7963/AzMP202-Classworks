import React from 'react';
import styles from './client.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <h2 className={styles.logo}>Logo</h2>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/" className={styles.navLink}>Home</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/about" className={styles.navLink}>About</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/contact" className={styles.navLink}>Contact</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/detail" className={styles.navLink}>Detail</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/products" className={styles.navLink}>Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    
    
  );
};

export default Header;
