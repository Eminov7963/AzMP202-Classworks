import React from "react";
import styles from "./main.module.scss"
import img from "../../img/Illustration.png"
const Main = () => {
  return (
    <main>
      <img src={img} alt="" />
      <h1 className={`${styles.h1}`}>Get your most important tasks done in no time</h1>
      <p className={`${styles.p}`}>
        Sign up for free and turbocharge your productivity today with the
        world’s best product management platform
      </p>
      <div className={`${styles}`}>
        <input type="text"  className={`${styles.input}`}/>
        <button className={`${styles.button}`}>Sign Up</button>
      </div>
    </main>
  );
};

export default Main;
