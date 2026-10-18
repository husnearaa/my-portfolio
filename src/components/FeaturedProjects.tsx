"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@heroui/react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  ArrowUpRightFromSquare,
} from "@gravity-ui/icons";
import Link from "next/link";

type Project = {
  id: string | number;
  title: string;
  image: string;
  overview: string;
  stack: string[];
};

type FeaturedProjectsProps = {
  data: Project[];
};

export default function FeaturedProjects({ data }: FeaturedProjectsProps) {
  const projects = [...data];

  const slides = projects.slice(0, 3);
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total],
  );

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // autoplay, pauses on hover
  useEffect(() => {
    if (paused || total <= 1) return;

    timerRef.current = setInterval(() => go(1), 6000);

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [paused, go, total]);

  if (!total) return null;

  const project = slides[index];

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 48 : -48,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -48 : 48,
    }),
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05080a] px-6 py-24 lg:px-16"
    >
      {/* faint dot grid, echoes the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        {/* <div className="mb-14">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            projects.map()
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl">
            Things I&apos;ve <span className="text-white">Shipped</span>.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-gray-400 sm:text-base">
            A few builds that went from a blank terminal to something people
            actually use.
          </p>
        </div> */}

        <div className="mb-14">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            My Work
          </span>

          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl">
            Projects I&apos;ve <span className="text-white/60">Built</span>.
          </h2>

          <p className="mt-3 max-w-xl text-sm text-gray-400 sm:text-base">
            A collection of projects showcasing my skills, creativity, and
            passion for building practical web solutions.
          </p>
        </div>

        {/* carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10"
            >
              {/* image — 2/3 width on large screens */}
              <div className="group relative w-full overflow-hidden rounded-xl border border-white/20 lg:w-2/3">
                <div className="aspect-16/10 w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* corner brackets */}
                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-white/70" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-white/70" />

                <span className="absolute left-10 top-3 rounded-full border border-white/40 bg-black/70 px-3 py-1 font-mono text-[11px] text-white">
                  PROJECT_{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* content — 1/3 width on large screens */}
              <div className="flex w-full flex-col justify-center gap-5 lg:w-1/3">
                <span className="font-mono text-xs text-white/80">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded border border-white/25 px-2 py-1 font-mono text-[11px] text-white/90"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={`/projects/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="primary"
                      className="bg-white font-mono text-xs text-black hover:bg-white py-2 px-4 rounded-sm"
                    >
                      <span className="inline-flex items-center gap-2">
                        <ArrowUpRightFromSquare width={16} height={16} />
                        Show Details
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-3 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
              <span>
                {String(index + 1).padStart(2, "0")} —{" "}
                {String(total).padStart(2, "0")}
              </span>

              <button
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white/10"
              >
                <CircleChevronLeft width={16} height={16} />
              </button>

              <button
                onClick={() => go(1)}
                aria-label="Next project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-white hover:bg-white/10"
              >
                <CircleChevronRight width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
