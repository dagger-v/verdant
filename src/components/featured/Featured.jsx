import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Verdant</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.Desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum modi
            consequatur impedit aperiam fugiat? Soluta tenetur, similique ipsa,
            animi vero porro fugit at adipisci eveniet, consequatur asperiores
            expedita eligendi ducimus? Excepturi quaerat eveniet harum
            laudantium illum inventore consequatur quam rerum explicabo beatae.
            Fuga architecto accusantium eius magni illum quibusdam labore eum
            delectus fugiat totam! Delectus, minus. Debitis nam eaque
            accusantium.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
