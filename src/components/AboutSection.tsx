import Image from "next/image";
import Link from "next/link";
import myProfileImg from "@/assets/profile-Img.png";

export default function AboutSection() {
  return (
    <section id="about" className=" py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          {/* <span className="font-mono text-white text-sm">›_</span> */}
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            about.me
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Main grid — 11/12 width, centered */}
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Image ── */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white/40" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white/40" />

              {/* Image container */}
              <div className="w-full h-full rounded-sm overflow-hidden border border-white/15 bg-[#1a1a18]">
                {/* ── Replace this div with your <Image /> when ready ── */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2"></div>
                Uncomment when image is ready:
                <Image
                  src={myProfileImg}
                  alt="Husneara — Full Stack Web Developer"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1a1a18] border border-white/20 px-4 py-2 rounded-sm whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-white text-xs">
                  open to work
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            {/* Title */}
            <div>
              <h2 className="font-mono text-3xl md:text-4xl font-black text-white leading-tight">
                Husneara Parvin Popy,
              </h2>
              <h2 className="font-mono text-3xl md:text-4xl font-black text-white/70 leading-tight">
                Developer by Passion.
              </h2>
            </div>

            {/* Story paragraphs */}
            <div className="flex flex-col gap-3">
              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                What started as curiosity about what happens behind a click grew
                into a passion for building web applications. Through hands-on
                experience at{" "}
                <span className="text-white font-mono">
                  professional development teams
                </span>
                , I&apos;ve built{" "}
                <span className="text-white font-mono">15+ projects</span> and
                gained experience connecting{" "}
                <span className="text-white/60 font-mono">frontend</span>,
                <span className="text-white/60 font-mono">backend</span>, and{" "}
                <span className="text-white/60 font-mono">databases</span> to
                create practical, reliable solutions.
              </p>

              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                Beyond coding, creativity finds its way into writing and
                translation. Whether exploring new technologies or solving a
                challenging problem, there&apos;s always something new to
                discover, build, and improve.
              </p>

              {/* CTA line */}
              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                I&apos;m just one message away —{" "}
                <Link
                  href="https://wa.me/8801629270755"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all"
                >
                  message me!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
