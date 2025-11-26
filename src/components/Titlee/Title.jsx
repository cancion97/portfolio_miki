import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Title.module.css";

export default function Title() {
  const text = "Thank  you  for  visiting!  Thank  you  for  visiting!"; // ←好きな文字に変更OK
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={styles.container}>
      {/* Gooey filter (必須) */}
      <svg className={styles.gooeyFilter}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.7" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 25 -10"
          />
        </filter>
      </svg>

      <div className={styles.gooey}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className={styles.char}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            animate={{
              scale: hoverIndex === i ? 2 : 2,
              filter: hoverIndex === i ? "blur(4px)" : "blur(0px)",
              borderRadius: hoverIndex === i ? "20%" : "0%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
