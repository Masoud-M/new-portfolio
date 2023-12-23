import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

function MobileMenu({ toggleMenu, handleToggle }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const liItemStyle = " transition-all cursor-pointer hover:text-blue-500";

  if (toggleMenu)
    return (
      <div
        data-aos="slide-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center h-full transition-all bg-white"
      >
        <IoClose
          onClick={handleToggle}
          size={30}
          className="absolute top-[24px] right-[48px]"
        />
        <ul className="flex flex-col items-center gap-8 text-3xl font-semibold justify-evenly md:hidden">
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
      </div>
    );
}

export default MobileMenu;
