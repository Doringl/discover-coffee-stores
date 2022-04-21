import React from "react";
import styles from "./Banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discover Coffee Stores</h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>View stores nearby</button>
      </div>
    </div>
  );
};

export default Banner;
