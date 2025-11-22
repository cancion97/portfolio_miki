import RevealList from "../../../RevealList";
import Titles from "../../Titles/Titles";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileText from "../ProfileText/ProfileText";
import skills from "./../../../skills";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <>
      <RevealList />
      <Titles id={2} idname="profile" />

      <div className={`${styles.wrapper} reveal`}>
        <div className={`${styles.profileWrap} reveal`}>
          <ProfileImage />
          <div className={styles.textBox}>
            <ProfileText title="NAME">
              <p style={{ fontWeight: "500", fontSize: "1.1rem" }}>
                三木　麻未（みき　あさみ）
              </p>
            </ProfileText>
            <ProfileText title="SKILL">
              {skills.map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={`${item.label} tool icon`}
                  className={styles.toolIcon}
                />
              ))}
            </ProfileText>
            <ProfileText title="CARRER">
              <p>
                外大の短期大学部を卒業後、アパレルなどの接客業をしてきました。
                カナダのトロントにワーホリした後、ホテルのフロントで働いていました。
                現在はフロントエンドエンジニアの職業訓練校に通っています。
              </p>
            </ProfileText>
            <ProfileText title="WHAT I LIKE">
              <p>旅行、映画鑑賞、写真が好きです。</p>
            </ProfileText>
          </div>
        </div>
      </div>
    </>
  );
}
