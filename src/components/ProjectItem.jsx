import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProjectItem({ image, demo, title, description, techStack, srcLink }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col gap-12 p-5 shadow-xl bg-gray-50 md:flex-row rounded-3xl">
      <div className="box-content h-auto overflow-hidden">
        <img
          className="mx-auto w-[500px] h-[400px] object-cover object-top hover:object-bottom image-scroll ease-linear overflow-hidden rounded-3xl cursor-pointer shadow-md"
          src={image}
          alt={`${title} image`}
        />
      </div>

      <div className="w-full">
        <h3 className="mb-5 text-xl font-bold">{title}</h3>
        <p className="text-gray-600 text-lg/6">{description}</p>
        <div className="flex flex-row items-center justify-center w-full gap-4 mt-4">
          {techStack.map((item) => (
            <div
              className="px-3 py-1.5 mt-2 bg-white rounded-md shadow-md"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between px-4 mt-8 mb-4">
          <button className="px-2 py-1 mx-2 font-semibold ">
            <a href={srcLink} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </button>
          <button className="px-2 py-1 mx-2 font-semibold">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
