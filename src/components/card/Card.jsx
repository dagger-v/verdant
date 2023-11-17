import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.05.2023 - </span>
          <span className={styles.category}>STYLE</span>
        </div>
        <Link href="/">
          <h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          praesentium voluptatem beatae dolorem tenetur harum accusamus? Fuga
          eligendi sint possimus placeat similique inventore, illo asperiores
          culpa? Alias fugit quasi numquam! ...
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
