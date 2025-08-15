import React from "react";
import { motion } from "framer-motion";
import {fade} from "../utils/animation";
import { navItems } from "../data/NavItems";
import {
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
 return(
     <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
            <div className="flex items-center justify-between px-6 py-3">
              <motion.a
                href="#home"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight"
                {...fade(0, -8)}
              >
                <Sparkles className="h-5 w-5" />
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-whtie">
                  Anas
                </span>
              </motion.a>
              <div className="hidden md:flex items-center gap-6 text-sm">
                {navItems.map((n, i) => (
                  <motion.a
                    key={n.id}
                    href={`#${n.id}`}
                    className="text-white/70 hover:text-white transition-colors"
                    {...fade(i * 0.05, -6)}
                  >
                    {n.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
                {...fade(0.1, -8)}
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
 )
}
export default Navbar;