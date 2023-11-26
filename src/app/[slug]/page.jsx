import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      SinglePage
      <div className={styles.info}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userText}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.15.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
              <p className={styles}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat nisi rerum eius accusantium accusamus, porro tenetur
                itaque corrupti aut aliquam, officiis sunt facere modi beatae
                laborum blanditiis. Maiores, earum cumque?
              </p>
            </div>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
