import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import TiltCard from './TiltCard';
import Marquee from './Marquee';
import chatlyImg from '../assets/chatly-thumbnail.png';
import learnflowImg from '../assets/learnflow-ai.png';
import nexoraImg from '../assets/nexora.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "Nexora",
      subtitle: "AI-Powered Codebase Intelligence Platform",
      description:
        "An AI-powered platform that analyzes GitHub repositories to help developers understand complex codebases faster. Built AST-based analysis to extract symbols, imports, exports, routes, and relationships, combined with semantic retrieval via pgvector, RAG, and LangGraph.",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "pgvector",
        "RAG",
        "LangGraph",
        "Groq",
      ],
      github: "https://github.com/RohitChintalapudi/Nexora",
      live: "https://nexora-codebase.vercel.app/",
      image: nexoraImg,
      badge: "AI & DevTools",
    },
    {
      title: "Chatly",
      subtitle: "Real-Time Chatting Platform with AI Assistant",
      description:
        "A full-stack, real-time communication platform featuring WebRTC audio rooms, instant WebSocket messaging, an integrated AI assistant, secure JWT authentication, and seamless media sharing.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Vercel", "Render"],
      github: "https://github.com/RohitChintalapudi/Chatly",
      live: "https://chatly-k5p7.onrender.com/",
      image: chatlyImg,
      badge: "Full Stack",
    },
    {
      title: "LearnFlow AI",
      subtitle: "AI-Powered Learning Workspace",
      description:
        "Context-aware AI learning platform helping students study smarter from documents. Provides personalized explanations, notes, quizzes, interview prep, mind maps, analogies, progress analytics, and interactive simulations in a unified workspace.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "LangGraph",
        "LangFuse",
        "PGVector",
        "Better Auth",
      ],
      github: null,
      live: "https://learnflow-ai-prod.vercel.app/",
      image: learnflowImg,
      badge: "EdTech AI",
    },
  ];

  // Repeat projects so marquee is always lush and seamlessly loops on any screen width
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-24 relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-12">
        <AnimatedSection direction="up" effect="blur" className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-[var(--border-color)] text-xs font-mono text-[var(--color-brand-orange)] mb-4">
            <Sparkles size={13} />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Featured <span className="text-[var(--color-brand-orange)] text-glow">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
            A continuous showcase of my recent full-stack & AI applications. Hover over any project to pause and explore!
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative">
        <Marquee speed={40} pauseOnHover={true} gap="2rem" fade={true} className="py-4">
          {marqueeProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="w-[340px] sm:w-[400px] md:w-[460px] flex flex-col shrink-0 group/card"
            >
              <TiltCard
                max={12}
                glare={true}
                className="h-full flex flex-col justify-between glass p-5 rounded-3xl border border-[var(--border-color)] hover:border-[var(--color-brand-orange)]/60 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(249,115,22,0.22)]"
              >
                {/* Card Top: Image Preview */}
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-5 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0e0e12] to-[#1a1412] flex flex-col items-center justify-center p-6">
                      <h4 className="text-xl font-bold text-[var(--text-primary)]">{project.title}</h4>
                    </div>
                  )}

                  {/* Badge */}
                  {project.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-black/70 backdrop-blur-md text-[var(--color-brand-orange)] border border-[var(--color-brand-orange)]/30">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover/card:text-[var(--color-brand-orange)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--color-brand-orange)] font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2.5 py-0.5 rounded-md border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="text-[11px] font-mono text-[var(--color-brand-orange)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-md border border-[var(--border-color)]">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--border-color)] mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl glass hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-primary)] text-xs md:text-sm font-medium transition-all active:scale-95"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-white text-xs md:text-sm font-semibold transition-all box-glow active:scale-95"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </TiltCard>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Projects;
