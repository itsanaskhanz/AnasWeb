import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {fade} from '../utils/animation'

export function Testimonial({ quote, name, role, i }) {
  return (
    <motion.blockquote
      {...fade(i * 0.05)}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.08),transparent)]" />
      <p className="relative text-white/90">“{quote}”</p>
      <footer className="relative mt-4 text-sm text-white/70">
        <span className="font-medium text-white">{name}</span> • {role}
      </footer>
    </motion.blockquote>
  );
}