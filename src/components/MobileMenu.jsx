import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { IoAlbums } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function MobileMenu({ toggleMenu, handleToggle }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const liItemStyle =
    "flex transition-all cursor-pointer hover:text-blue-500 justify-between my-8";
  const aItemStyle = "flex items-center justify-between gap-2 ";
  if (toggleMenu)
    return (
      <div
        data-aos="slide-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center h-full transition-all bg-white "
      >
        <IoClose
          onClick={handleToggle}
          size={30}
          className="absolute top-[24px] right-[48px]"
        />
        <ul className="text-3xl font-semibold md:hidden">
          <li onClick={handleToggle} className={liItemStyle}>
            <a className={aItemStyle} href="#home">
              <IoHome />
              <span>Home</span>
            </a>
          </li>
          <li onClick={handleToggle} className={liItemStyle}>
            <a className={aItemStyle} href="#projects">
              <IoAlbums />
              <span>Projects</span>
            </a>
          </li>
          <li onClick={handleToggle} className={liItemStyle}>
            <a className={aItemStyle} href="#contacts">
              <IoMail />
              <span>Contact</span>
            </a>
          </li>
          <li onClick={handleToggle} className={liItemStyle}>
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
        </ul>
      </div>
    );
}

export default MobileMenu;
