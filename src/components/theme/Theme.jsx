"use client";

import Image from "next/image";
import styles from "./theme.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Theme = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#27272c" }
      }
    >
      <Image src="/moon.png" alt="nightMode" width={14} height={14} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 1, background: "#27272c" }
            : { right: 1, background: "#fff" }
        }
      ></div>
      <Image src="/sun.png" alt="lightMode" width={14} height={14} />
    </div>
  );
};

export default Theme;
