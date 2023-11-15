import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Auth from "../auth/Auth";
import Theme from "../theme/Theme";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Verdant</div>
      <div className={styles.links}>
        <Theme />
        <Link href="/" rel="preload" as="style">
          Homepage
        </Link>
        <Link href="/" rel="preload" as="style">
          Contact
        </Link>
        <Link href="/" rel="preload" as="style">
          About
        </Link>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
