import React from "react";
import styles from "./Banner.module.css";

interface IBanner {
  buttonText: string;
  handleOnClick: () => void;
}

const Banner: React.FC<IBanner> = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discover Coffee Stores</h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleOnClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
