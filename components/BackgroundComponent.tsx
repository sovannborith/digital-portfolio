import React from 'react'
import { motion } from "framer-motion";
type Props = {}

function BackgroundComponent({}: Props) {
  return (
    <motion.div className="relative flex justify-center items-center mt-20"
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "30%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 2.5,
        }}
    >
        <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-52 animate-ping"/>
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping"/>
        <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 animate-ping"/>
        <div className="absolute border border-[#F7AB0A] rounded-full h-[500px] w-[500px] mt-52 animate-pulse"/>
    </motion.div>
  )
}

export default BackgroundComponent