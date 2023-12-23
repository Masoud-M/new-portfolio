import ProjectItem from "../components/ProjectItem";
import CarRental from "../assets/car-rental.png";
import GymImg from "../assets/gym-website.png";
import SortingVisualizer from "../assets/sorting-visualizer.png";
function Projects() {
  return (
    <section id="projects" className="bg-gray-100">
      <div className="w-[90%] lg:w-[65%] mx-auto flex flex-col items-center text-center  py-28 transition-all">
        <h2 className="mb-10 text-4xl font-semibold text-blue-500 md:text-6xl">
          Projects
        </h2>
        <ProjectItem
          image={SortingVisualizer}
          title="Sorting Visualizer"
          description="A way to show how different sorting algorithms work by slowing them down and visually showing the process, which you can set the side of the array and the sorting speed and choose between different algorithms"
          techStack={["React", "TypeScript", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/sorting-algorithms"
          demo="https://teal-melba-fffa8e.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
