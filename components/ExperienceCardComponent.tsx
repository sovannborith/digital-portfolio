import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

function ExperienceCardComponent({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px]  snap-center bg-[#292929] px-10 py-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              key={experience._id + technology._id}
              alt={technology.title}
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.startDate).toDateString()}
          {" - "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.endDate).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          {experience?.point?.map((point) => (
            <li key={experience._id + point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardComponent;
