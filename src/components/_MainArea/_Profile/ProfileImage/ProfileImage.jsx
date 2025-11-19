import React from "react";
import image from "./../../../../assets/profile.png";
import styles from "./ProfileImage.module.css";

export default function ProfileImage() {
  return (
    <div className={styles.imgbox}>
      <img className={styles.image} src={image} alt="プロフィール写真" />
    </div>
  );
}
