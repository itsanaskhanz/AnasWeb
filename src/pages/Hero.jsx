import React from "react";
import { motion } from "framer-motion";
import { fade } from "../utils/animation";
import { heroContent } from "../data/Hero"; 
import { ArrowRight, Star } from "lucide-react";
import { TrustedBar, TechPill } from "../components/Hero";

const Hero = () => {
  return (
    <section id="home" className="relative isolate pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <motion.div {...fade(0)}>
            {/* Badge */}
            <div className={heroContent.badge.style}>
              <Star className="h-3.5 w-3.5" />
              {heroContent.badge.text}
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {heroContent.heading}
            </h1>
            
            {/* Subheading */}
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              {heroContent.subheading}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {heroContent.buttons.map((btn, idx) => (
                <a key={idx} href={btn.href} className={btn.style}>
                  {btn.label}
                  {btn.icon === "ArrowRight" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-6 text-xs text-white/60">
              {heroContent.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div {...fade(0.1, 30)} className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4">
                  {heroContent.techStack.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-gradient-to-r from-white/10 to-transparent p-5">
                  <p className="text-sm text-white/80">{heroContent.quote}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <TrustedBar />
      </div>
    </section>
  );
};

export default Hero;
