import ProjectItem from "../components/ProjectItem";
import CarRental from "../assets/car-rental.png";
import GymImg from "../assets/gym-website.png";
import Thewildoasis from "../assets/thewildoasis.png";
import Notejar from "../assets/notejar.png";

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
          image={Notejar}
          title="Note Jar"
          description="A heartfelt app where users create and share personalized notes in a virtual jar. Users set up unique usernames and passwords for secure sharing. Recipients are greeted with an interactive 3D jar upon opening."
          techStack={["Next JS", "TypeScript", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/notejar"
          demo="https://notejar.net/"
          staticImage
        />
        <ProjectItem
          image={Thewildoasis}
          title="The Wild Oasis"
          description="A local web-based management tool designed exclusively for hotel staff. Employees can create/delete user accounts, manage guest information, and update room details."
          techStack={["React", "Javascript", "Styled-components"]}
          srcLink="https://github.com/Masoud-M/the-wild-oasis"
          staticImage
        />
        <ProjectItem
          image={CarRental}
          title="Car Rental"
          description="A car rental website offering users the convenience of renting vehicles for personal or business use. The platform features an intuitive interface for browsing, comparing, and reserving cars."
          techStack={["Next JS", "TypeScript", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/car-rental"
          demo="https://clone-car-rental.netlify.app/"
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
