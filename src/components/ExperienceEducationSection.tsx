"use client";

// import Image from "next/image";


type ExperienceItem = {
  id: number;
  role: string;
  department: string | null;
  company: string;
  type: string;
  description: string;
//   logo: string;
  accentColor: string;
  generic: boolean;
};

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  year: string;
//   logo: string;
  accentColor: string;
  generic: boolean;
};

type TimelineItem = {
  id: number;
  role?: string;
  department?: string | null;
  company?: string;
  type?: string;
  description?: string;
  degree?: string;
  institution?: string;
  year?: string;
//   logo: string;
  accentColor: string;
  generic: boolean;
};

type GenericLogoProps = {
  label: string | undefined;
  accent: string;
};

type LogoBoxProps = {
  item: TimelineItem;
};

type TimelineCardProps = {
  item: TimelineItem;
  isLast: boolean;
};

// EXPERIENCE DATA
const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Jr. Full-Stack Developer",
    department: "Development Team",
    company:  "Tender Trading Inc",
    type: "Full-time",
    description:
     "Developed and optimized full-stack web applications, built secure APIs, and managed deployments across multiple platforms to ensure reliable performance.",
    // logo: "/logos/10ms.png",
    accentColor: "#FFFFFF",
    generic: false,
  },
];

// EDUCATION DATA
const education: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Software Engineering",
    institution:
      "Daffodil International University",
    year: "2020",
    // logo: "/logos/alhaiatul.png",
    accentColor: "#FFFFFF",
    generic: false,
  },
  {
    id: 4,
    degree: "HSC",
    institution: "Akber Ali College",
    year: "2015",
    // logo: "/logos/bou.png",
    accentColor: "#FFFFFF",
    generic: false,
  },
];

// GENERIC LOGO PLACEHOLDER
function GenericLogo({ label, accent }: GenericLogoProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-sm"
      style={{
        background: `${accent}15`,
        border: `1px solid ${accent}25`,
      }}
    >
      <span
        className="font-mono text-base font-bold"
        style={{ color: `${accent}80` }}
      >
        {label!.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

// LOGO BOX
function LogoBox({ item }: LogoBoxProps) {
  if (item.generic) {
    return (
      <GenericLogo
        label={item.institution || item.company}
        accent={item.accentColor}
      />
    );
  }

//   return (
//     <div className="relative w-full h-full bg-white rounded-sm overflow-hidden">
//       <Image
//         src={item.logo}
//         alt={item.company || item.institution || ""}
//         fill
//         className="object-cover"
//       />
//     </div>
//   );
}

// EXPERIENCE CARD
function ExperienceCard({ item, isLast }: TimelineCardProps) {
  return (
    <div className="relative flex gap-5 group backdrop-blur-[1.5px]">
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1 z-10 ring-4 ring-[#0f0f0d] transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: item.accentColor }}
        />

        {!isLast && (
          <div
            className="w-px flex-1 mt-1 min-h-[2rem]"
            style={{
              background: `linear-gradient(to bottom, ${item.accentColor}50, transparent)`,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 p-4 rounded-sm border transition-all duration-300 group-hover:translate-x-1"
        style={{
          borderColor: `${item.accentColor}20`,
          background: `${item.accentColor}06`,
        }}
      >
        {/* Top row: logo + text + badge */}
        <div className="flex items-start gap-3">
          {/* Logo */}
          <div className="w-14 h-14 shrink-0 rounded-sm overflow-hidden">
            <LogoBox item={item} />
          </div>

          {/* Text block */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Badge */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-mono font-bold text-sm text-white leading-snug">
                  {item.role}
                </h4>

                {item.department && (
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: `${item.accentColor}70` }}
                  >
                    {item.department}
                  </span>
                )}
              </div>

              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-sm flex-shrink-0 whitespace-nowrap self-start"
                style={{
                  color: item.accentColor,
                  background: `${item.accentColor}15`,
                  border: `1px solid ${item.accentColor}30`,
                }}
              >
                {item.type}
              </span>
            </div>

            {/* Company name */}
            <p
              className="font-mono text-sm font-semibold mt-1"
              style={{ color: item.accentColor }}
            >
              @ {item.company}
            </p>

            {/* Description */}
            <p className="font-mono text-xs text-[#8a9a8e] mt-1.5 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// EDUCATION CARD
function EducationCard({ item, isLast }: TimelineCardProps) {
  return (
    <div className="relative flex gap-5 group backdrop-blur-[1.5px]">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1 z-10 ring-4 ring-[#0f0f0d] transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: item.accentColor }}
        />

        {!isLast && (
          <div
            className="w-px flex-1 mt-1 min-h-[2rem]"
            style={{
              background: `linear-gradient(to bottom, ${item.accentColor}50, transparent)`,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 p-4 rounded-sm border transition-all duration-300 group-hover:translate-x-1"
        style={{
          borderColor: `${item.accentColor}20`,
          background: `${item.accentColor}06`,
        }}
      >
        <div className="flex items-start gap-3">
          {/* Logo */}
          <div className="w-14 h-14 flex-shrink-0 rounded-sm overflow-hidden">
            <LogoBox item={item} />
          </div>

          {/* Text block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-mono font-bold text-sm text-white leading-snug flex-1">
                {item.degree}
              </h4>

              {/* Year badge */}
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-sm flex-shrink-0 whitespace-nowrap self-start"
                style={{
                  color: item.accentColor,
                  background: `${item.accentColor}15`,
                  border: `1px solid ${item.accentColor}30`,
                }}
              >
                {item.year}
              </span>
            </div>

            {/* Institution */}
            <p
              className="font-mono text-sm font-semibold text-[#bac2bd] mt-1"
            //   style={{ color: item.accentColor }}
            >
              @ {item.institution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// MAIN SECTION
export default function ExperienceEducationSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          {/* <span className="font-mono text-[#00E676] text-sm">›_</span> */}
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            experience.education
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Education &{" "}
            <span className="text-white">Background</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            Where I&apos;ve worked and what I&apos;ve studied
          </p>
        </div>

        {/* Two columns */}
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">
                Experience
              </span>
              <div className="flex-1 h-px bg-white/20" />
              <span className="font-mono text-[10px] text-white/40">
                {experiences.length} roles
              </span>
            </div>

            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">
                Education
              </span>
              <div className="flex-1 h-px bg-white/20" />
              <span className="font-mono text-[10px] text-white/40">
                {education.length} degrees
              </span>
            </div>

            {education.map((item, index) => (
              <EducationCard
                key={item.id}
                item={item}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}