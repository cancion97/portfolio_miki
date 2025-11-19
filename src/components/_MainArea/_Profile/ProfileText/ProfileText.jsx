import styles from "./ProfileText.module.css";

export default function ProfileText({ title, children }) {
  return (
    <div className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
}
