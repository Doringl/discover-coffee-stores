import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Card.module.css";

interface ICard {
  href: string;
  name: string;
  imgUrl: string;
}

const Card: React.FC<ICard> = ({ href, name, imgUrl }) => {
  return (
    <div>
      <Link href={href}>
        <a className={styles.cardLink}>
          <div className={`glass ${styles.container}`}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                src={
                  imgUrl ||
                  "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                }
                width={312}
                className={styles.cardImage}
                height={240}
                alt={`Image of ${name} ${
                  !name.includes("Coffee") ? "coffee" : ""
                } shop`}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
