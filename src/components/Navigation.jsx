import ListItem from "./ListItem";

export default function Navigation({ src }) {
  return (
    <nav>
      <ul
        style={{
          color: "#48ddf8ff",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {src.map((elem) => (
          <li className={elem.Listclass} key={elem.key}>
            {elem.list}
          </li>
        ))}
      </ul>
    </nav>
  );
}
