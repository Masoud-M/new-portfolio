import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleToggle() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <>
      <header className="fixed top-0 z-50 flex items-center justify-between w-full px-12 py-6 bg-white shadow-lg h-22">
        <h3 className="text-xl font-bold">Masoud.dev</h3>

        <div onClick={handleToggle} className="md:hidden ">
          <IoMenu size={30} />
        </div>
        <MobileMenu toggleMenu={toggleMenu} handleToggle={handleToggle} />
        <DesktopMenu />
      </header>
    </>
  );
}

export default Header;
