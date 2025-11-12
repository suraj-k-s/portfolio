"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-visible rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className={`w-full object-contain transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
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
            <span className="text-white text-sm font-medium">{title}</span>
            {/* Tooltip arrow */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-px">
              <div className="border-4 border-transparent border-b-[#7042f88b]"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-[#1a1a2e] mb-[1px]"></div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
