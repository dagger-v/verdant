"use client";

import Image from "next/image";
import styles from "./theme.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Theme = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="nightMode" width={14} height={14} />
      <div className={styles.circle}></div>
      <Image src="/sun.png" alt="lightMode" width={14} height={14} />
    </div>
  );
};

export default Theme;
