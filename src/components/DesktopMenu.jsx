function DesktopMenu() {
  const liItemStyle = " transition-all cursor-pointer hover:text-blue-500";
  return (
    <ul className="items-center hidden gap-5 text-xl font-semibold justify-evenly md:flex">
      <li className={liItemStyle}>
        <a href="/">Home</a>
      </li>
      <li className={liItemStyle}>
        <a href="/">About</a>
      </li>
      <li className={liItemStyle}>
        <a href="/">Projects</a>
      </li>
      <li className={liItemStyle}>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
}

export default DesktopMenu;
