import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import ToggleBtn from "./ToggleBtn";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <>
      <header className="fixed top-0 z-50 flex items-center justify-between w-full px-12 py-6 text-gray-600 bg-white shadow-lg dark:bg-slate-950 dark:text-gray-300 h-22">
        <h3 className="text-xl font-bold">Masoud.dev</h3>

        <div className="flex gap-4 md:hidden">
          <ToggleBtn />
          <IoMenu onClick={handleToggle} size={30} />
        </div>
        <MobileMenu toggleMenu={toggleMenu} handleToggle={handleToggle} />
        <DesktopMenu />
      </header>
    </>
  );
}

export default Header;
