"use client";

import Link from "next/link";
import styles from "./auth.module.css";
import { useState } from "react";

const Auth = () => {
  const [open, setOpen] = useState(false);
  const status = "notauth";
  return (
    <>
      {status === "notauth" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsive}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
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
        </div>
      )}
    </>
  );
};

export default Auth;
