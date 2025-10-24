import FirstviewImage from "./../assets/first_view.jpg";

export default function Firstview({ children }) {
  return (
    <div className="firstview" style={{ position: "relative" }}>
      <img src={FirstviewImage} alt="海" />
      {children}
    </div>
  );
}
