import { IoHome } from "react-icons/io5";
import { IoAlbums } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import ToggleBtn from "./ToggleBtn";

function DesktopMenu() {
  const liItemStyle = " transition-all cursor-pointer hover:text-blue-500";
  const aItemStyle = "flex items-center justify-center gap-2";
  return (
    <ul className="items-center hidden gap-5 text-xl font-semibold justify-evenly md:flex">
      <li className={liItemStyle}>
        <a className={aItemStyle} href="#home">
          <IoHome />
          Home
        </a>
      </li>
      <li className={liItemStyle}>
        <a className={aItemStyle} href="#projects">
          <IoAlbums />
          <span>Projects</span>
        </a>
      </li>
      <li className={liItemStyle}>
        <a className={aItemStyle} href="#contacts">
          <IoMail />
          <span>Contact</span>
        </a>
      </li>
      <li className={liItemStyle}>
        <a
          className={aItemStyle}
          href="https://github.com/Masoud-M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
          <span>Github</span>
        </a>
      </li>
      <li className={liItemStyle}>
        <div className={aItemStyle}>
          <ToggleBtn />
        </div>
      </li>
    </ul>
  );
}

export default DesktopMenu;
