// src/components/BackgroundFX3.jsx
import React, { useEffect, useRef } from "react";

export default function BackgroundFX3() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create soft wisps
    const wisps = Array.from({ length: 25 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 80 + 40,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.05 + 0.04 // increased alpha for visibility
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      wisps.forEach(w => {
        w.x += w.speedX;
        w.y += w.speedY;

        // Wrap edges
        if (w.x < -w.radius) w.x = width + w.radius;
        if (w.x > width + w.radius) w.x = -w.radius;
        if (w.y < -w.radius) w.y = height + w.radius;
        if (w.y > height + w.radius) w.y = -w.radius;

        // Draw soft wisp
        const gradient = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.radius);
        gradient.addColorStop(0, `rgba(255,255,255,${w.alpha})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.shadowBlur = w.radius / 1.5; // stronger blur
        ctx.shadowColor = `rgba(255,255,255,${w.alpha})`;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
