import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
function ToggleBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun size={30} /> : <HiOutlineMoon size={30} />}
    </button>
  );
}

export default ToggleBtn;
