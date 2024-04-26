import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoOpenOutline } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

function ProjectItem({
  image,
  demo,
  title,
  description,
  techStack,
  srcLink,
  staticImage = false,
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col gap-8 lg:gap-20 p-5 shadow-xl dark:bg-slate-900 text-gray-600 dark:text-gray-300 bg-gray-50 lg:flex-row rounded-3xl w-fit h-[750px] lg:h-[400px] max-w-[570px] lg:max-w-[990px]">
      <div className="mx-auto max-w-[530px] max-h-[360px] overflow-hidden rounded-3xl shadow-md cursor-pointer h-auto ">
        {staticImage ? (
          <img
            className={`${staticImage && "h-full w-fit"}`}
            src={image}
            alt={`${title} image`}
          />
        ) : (
          <img
            className="transition-all duration-[3000ms] ease-linear translate-y-0 hover:-translate-y-[74%]"
            src={image}
            alt={`${title} image`}
          />
        )}
      </div>

      <div className="flex flex-col w-[300px] mx-auto justify-center">
        <h3 className="mb-5 text-2xl font-bold text-blue-500">{title}</h3>
        <p className=" text-lg/6">{description}</p>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 mt-4">
          {techStack.map((item) => (
            <div
              className="px-3 py-1.5 mt-2 bg-white dark:bg-slate-800 rounded-md shadow-md font-semibold text-nowrap"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row content-end mt-8 justify-evenly">
          <button className="px-2 py-1 mx-2 font-semibold transition-all hover:text-blue-500">
            <a
              className="flex items-center justify-center gap-2 text-xl text-nowrap"
              href={srcLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
              <BsGithub />
            </a>
          </button>
          <button className="px-2 py-1 mx-2 font-semibold transition-all hover:text-blue-500">
            <a
              className="flex items-center justify-center gap-2 text-xl text-nowrap"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
              <IoOpenOutline />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
