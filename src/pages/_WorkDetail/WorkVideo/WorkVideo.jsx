import React from "react";
import styles from "./WorkVideo.module.css";

export default function WorkVideo({ video }) {
  return (
    <>
      <video className={styles.video} src={video} autoPlay muted></video>
    </>
  );
}
