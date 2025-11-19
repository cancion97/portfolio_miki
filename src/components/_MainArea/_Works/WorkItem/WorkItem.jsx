import Button from "../../../_commons/Button/Button";
import works from "../../../worksList";
import link from "../../../../assets/link.png";
import arrow from "../../../../assets/arrow.png";
import styles from "./WorkItem.module.css";

export default function WorkItem() {
  return (
    <>
      {works.map((item) => (
        <div key={item.label} className={styles.wbox}>
          <div className={styles.box}>
            <div className={styles.titlewrap}>
              <h3>{item.label}</h3>
              <div>
                {item.tool.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`${item.label} tool icon`}
                    className={styles.toolIcon}
                  />
                ))}
              </div>
            </div>
            <p style={{ borderLeft: item.style }} className={styles.text}>
              {item.text}
            </p>
            <div className={styles.btnbox}>
              <Button btext="サイトにアクセス" icon={link} href={item.url} />
              <Button btext="詳しく見る" icon={arrow} />
            </div>
          </div>
          <img className={styles.img} src={item.src} alt="スクリーンショット" />
        </div>
      ))}
    </>
  );
}
