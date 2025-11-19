import React from "react";
import take from "./../../../../assets/take.png";
import styles from "./ContactImage.module.css";

export default function ContactImage() {
  return (
    <div>
      <img className={styles.image} src={take} alt="猫の写真" />
    </div>
  );
}
