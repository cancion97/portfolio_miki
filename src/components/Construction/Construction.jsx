import React from "react";
import construction from "./../../assets/construction.png";
import styles from "./Construction.module.css";

import { useState } from "react";

export default function Construction() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.cbox}>
      <h1 className={styles.title}>工事中</h1>
      <h2 className={styles.english}>Under construction</h2>
      <div className={styles.img}>
        <img src={construction} alt="工事中" />
      </div>
    </div>
  );
}
