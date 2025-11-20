import React from "react";
import Title from "../../_Header/MainTitle/MainTitle";
import Navigation from "../../_Header/Navigation/Navigation";
import Titles from "../Titles/Titles";
import Works from "../_Works/Works/Works";
import Profile from "../_Profile/Profile/Profile";
import Contact from "../_Contact/Contact/Contact";
import styles from "./MainArea.module.css";

export default function () {
  return (
    <>
      <main>
        <div className={styles.mainwrap}>
          <Works />
          <Profile />
        </div>
        <Contact />
      </main>
    </>
  );
}
