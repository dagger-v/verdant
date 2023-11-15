import Link from "next/link";
import styles from "./auth.module.css";

const Auth = () => {
  const status = "notauth";
  return (
    <>
      {status === "notauth" ? (
        <Link href="/login" rel="preload" as="style">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" rel="preload" as="style">
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default Auth;
