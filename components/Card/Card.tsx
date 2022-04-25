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
                src={imgUrl}
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
