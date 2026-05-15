import React from 'react';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import brandforgeImg from '../assets/brandforge.png';
import tripzyImg from '../assets/tripzy.png';
import chatlyImg from '../assets/chatly-pic.png';

const Projects = () => {
  const projects = [
    {
      title: "BrandForge",
      subtitle: "Creator Opportunity & Brand Campaign Platform",
      description:
        "A platform enabling creators to discover real opportunities while allowing brands to receive multiple creative responses for campaigns. Built RESTful APIs for authentication, campaign management, and structured whole idea submissions. Streamlined brand-creator workflow, helping reduce traditional marketing effort and cost.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/RohitChintalapudi/BrandForge_backend",
      live: "https://brand-forge-landingpage.vercel.app/",
      image: brandforgeImg,
    },
    {
      title: "Tripzy",
      subtitle: "Flight Booking System",
      description:
        "A full-stack flight booking system created using the MERN stack (MongoDB Atlas, React, Node.js, Express) and Tailwind CSS. It features dual dashboards: a customer dashboard for booking flights and viewing profiles, and a comprehensive admin dashboard. The admin has exclusive capabilities to perform full CRUD operations (create, read, edit, delete flights) and manage pricing. The project also features an AI assistant for updates and is fully deployed on Render.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Render",
      ],
      github: "https://github.com/RohitChintalapudi/Tripzy",
      live: "https://tripzy-frontend-sb5l.onrender.com/",
      image: tripzyImg,
    },
    {
      title: "Chatly",
      subtitle: "Real-Time Chatting Platform with AI Assistant",
      description:
        "A full-stack real-time chatting application with an integrated AI assistant, secure JWT authentication, instant messaging, media sharing, and WebSocket-powered live communication for seamless user interaction.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
      github: "https://github.com/RohitChintalapudi/Chatly",
      live: "https://chatly-k5p7.onrender.com/",
      image: chatlyImg,
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" effect="blur" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            My <span className="text-[var(--color-brand-orange)] text-glow">Portfolio</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A selection of my recent full-stack development projects, demonstrating my ability to build complex, scalable applications.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-16">
          {projects.map((project, idx) => (
            <AnimatedSection 
              key={project.title} 
              delay={0.1} 
              direction={idx % 2 === 0 ? "left" : "right"}
              effect="scale"
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden glass p-2 border border-[var(--border-color)] hover:border-[var(--color-brand-orange)]/50 transition-colors duration-500 box-glow">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
                  <h4 className="text-[var(--color-brand-orange)] font-medium text-base md:text-lg text-glow">{project.subtitle}</h4>
                </div>
                
                <div className="glass p-6 rounded-2xl mb-6 relative z-20 md:-ml-8 border border-[var(--border-color)]">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8 relative z-20">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-sm font-mono text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-3 py-1 rounded-md border border-[var(--border-color)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 relative z-20">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-primary)] font-medium transition-all active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-dark)] text-white font-medium transition-all box-glow transform hover:-translate-y-1 active:scale-95"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
