import React from "react";
import cat from "./../../../assets/firstcat.png";
import styles from "./Firstview.module.css";
import beem from "./../../../assets/firstbeem.png";

export default function Firstview() {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.img1} src={cat} alt="猫" />
        <img className={styles.img2} src={beem} alt="猫の目からビーム" />
      </div>
    </>
  );
}
