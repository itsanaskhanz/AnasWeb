import React from "react";
import { motion } from "framer-motion";
import { fade } from "../utils/animation";
import { ExpertiseCard } from "../components/Experties";
import { expertiseData } from "../data/Experties";

const Experties = () => {
  return (
    <section id="expertise" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 className="text-center text-3xl font-bold md:text-4xl" {...fade(0)}>
          {expertiseData.heading}
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          {expertiseData.subheading}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertiseData.cards.map((card, idx) => (
            <ExpertiseCard
              key={idx}
              title={card.title}
              desc={card.desc}
              bullets={card.bullets}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experties;
