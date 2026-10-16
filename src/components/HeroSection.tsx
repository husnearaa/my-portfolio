"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import myProfileImg from "@/assets/profile-Img.png";


const socialLinks = [
  { name: "GitHub", href: "https://github.com/husnearaa", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hosneara-popy/",
    icon: FaLinkedin,
  },
    { name: "X", href: "https://x.com/hosneara_popy", icon: FaSquareXTwitter },
    { name: "WhatsApp", href: "https://wa.me/8801629270655", icon: FaWhatsapp },
];

const skillStack = ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL"];

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen">
      <section className="w-11/12 mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">
        <div className="w-full mt-4"></div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-6">
          {/* ── Top: Photo (background removed, no frame/circle) ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[460px] lg:h-[460px] xl:w-[520px] xl:h-[520px]">
              {/* Soft white glow behind the cutout */}
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75" />
              <Image
                src={myProfileImg}
                alt="Husneara — Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1280px) 460px, 520px"
                className="object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(255,255,255,0.12)]"
              />
            </div>
          </div>

          {/* ── Bottom: Text Content ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 order-2 lg:order-1 pb-6 lg:pb-12">
            {/* Title */}
            <h1 className="font-mono text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              {/* <span className="text-white">{">_"}</span> */}
              Full Stack <br />
              Web <span className="text-white">Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-mono">
              Building Innovative, Scalable & User-Friendly Web Applications.
              <span className="text-white">
                Let’s Turn Your Ideas into Powerful Web Experiences!
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-3 pt-2 w-full">
              {/* Download CV Button */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  size="lg"
                  className="bg-white text-black font-mono font-bold tracking-wide hover:bg-gray-200 transition-colors px-13 rounded-sm py-3 text-sm"
                >
                  {/* <a
                    href="/Husneara_FullStack_Resume.pdf"
                    download="Husneara_FullStack_Resume.pdf"
                    className="inline-flex items-center"
                  >
                    View Resume
                  </a> */}
                  <Link
                    href="https://drive.google.com/file/d/1x-ZVjqVuyLda2nAM_-Lx0DBrpMXDYbYg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    View Resume
                  </Link>
                </Button>
              </div>

              {/* Social icon buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-white/20 text-white rounded-sm bg-white/5 hover:border-white/50 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {skillStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 border border-white/20 text-gray-300 rounded-sm bg-white/5 hover:border-white/50 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
