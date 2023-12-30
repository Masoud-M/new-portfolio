import ProjectItem from "../components/ProjectItem";
import CarRental from "../assets/car-rental.png";
import GymImg from "../assets/gym-website.png";

import { TypeAnimation } from "react-type-animation";
function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-600 bg-white dark:bg-slate-950 dark:text-gray-300"
    >
      <div className="w-[90%] 2xl:w-[65%] mx-auto flex flex-col items-center  gap-20  py-28 transition-all">
        <div className="flex items-center sm:items-start">
          <TypeAnimation
            className="text-3xl font-semibold text-blue-500 md:text-5xl"
            sequence={["Projects", 1000, " ", 1000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <ProjectItem
          image={CarRental}
          title="Car Rental"
          description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          techStack={["Next JS", "TypeScript", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/car-rental"
          demo="https://647eead214d0787e130c91b3--delicate-tiramisu-c6cc9e.netlify.app/"
        />

        <ProjectItem
          image={GymImg}
          title="Gym Website"
          description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
          techStack={["React", "CSS"]}
          srcLink="https://github.com/Masoud-M/gym-website"
          demo="https://fitclub-1my.pages.dev/"
        />
      </div>
    </section>
  );
}

export default Projects;
