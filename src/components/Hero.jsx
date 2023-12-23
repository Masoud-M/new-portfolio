import HTML from "../assets/Images/html.svg";
import CSS from "../assets/Images/css.svg";
import JavaScript from "../assets/Images/javascript.svg";
import ReactIcon from "../assets/Images/react.svg";
import Tailwind from "../assets/Images/tailwind.svg";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="  w-[90%] lg:w-[65%] mx-auto flex flex-col items-center justify-between text-center h-screen py-28 transition-all">
        <div>
          <h1 className="flex flex-wrap text-4xl font-bold text-gray-900 md:text-6xl">
            Front-End React Developer 👋
          </h1>

          <p className="my-6 font-semibold text-gray-600 text-xl/9 text-pretty md:text-2xl">
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
