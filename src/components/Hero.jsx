import {
  Sparkles,
} from "lucide-react";
import { heroContent } from "../data/Hero";


export function TechPill({ label }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="absolute inset-0 translate-y-[110%] bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
      <div className="relative flex items-center justify-between gap-4">
        <span className="text-sm">{label}</span>
        <Sparkles className="h-4 w-4 text-white/60" />
      </div>
    </div>
  );
}

export function TrustedBar() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      {/* Side dark fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05060a]/80 via-transparent to-[#05060a]/80 rounded-2xl" />

      {/* Moving text */}
      <div className="animate-marquee whitespace-nowrap py-4 text-white/40">
        {heroContent.trustedLogos.map((logo) => (
          <span
            key={logo}
            className="mx-8 inline-flex items-center gap-2 text-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />{" "}
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
