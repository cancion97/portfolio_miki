import React from "react";
import image from "./../../../../assets/profile.png";
import styles from "./ProfileImage.module.css";
import RevealList from "../../../RevealList";

export default function ProfileImage() {
  return (
    <>
      <RevealList />
      <div className={`${styles.imgbox} reveal`}>
        <img className={styles.image} src={image} alt="プロフィール写真" />
      </div>
    </>
  );
}
