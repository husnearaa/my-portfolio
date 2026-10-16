"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

const brandColors = {
  HTML: "#FFFFFF",
  CSS: "#FFFFFF",
  JavaScript: "#FFFFFF",
  React: "#FFFFFF",
  "Next.js": "#FFFFFF",
  "Tailwind CSS": "#FFFFFF",
  HeroUI: "#FFFFFF",
  "Node.js": "#FFFFFF",
  "Express.js": "#FFFFFF",
  MongoDB: "#FFFFFF",
  "Google OAuth": "#FFFFFF",
  Railway: "#B847FF",
  Vercel: "#ffffff",
  Netlify: "#FFFFFF",
};

const categories = [
  {
    label: "Frontend",
    comment: "What the user sees",
    accent: "#FFFFFF",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Typescript" },
      { name: "HeroUI" },
    { name: "Redux" },
    ],
  },
  {
label: "Backend & Database",
comment: "Powering the logic behind the scenes",
    accent: "#FFFFFF",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    { name: "Redis" },
    ],
  },
  {
label: "Authentication & Deployment",
comment: "Securing apps and bringing them to life",
    accent: "#FFFFFF",
    skills: [{ name: "Google OAuth" }, { name: "Vercel" }, { name: "Netlify" }],
  },
];

type Skill = {
  name: string;
};

type SkillItemProps = {
  skill: Skill;
  accent: string;
};

type Category = {
  label: string;
  comment: string;
  accent: string;
  skills: Skill[];
};

type CategoryCardProps = {
  cat: Category;
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          {/* <span className="font-mono text-white text-sm">›_</span> */}
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            skills.stack
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Technology & <span className="text-white">Skills</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            My skill set is always evolving.
          </p>
        </div>

        {/* Category columns */}
        <div className="w-11/12 mx-auto grid grid-cols-1 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }: CategoryCardProps) {
  return (
    <div
      className="glow-card rounded-sm backdrop-blur-[1.5px] border p-6 flex flex-col gap-6"
      style={
        {
          borderColor: `${cat.accent}20`,
          background: `${cat.accent}05`,
          "--glow": `0 0 20px ${cat.accent}15, 0 0 60px ${cat.accent}08, inset 0 0 20px ${cat.accent}05`,
          "--glow-border": `${cat.accent}40`,
        } as CSSProperties
      }
    >
      {/* Card header */}
      <div className="border-b pb-4" style={{ borderColor: `${cat.accent}15` }}>
        <h3
          className="font-mono font-bold text-base tracking-wide"
          style={{ color: cat.accent }}
        >
          {cat.label}
        </h3>
        <p
          className="font-mono text-xs mt-1"
          style={{ color: `${cat.accent}50` }}
        >
          {cat.comment}
        </p>
      </div>

      {/* Skills grid — 4 per row */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {cat.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} accent={cat.accent} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill, accent }: SkillItemProps) {
  const brandColor =
    brandColors[skill.name as keyof typeof brandColors] || accent;

  return (
    <div className="group flex flex-col items-center gap-2 cursor-default">
      <div className="w-8 h-8 md:w-12 md:h-12 lg:h-16 lg:w-16 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:-translate-y-1">
        <Image
          src={`/icons/${skill.name
            .toLowerCase()
            .trim()
            .replace(/[\s.]+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")}.svg`}
          alt={skill.name}
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>
      <span
        className="font-mono text-[8px] md:text-[16px] text-center leading-tight tracking-wide w-full"
        style={{ color: brandColor }}
      >
        {skill.name}
      </span>
    </div>
  );
}
