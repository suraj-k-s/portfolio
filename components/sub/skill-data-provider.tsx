"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={`/skills/${src}`} 
        width={width} 
        height={height} 
        alt={name}
        title={name}
        className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#1a1a2e] border border-[#7042f88b] rounded-lg pointer-events-none z-[9999] whitespace-nowrap shadow-lg"
        >
          <span className="text-white text-sm font-medium">{name}</span>
          {/* Tooltip arrow */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-px">
            <div className="border-4 border-transparent border-b-[#7042f88b]"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-[#1a1a2e] mb-[1px]"></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
