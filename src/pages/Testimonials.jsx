import React from "react";
import { motion } from "framer-motion";
import { fade } from "../utils/animation";
import { testimonialsData } from "../data/Testimonials";
import { Testimonial } from "../components/Testimonials";

const Testimonials = () => {
  const { heading, subheading, testimonials } = testimonialsData;

  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 className="text-3xl font-bold md:text-4xl" {...fade(0)}>
          {heading}
        </motion.h2>

        <p className="mt-2 max-w-2xl text-white/70">{subheading}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
