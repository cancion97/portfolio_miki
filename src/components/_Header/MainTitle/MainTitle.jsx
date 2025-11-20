import React from "react";
import styles from "./MainTitle.module.css";

export default function Title() {
  return (
    <div className={styles.titlewrap}>
      <p className={styles.subtitle}>Welcome to my</p>
      <h1 className={styles.title}>PORTFOLIO</h1>
    </div>
  );
}
