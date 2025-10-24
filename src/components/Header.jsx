export default function Header({ children }) {
  return (
    <header
      style={{
        width: "100vw",
        paddingInline: 32,
        paddingBlock: 16,
        backgroundColor: "#08609aff",
        color: "#ffffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </header>
  );
}
