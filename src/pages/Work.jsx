import React from "react";
import { motion } from "framer-motion";
import { fade } from "../utils/animation";
import { workData } from "../data/Work";
import { ProjectCard } from "../components/Work";

const Work = () => {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.h2 className="text-3xl font-bold md:text-4xl" {...fade(0)}>
          {workData.heading}
        </motion.h2>

        {/* Subheading */}
        <p className="mt-2 max-w-2xl text-white/70">{workData.subheading}</p>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {workData.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
