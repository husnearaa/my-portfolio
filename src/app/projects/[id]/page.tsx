import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { projects as projectData } from "../../../../public/data";
import type { Project, ProjectPageProps } from "@/types/project";


  const Page = async ({ params }: ProjectPageProps) => {
  const { id } = await params;
const project = projectData.find((pr: Project) => String(pr.id) === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white font-mono">Project_not_found</p>
      </div>
    );
  }

  const {
    title = '',
    image = '',
    shortDescription = '',
    overview = '',
    stack = [],
    liveUrl = '',
    githubUrl = '',
    challenges = [],
    futurePlans = [],
  } = project;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} />
        Projects
        </Link>

        {/* Title */}
        <div className="mb-8">
          <p className="font-mono text-white text-sm mb-2">Project_details</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {shortDescription && (
            <p className="mt-4 text-white/60 text-lg max-w-2xl">
              {shortDescription}
            </p>
          )}
        </div>

        {/* Image - 16:9 */}
        {image && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_0_40px_-15px_rgba(255,255,255,0.4)] mb-10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-white transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-sm font-medium hover:border-white/50 hover:text-white transition-colors"
            >
              <FaGithub size={16} />
              Source Code
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="md:col-span-2 space-y-10">
            {overview && (
              <section>
                <h2 className="font-mono text-white text-sm mb-3">Overview</h2>
                <p className="text-white/70 leading-relaxed">{overview}</p>
              </section>
            )}

            {challenges.length > 0 && (
              <section>
                <h2 className="font-mono text-white text-sm mb-4">Challenges</h2>
                <ul className="space-y-3">
                  {challenges.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                      <span className="text-white font-mono shrink-0">{`0${i + 1}`}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {futurePlans.length > 0 && (
              <section>
                <h2 className="font-mono text-white text-sm mb-4">Future_plans</h2>
                <ul className="space-y-3">
                  {futurePlans.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/70 leading-relaxed">
                      <span className="text-white shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {stack.length > 0 && (
              <div className="border border-white/10 rounded-xl p-5">
                <h2 className="font-mono text-white text-sm mb-4">Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;