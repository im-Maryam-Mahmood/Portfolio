"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Education = () => {
  const [educationData] = useState([
    {
      university: "Your University",
      program: "Your Program",
      year: "Year",
      description: "Your Description",
    },
    // Add more education data as needed
  ]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        <motion.span
          variants={{
            hover: {
              backgroundImage: "linear-gradient(to right, #7928CA, #FF0080)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          Education
        </motion.span>
      </h2>
      <div className="flex flex-col items-center gap-4">
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(index * 0.2)}
            className="flex flex-col items-center gap-2 text-white"
          >
            <h3 className="text-xl font-semibold">{education.university}</h3>
            <p>{education.program}</p>
            <motion.p
              animate={{ y: [-5, 5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              {education.year}
            </motion.p>
            <p>{education.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;