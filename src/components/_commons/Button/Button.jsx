import styles from "./Button.module.css";

export default function Button({ btext, icon, href, style = styles.btn }) {
  return (
    <a className={style} href={href} target="_blank">
      {btext}
      <img src={icon} alt="アイコン" />
    </a>
  );
}
