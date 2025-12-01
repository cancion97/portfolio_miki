import React from "react";
import styles from "./WorkDetailTitle.module.css";

export default function WorkDetailTitle({ title }) {
  return (
    <div>
      <h1 className={styles.text}>{title}</h1>
    </div>
  );
}
