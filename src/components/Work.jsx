import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
} from "lucide-react";
import {fade} from '../utils/animation'

export function ProjectCard({ p, i }) {
  return (
    <motion.div
      {...fade(i * 0.05)}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-2" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <div className="flex gap-2">
            <a href={p.llink} target="_blank" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs hover:bg-white/10">
              <ExternalLink className="h-4 w-4" />
            </a>
            <a href={p.glink} target="_blank" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs hover:bg-white/10">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-white/70">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
  
}