import LogoImage from "./../assets/react.svg";

export default function Logo() {
  return (
    <>
      <h1>
        <img src={LogoImage} alt="ロゴ" />
      </h1>
    </>
  );
}
