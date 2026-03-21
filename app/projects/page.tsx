"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectDescription from "@/components/ProjectDescription";
import projects from "@/data/projects.json";
import NavBar from "@/components/NavBar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Project = {
  title: string;
  description: string;
  stack: string;
  image?: string;
  link?: string;
  details?: string;
  role?: string;
  content?: string;
};

const PROJECTS = projects as Project[];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const roles = ["All", ...Array.from(new Set(PROJECTS.map(p => p.role).filter(Boolean)))];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.role === filter);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      {/* < NavBar /> */}

      <main className="px-8 md:px-16 py-12 flex-grow">
        <div className="mb-6 inline-block">
          <Link href="/#home" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </div>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6">All Projects</h1>
          
          <div className="flex flex-wrap gap-3">
            {roles.map(role => (
              <button
                key={role as string}
                onClick={() => setFilter(role as string)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === role 
                    ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {role as string}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-white/40">
            No projects found for this role.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[320px] rounded-2xl overflow-hidden border border-white/5 bg-[#111] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)] hover:border-orange-500/40 focus:outline-none flex flex-col"
              >
                {project.image ? (
                  <div className="relative h-44 w-full flex-shrink-0">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                ) : (
                  <div className="relative h-44 w-full flex-shrink-0 bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f]">
                    <span className="absolute bottom-4 right-4 text-5xl font-black text-white/5 leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-orange-100 transition-colors mb-1">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="text-xs text-orange-400 font-bold mb-3">{project.role}</p>
                    )}
                    <ProjectDescription
                      text={project.description}
                      className="text-sm text-white/40 line-clamp-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-white/10 px-8 md:px-16 py-6 text-xs text-white/20 flex justify-between items-center mt-auto">
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
            className="relative bg-[#141414] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
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

              {selectedProject.content && (
                <div className={`mt-8 mb-6 border-t border-white/10 pt-6 prose prose-invert max-w-none text-white/70 
                  [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mb-4 [&>h2]:mt-8
                  [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-white/90 [&>h3]:mb-3 [&>h3]:mt-6
                  [&>p]:mb-4 [&>p]:leading-relaxed
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul>li]:mb-2 
                  [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-6 [&>ol>li]:mb-2
                  [&>a]:text-orange-400 [&>a]:underline hover:[&>a]:text-orange-300
                  [&>strong]:text-white [&>strong]:font-bold
                `}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedProject.content}
                  </ReactMarkdown>
                </div>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
