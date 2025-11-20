import React from "react";
import Title from "../MainTitle/MainTitle";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import Firstview from "../Firstview/Firstview";

export default function Header() {
  return (
    <header className={styles.headerwrap}>
      <Navigation />
      <div className={styles.box}>
        <Title />
        <Firstview />
      </div>
    </header>
  );
}
