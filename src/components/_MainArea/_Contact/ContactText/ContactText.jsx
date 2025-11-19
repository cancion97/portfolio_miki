import React from "react";
import styles from "./ContactText.module.css";

export default function ContactText() {
  return (
    <div>
      <p className={styles.text}>
        ご覧いただきありがとうございます。
        <br />
        下記のメールアドレスにお気楽にご連絡ください。
      </p>
    </div>
  );
}
