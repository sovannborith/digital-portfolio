import React from "react";
import { motion } from "framer-motion";
import SkillCardComponent from "./SkillCardComponent";
import { Skill } from "../typings";
type Props = {
  skills: Skill[];
};

function SkillComponent({ skills }: Props) {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="absolute grid grid-cols-4 gap-5 top-44 md:top-40">
        {skills?.map((skill) => (
          <SkillCardComponent key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillComponent;
