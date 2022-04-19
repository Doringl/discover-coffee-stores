import React from "react";
import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My-Coffee</h1>
      <p className={styles.subtitle}>Discover</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Find more</button>
      </div>
    </div>
  );
};

export default Banner;
