import { Link, Route, Routes } from "react-router-dom";
import styles from "./Button.module.css";
import Construction from "../../Construction/Construction";

export default function Button({
  btext,
  icon,
  href,
  style = styles.btn,
  onclick,
}) {
  return (
    <div onClick={onclick}>
      <a className={style} href={href} target="_blank">
        {btext}
        <img src={icon} alt="アイコン" />
      </a>
      {/* <Link to="/Construction">aaaaaa</Link>

      <Routes>
        <Route path="/Construction" element={<Construction />} />
      </Routes> */}
    </div>
  );
}
