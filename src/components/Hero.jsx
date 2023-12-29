import HTML from "../assets/Images/html.svg";
import CSS from "../assets/Images/css.svg";
import JavaScript from "../assets/Images/javascript.svg";
import ReactIcon from "../assets/Images/react.svg";
import Tailwind from "../assets/Images/tailwind.svg";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="  w-[90%] lg:w-[65%] mx-auto flex flex-col items-center justify-between text-center h-fit gap-8 pb-28 pt-36 transition-all">
        <div className="flex flex-col items-center sm:items-start">
          <TypeAnimation
            className="mb-10 text-3xl font-semibold text-blue-500 md:text-5xl"
            sequence={[
              "Hi there 👋",
              1000,
              "I'm Masoud",
              1000,
              "Front-end React Developer",
              1000,
              "Tech Enthusiast",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />

          <p className="my-6 font-semibold text-gray-600 text-xl/9 text-pretty md:text-2xl md:text-left">
            Hi, I'm Masoud. A passionate Front-end React developer. My expertise
            lies in crafting dynamic, engaging interfaces through writing clean
            and optimized code. I am also a team player who thrives in
            collaborating with cross-functional teams to produce outstanding web
            applications.
          </p>
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
    </section>
  );
}

export default Hero;
