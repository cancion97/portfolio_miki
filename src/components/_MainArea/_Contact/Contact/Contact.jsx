import React from "react";
import Titles from "../../Titles/Titles";
import styles from "./Contact.module.css";
import ContactImage from "../ContactImage/ContactImage";
import ContactText from "../ContactText/ContactText";
import Button from "../../../_commons/Button/Button";
import mail from "../../../../assets/mail.png";

export default function Contact() {
  return (
    <>
      <div className={styles.wrap}>
        <Titles id={3} style={styles.title} />
        <ContactImage />
        <ContactText />
        <Button
          style={styles.button}
          href="mailto:mikiasm1207@gmail.com"
          btext="mikiasm1207@gmail.com"
          icon={mail}
        />
      </div>
    </>
  );
}
