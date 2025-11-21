import Button from "../../../_commons/Button/Button";
import works from "../../../worksList";
import link from "../../../../assets/link.png";
import arrow from "../../../../assets/arrow.png";
import styles from "./WorkItem.module.css";
import clip from "../../../../assets/clip.png";
import close from "../../../../assets/close.png";
import { useState } from "react";
import Construction from "../../../Construction/Construction";

export default function WorkItem() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {works.map((item) => (
        <div key={item.label} className={styles.wbox}>
          <div className={styles.box}>
            <div className={styles.clip}>
              <img src={clip} alt="クリップの写真" />
            </div>
            <div className={styles.titlewrap}>
              <h3>{item.label}</h3>
              <div className={styles.imgbox}>
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
              {item.text.map((line, i) => (
                <span key={i} className={styles.blockSpan}>
                  {line}
                </span>
                // .blockSpanにCSSでdisplay: block;を指定してください。
              ))}
            </p>
            <div className={styles.btnbox}>
              <Button btext="サイトにアクセス" icon={link} href={item.url} />
              <Button btext="詳しく見る" icon={arrow} onclick={openModal} />
            </div>
          </div>
          <div className="modalWrapper">
            {isOpen && (
              // modalOverlayはモーダルが出た時の背景
              <div className={styles.modalOverlay} onClick={closeModal}>
                {/* モーダルの表示される画面 */}
                <div
                  className={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* モーダルとして表示したい内容 */}
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
          </div>
          <div className={styles.scshots}>
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
