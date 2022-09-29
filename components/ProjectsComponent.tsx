import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};

function ProjectsComponent({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:text-left xl:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 top-32 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center "
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              alt={project?.title}
              src={urlFor(project?.image).url()}
              className="absolute w-[450px] h-[300px] rounded-lg object-fill object-center top-[10px]"
            />

            <div className="relative space-y-5 px-0 md:px-10 max-w-6xl top-[-30px]">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#7FAB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((technology) => (
                  <img
                    className="h-10 w-10 rounded-full"
                    key={project._id + technology._id}
                    alt={technology.title}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
}

export default ProjectsComponent;
