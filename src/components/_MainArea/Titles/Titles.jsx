import navItems from "./../../NavigationList";
import styles from "./Titles.module.css";

export default function Titles({ id }) {
  const item = navItems.find((nav) => nav.id === id);

  if (!item) return null; // id が見つからなければ何も表示しない

  return (
    <div className={styles.titlebox}>
      <h2>{item.label}</h2>
      <p>{item.label}</p>
    </div>
  );
}
