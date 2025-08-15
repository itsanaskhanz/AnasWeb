import React from "react";


const StyleTags = ()=>{
  return (
    <style>{`
      /* Smooth scroll */
      html { scroll-behavior: smooth; }
      /* Marquee */
      .animate-marquee { animation: marquee 22s linear infinite; }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  );
}
export default StyleTags;