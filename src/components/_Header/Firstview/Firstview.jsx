import React from "react";
import cat from "./../../../assets/firstcat.png";
import styles from "./Firstview.module.css";

export default function Firstview() {
  return (
    <div className={styles.img}>
      <img src={cat} alt="猫" />
    </div>
  );
}
