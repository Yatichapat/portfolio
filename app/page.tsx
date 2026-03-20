"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ProjectDescription from "../components/ProjectDescription";
import projects from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  stack: string;
  image?: string;
  link?: string;
  details?: string;
  role?: string;
};

const PROJECTS = projects as Project[];

// Bento slot classes — cycles through for visual variety
const BENTO_CLASSES = [
  "col-span-1 row-span-2", // tall
  "col-span-2 row-span-1", // wide short
  "col-span-1 row-span-1", // square
  "col-span-2 row-span-2", // tall wide
  "col-span-1 row-span-1", // small
  "col-span-2 row-span-1", // wide
];

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Python", "Django", "Figma", "Docker", "Git", "FastAPI",
];

const SERVICES = [
  { num: "#01", label: "Frontend Dev" },
  { num: "#02", label: "UI/UX Design" },
  { num: "#03", label: "Data Analytics" },
  { num: "#04", label: "Machine Learning" },
];

const getProjectDisplayIndex = (i: number) =>
  String((i % PROJECTS.length) + 1).padStart(2, "0");

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Triple the projects so the infinite loop looks seamless
  const loopedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ── HERO ──────────────────────────────────────── */}
      <header id="home" className="relative overflow-hidden min-h-[85vh] flex flex-col">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-20 w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6F0004] via-red-600 to-orange-900 opacity-60 blur-[2px]" />
            <div className="absolute left-0 top-0 h-full w-[55%] bg-gradient-to-l from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />
          </div>
        </div>

        <div className="relative z-20 flex flex-col h-full">
          <NavBar />

          <div className="relative flex flex-col lg:flex-row lg:items-end min-h-[85vh] lg:min-h-[80vh]">
            <div className="absolute inset-x-0 top-0 bottom-0 lg:inset-x-auto lg:inset-y-0 lg:right-30 lg:w-[46vw] lg:max-w-[600px] pointer-events-none">
              <Image src="/profile.png"
                fill priority
                alt="Profile Picture"
                className="object-contain object-center lg:object-bottom opacity-80 lg:opacity-100"
                sizes="(max-width: 1024px) 100vw, 46vw" />
              <div className="absolute inset-0" />
            </div>

            <div className="relative z-30 px-6 lg:px-16 pb-24 lg:pb-48 pt-28 lg:pt-4 w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left mt-auto lg:mt-5">
              <p className="text-xs lg:text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                Software Engineering Student
              </p>
              <h1 className="text-5xl lg:text-[clamp(3rem,7vw,7rem)] font-black leading-[1.1] lg:leading-[0.9] tracking-tight mb-6">
                Hi, I'm<br className="hidden lg:block" /><span className="text-white"> Yatichapat</span>
              </h1>
              <div className="max-w-lg lg:ml-1">
                <p className="text-lg text-white/60 leading-relaxed mb-2 font-medium tracking-wide">
                  I turn ideas into interfaces.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  A Software Engineering student who loves crafting clean UIs,
                  digging into data, and connecting the dots between frontend and backend.
                  Still learning, always building.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-30 border-t border-white/10 bg-[#0a0a0a]/65 backdrop-blur-[1px] px-8 md:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.num}>
                <p className="text-orange-500 text-xs font-bold mb-1">{s.num}</p>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── SKILLS TICKER ─────────────────────────────── */}
      <section className="border-y border-white/10 bg-[#111] py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} className="text-sm font-semibold text-white/30 uppercase tracking-widest">{s}</span>
          ))}
        </div>
      </section>

      <main className="flex flex-col gap-24 py-24">

        {/* ── ABOUT ─────────────────────────────────────── */}
        <section id="about" className="px-8 md:px-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Behind the Code</p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Building Systems<br />That Balance<br />
              <span className="text-white/30">Experience & Data</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white/60 leading-relaxed text-lg">
              I'm a Software Engineering student with a hands-on background in frontend development,
              UI/UX design, data analytics, and machine learning. I love the process of turning messy
              problems into clean, working software — and I'm always eager to keep learning.
            </p>
            <p className="text-white/60 leading-relaxed text-lg">
              Whether it's building a responsive web app, designing an intuitive interface, analyzing
              data to find insights, or training a machine learning model, I enjoy connecting the dots
              between different disciplines to create something that works and looks great.
            </p>
            <p className="text-white/50 text-md leading-relaxed">Let's have a look at some of my work</p>
            <a href="#projects" className="self-start flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-400 transition-all">
              View My Work
              <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </a>
          </div>
        </section>

        {/* ── PROJECTS — bento grid ───────── */}
        <section id="projects" className="px-8 md:px-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Selected Work</p>
              <h2 className="text-3xl md:text-4xl font-black">Featured Projects</h2>
            </div>
            <p className="text-white/30 text-sm hidden md:block">Click any card for details</p>
          </div>

          {/* Scrolling Bento Grid Layout */}
          <div className="overflow-hidden w-full relative pb-4">
            <div className="flex w-max animate-scroll-left">
              {[0, 1].map((gridIndex) => (
                <div
                  key={`grid-group-${gridIndex}`}
                  className="grid gap-4 pr-4 grid-flow-col-dense"
                  style={{
                    gridTemplateRows: 'repeat(2, 220px)',
                    gridAutoColumns: '280px'
                  }}
                >
                  {loopedProjects.map((project, i) => {
                    const gridClass = BENTO_CLASSES[i % BENTO_CLASSES.length];
                    return (
                      <button
                        key={`bento-${gridIndex}-${project.title}-${i}`}
                        onClick={() => setSelectedProject(project)}
                        className={`
                          group relative flex-shrink-0 ${gridClass} h-full w-full
                          rounded-2xl overflow-hidden border border-white/5 bg-[#111]
                          cursor-pointer transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]
                          hover:border-orange-500/40 focus:outline-none
                        `}
                      >
                        {/* Background: image or gradient placeholder */}
                        {project.image ? (
                          <Image
                            src={project.image}
                            fill
                            alt={project.title}
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f]">
                            <span className="absolute bottom-4 right-4 text-7xl font-black text-white/5 leading-none select-none">
                              {getProjectDisplayIndex(i)}
                            </span>
                          </div>
                        )}

                        {/* Always-visible gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        {/* Orange glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* "View Details" pill — appears on hover */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                          <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            View Details
                          </span>
                        </div>

                        {/* Card text at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                          <span className="text-orange-400 text-[10px] font-bold block mb-0.5">
                            #{getProjectDisplayIndex(i)}
                          </span>
                          <h3 className="text-sm font-bold leading-tight group-hover:text-orange-100 transition-colors">
                            {project.title}
                          </h3>
                          {project.role && (
                            <p className="text-[10px] text-orange-300/80 font-bold mb-0.5">{project.role}</p>
                          )}
                          <ProjectDescription
                            text={project.description}
                            className="text-[11px] text-white/40 mt-0.5 line-clamp-1"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────── */}
        <section id="contact" className="mx-8 md:mx-16 bg-[#111] rounded-3xl p-10 md:p-16 border border-white/5">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">Let's Work<br />Together</h2>
          <p className="text-white/50 max-w-lg mb-8 leading-relaxed">
            Interested in working together? I'm open to internships, freelance projects, and collaborations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:yatichapat.d@gmail.com"
              aria-label="Email me"
              className="flex items-center justify-center w-14 h-14 border border-white/20 rounded-full hover:border-orange-700 transition-all"
            >
              <Image src="/gmail.png" alt="Gmail" width={25} height={25} />
            </a>
            <a href="https://www.linkedin.com/in/yatichapat-dechaeamsakul-507864243/" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-14 h-14 border border-white/20 rounded-full hover:border-orange-500 transition-all">
                <Image src="/linkedin-icon.svg" alt="LinkedIn" width={25} height={25} />
              </a>
            <a href="https://github.com/yatichapat" 
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-14 h-14 border border-white/20 rounded-full hover:border-orange-500 transition-all">
              <Image src="/github-icon.svg" alt="GitHub" width={25} height={25} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-8 md:px-16 py-6 text-xs text-white/20 flex justify-between items-center">
        <span>© {new Date().getFullYear()} Yatichapat Dechaeamsakul</span>
        <span className="uppercase tracking-widest">All rights reserved</span>
      </footer>

      {/* ── PROJECT MODAL ─────────────────────────────── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-[#141414] border border-white/10 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.image && (
              <div className="relative w-full h-52 rounded-t-3xl overflow-hidden">
                <Image src={selectedProject.image} fill alt={selectedProject.title} className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>
            )}

            <div className="p-8">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Project</p>
              <h3 className="text-2xl font-black mb-4">{selectedProject.title}</h3>
              {selectedProject.role && (
                <p className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {selectedProject.role}
                </p>
              )}
              <ProjectDescription
                text={selectedProject.description}
                className="text-white/60 leading-relaxed mb-4"
              />

              {selectedProject.details && (
                <p className="text-white/40 text-sm leading-relaxed mb-6">{selectedProject.details}</p>
              )}

              <div className="border-t border-white/10 pt-4 mt-2">
                <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">Tech Stack</p>
                <p className="text-sm text-white/60">{selectedProject.stack}</p>
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank" rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-400 transition-all"
                >
                  View Project
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite reverse;
        }

        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 120s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}