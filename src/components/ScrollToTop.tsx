// Theme: Terminal / Dark — matches previous sections

"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(percent);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle progress
  const size = 44;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`cursor-pointer fixed bottom-24 right-5 lg:bottom-8 lg:right-8 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative w-11 h-11 flex items-center justify-center">

        {/* SVG circular progress */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 -rotate-90"
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#00E67620"
            strokeWidth={strokeWidth}
          />
          {/* Progress fill */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#00E676"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-150"
            style={{ filter: "drop-shadow(0 0 4px #00E67680)" }}
          />
        </svg>

        {/* Center button */}
        <div className="w-8 h-8 rounded-sm bg-[#0f0f0d]  flex items-center justify-center hover:border-[#00E676]/60 hover:bg-[#00E676]/10 transition-all duration-200">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00E676"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </div>

      </div>
    </button>
  );
}
