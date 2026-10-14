"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';


const navLinks = [
  { label: "Home",       href: "#home",       id: "home" },
  { label: "About",      href: "#about",      id: "about" },
   { label: "Projects",   href: "#projects",   id: "projects" },
  { label: "Skills",     href: "#skills",     id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Writing",     href: "#blogs",     id: "blogs" },
  { label: "Contact",    href: "#contact",    id: "contact" },
];

const bottomNavLinks = [
  {
    label: "Home",
    href: "#home",
    id: "home",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#github",
    id: "github",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];


const moreLinks = [
  {
    label: "About",
    href: "#about",
    id: "about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver — scroll active
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);


  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (moreRef.current && e.target instanceof Node && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    setMoreOpen(false);
  };

  return (
    <>
      <div className='w-full h-30 absolute -z-10'></div>

      {/* ── Desktop Navbar ── */}
      <div className='bg-transparent sticky top-0 z-50 backdrop-blur-sm'>
        <div className="flex justify-between items-center py-4 w-11/12 mx-auto">

          {/* Available badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="font-mono text-lg text-white tracking-wide">Husneara</span>
          </div>

          <div className='flex gap-4 items-center'>
            {/* Desktop nav links */}
            <div className="hidden lg:flex gap-x-4 gap-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.id)}
                    className={`font-mono text-xs lg:text-sm transition-colors duration-200 flex items-center gap-1.5 group ${
                      isActive ? "text-[#00E676]" : "text-[#d4d4d4] hover:text-[#00E676]"
                    }`}
                  >
                    <span className={`transition-colors ${
                      isActive ? "text-[#00E676]" : "text-[#00E676]/20 group-hover:text-[#00E676]/60"
                    }`}>›</span>
                    {link.label}
                    {isActive && <span className="w-1 h-1 rounded-full bg-[#00E676] ml-0.5" />}
                  </Link>
                );
              })}
            </div>

            {/* Logo */}
            {/* <Image src={logo} width={100} height={100} alt="logo" className="w-16" /> */}
          </div>
        </div>
      </div>

      {/* ── Mobile + Tablet Bottom Navigation ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* More popup */}
        {moreOpen && (
          <div
            ref={moreRef}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 rounded-sm border border-[#00E676]/20 bg-[#0f0f0d]/95 backdrop-blur-md overflow-hidden shadow-xl"
          >
            {moreLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleClick(link.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-mono text-xs border-b border-[#00E676]/08 last:border-0 transition-colors duration-200 ${
                    isActive ? "text-[#00E676] bg-[#00E676]/08" : "text-[#8a9a8e] hover:text-[#00E676] hover:bg-[#00E676]/05"
                  }`}
                >
                  <span className="text-[#00E676]/40">›</span>
                  {link.label}
                  {isActive && <span className="w-1 h-1 rounded-full bg-[#00E676] ml-auto" />}
                </Link>
              );
            })}
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex items-center justify-around bg-[#0a0a08]/95 backdrop-blur-md border-t border-[#00E676]/10 px-2 py-2">

          {/* Mobile: ৫টা link + More button */}
          <div className="flex sm:hidden items-center justify-around w-full">
            {bottomNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleClick(link.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-1 rounded-sm transition-all duration-200 ${
                    isActive ? "text-[#00E676]" : "text-[#8a9a8e]/50 hover:text-[#8a9a8e]"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[#00E676]" : "bg-transparent"
                  }`} />
                  {link.icon}
                  <span className="font-mono text-[9px] tracking-wide">{link.label}</span>
                </Link>
              );
            })}
            {/* More button — mobile only */}
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-sm transition-all duration-200 ${
                moreOpen ? "text-[#00E676]" : "text-[#8a9a8e]/50 hover:text-[#8a9a8e]"
              }`}
            >
              <span className="w-1 h-1 rounded-full bg-transparent" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
              <span className="font-mono text-[9px] tracking-wide">More</span>
            </button>
          </div>

          {/* Tablet: all 7 link directly */}
          <div className="hidden sm:flex items-center justify-around w-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const allIcons = [...bottomNavLinks, ...moreLinks];
              const found = allIcons.find((b) => b.id === link.id);
              const icon = found?.icon ?? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              );
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => handleClick(link.id)}
                  className={`flex flex-col items-center gap-1 px-2 py-1 rounded-sm transition-all duration-200 ${
                    isActive ? "text-[#00E676]" : "text-[#8a9a8e]/50 hover:text-[#8a9a8e]"
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[#00E676]" : "bg-transparent"
                  }`} />
                  {icon}
                  <span className="font-mono text-[9px] tracking-wide">{link.label}</span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Mobile + Tablet bottom padding */}
      <div className="lg:hidden h-16" />
    </>
  );
};

export default Navbar;
