import Button from "../../../_commons/Button/Button";
import works from "../../../worksList";
import link from "../../../../assets/link.png";
import arrow from "../../../../assets/arrow.png";
import styles from "./WorkItem.module.css";
import clip from "../../../../assets/clip.png";
import close from "../../../../assets/close.png";
import { useState, useEffect } from "react";
import Construction from "../../../Construction/Construction";
import RevealList from "../../../RevealList";

export default function WorkItem() {
  const [isOpen, setIsOpen] = useState(false);

  // モーダル中の背景スクロール禁止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <RevealList />
      {works.map((item) => (
        <div key={item.label} className={styles.wbox}>
          <div className={`${styles.box} reveal`}>
            <div className={styles.clip}>
              <img src={clip} alt="クリップの写真" />
            </div>

            <div className={`${styles.titlewrap} reveal`}>
              <h3>{item.label}</h3>

              <div className={`${styles.imgbox} reveal`}>
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

            <p
              style={{ borderLeft: item.style }}
              className={`${styles.text} reveal`}
            >
              {item.text.map((line, i) => (
                <span key={i} className={`${styles.blockSpan} reveal`}>
                  {line}
                </span>
              ))}
            </p>

            <div className={styles.btnbox}>
              <Button btext="サイトにアクセス" icon={link} href={item.url} />
              <Button btext="詳しく見る" icon={arrow} onclick={openModal} />
            </div>
          </div>

          {/* モーダル */}
          {isOpen && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modal}>
                  <Construction />
                  <Button
                    style={styles.btn}
                    btext="閉じる"
                    icon={close}
                    onclick={closeModal}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={`${styles.scshots} reveal`}>
            <img
              className={styles.img}
              src={item.src}
              alt="スクリーンショット"
            />
            <img
              className={styles.imgs}
              src={item.srcs}
              alt="スクリーンショット"
            />
          </div>
        </div>
      ))}
    </>
  );
}
