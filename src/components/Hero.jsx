import HTML from "../assets/Images/html.svg";
import CSS from "../assets/Images/css.svg";
import JavaScript from "../assets/Images/javascript.svg";
import ReactIcon from "../assets/Images/react.svg";
import Tailwind from "../assets/Images/tailwind.svg";

function Hero() {
  return (
    <div className=" w-[90%] lg:w-[65%] mx-auto flex flex-col items-center justify-evenly text-center h-screen py-28 transition-all">
      <div className="">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
          Front-End React Developer 👋
        </h1>
        <span className="text-xl font-semibold text-gray-600 md:text-2xl ">
          Hi, I'm Masoud. A passionate Front-end React Developer...
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <p className="pb-4 mb-8 text-xl font-semibold border-b-2 border-gray-600 md:text-2xl w-fit">
          Tech Stack
        </p>

        <ul className="flex flex-wrap gap-4 md:gap-6">
          <li>
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={HTML}
              alt="html icon"
            />
          </li>
          <li>
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={CSS}
              alt="css icon"
            />
          </li>
          <li>
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={JavaScript}
              alt="javascript icon"
            />
          </li>
          <li>
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={ReactIcon}
              alt="react icon"
            />
          </li>
          <li>
            <img
              className="md:w-20 md:h-20 w-14 h-14"
              src={Tailwind}
              alt="Tailwind icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
