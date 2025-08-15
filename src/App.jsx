import React from "react";
import {Navbar,Hero,Experties,Work,Testimonials,Contact,StyleTags,BackgroundFX} from './PagesImport'

/**
 * Ultra-premium one-page portfolio (single route)
 * - Tailwind CSS + Framer Motion + Lucide icons
 * - Glass, gradients, parallax blobs, tasteful motion, and luxury spacing
 * - Drop-in replacement for App.jsx
 */
const App = () => {
  return (
    <div className="min-h-screen bg-[#05060a] text-white selection:bg-white/20 px-2">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Experties />
      <Work />
      <Testimonials />
      <Contact />
      <StyleTags />
    </div>
  );
}
export default App;
