export default function ListItem({
  list = "メニュー",
  ListClass = "baseclass",
}) {
  return (
    <>
      <li className={ListClass}>{list}</li>
    </>
  );
}
