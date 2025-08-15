import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {fade} from '../utils/animation'

export function ExpertiseCard({ title, desc, bullets = [], delay = 0 }) {
  return (
    <motion.div
      {...fade(delay)}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60" /> {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}