import { IoHome } from "react-icons/io5";
import { IoAlbums } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

function DesktopMenu() {
  const liItemStyle = " transition-all cursor-pointer hover:text-blue-500";
  const aItemStyle = "flex items-center justify-center gap-2";
  return (
    <ul className="items-center hidden gap-5 text-xl font-semibold justify-evenly md:flex">
      <li className={liItemStyle}>
        <a className={aItemStyle} href="/">
          <IoHome />
          Home
        </a>
      </li>
      <li className={liItemStyle}>
        <a className={aItemStyle} href="/">
          <IoAlbums />
          <span>Projects</span>
        </a>
      </li>
      <li className={liItemStyle}>
        <a className={aItemStyle} href="/">
          <IoMail />
          <span>Contact</span>
        </a>
      </li>
      <li className={liItemStyle}>
        <a className={aItemStyle} href="/">
          <BsGithub />
          <span>Github</span>
        </a>
      </li>
    </ul>
  );
}

export default DesktopMenu;
