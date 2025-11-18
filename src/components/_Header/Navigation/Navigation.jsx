import navItems from "./../../NavigationList";

export default function Navigation() {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
