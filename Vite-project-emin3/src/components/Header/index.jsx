import React from 'react'
import styles from './head.module.scss';
const Header = () => {
  return (
    <header>
         
            <h1>Quickly</h1>
        <nav>
            <ul>
                <li>About us</li>
                <li>Products</li>
                <li>Features</li>
                <li>Our Blog</li>
                <li>Downloads</li>
            </ul>
        </nav>
        <div className={`${styles.button}`}>
            <button>Sign Up</button>
            <button>Log In</button>
        </div>
        
    </header>
  )
}

export default Header