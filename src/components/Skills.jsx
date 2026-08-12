import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Code2, Layers, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", color: "#A8B9CC" },
        { name: "C++", color: "#00599C" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Python", color: "#3776AB" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", color: "#E34F26" },
        { name: "CSS", color: "#1572B6" },
        { name: "React.js", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "React Native", color: "#61DAFB" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#E34F26" },
        { name: "MongoDB", color: "#47A248" },
        { name: "MySQL", color: "#4479A1" },
        { name: "npm", color: "#CB3837" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", color: "#F05032" },
        { name: "GitHub", color: "#ffffff" },
        { name: "Postman", color: "#FF6C37" },
        { name: "REST APIs", color: "#f97316" },
        { name: "Docker (basics)", color: "#2496ED" },
      ]
    },
    {
      title: "AI & LLMs",
      skills: [
        { name: "LangGraph", color: "#8B5CF6" },
        { name: "Langfuse", color: "#14B8A6" },
        { name: "RAG", color: "#22C55E" },
        { name: "Ollama & OpenWebUI", color: "#F59E0B" },
        { name: "LLM's", color: "#A855F7" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" effect="scale" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            My <span className="text-[var(--color-brand-orange)] text-glow">Skills</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A comprehensive list of the technologies, languages, and tools I use to build scalable and modern web applications.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={category.title} delay={idx * 0.1} direction="up" effect="blur" className="glass p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--color-brand-orange)]/50 transition-colors group">
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <div 
                      className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center border border-[var(--border-color)] shadow-sm"
                    >
                      <div className="font-bold text-sm" style={{ color: skill.color }}>{skill.name.charAt(0)}</div>
                    </div>
                    <div>
                      <p className="text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] transition-colors">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Core Concepts */}
        <AnimatedSection delay={0.5} direction="up" effect="scale" className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3.5 rounded-full bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] text-xs font-bold tracking-wider mb-3 border border-[var(--color-brand-orange)]/20 uppercase">
              Computer Science Foundations
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">Core Concepts</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Data Structures & Algorithms',
                desc: 'Strong focus on problem solving, optimization, complexity analysis, and efficient data handling.',
                icon: <Code2 className="w-5 h-5 text-[var(--color-brand-orange)]" />,
                bg: 'from-orange-500/10 to-red-500/10'
              },
              {
                name: 'Object-Oriented Programming (OOP)',
                desc: 'Designing modular, extensible, and maintainable software architecture using key OOP principles.',
                icon: <Layers className="w-5 h-5 text-[var(--color-brand-orange)]" />,
                bg: 'from-purple-500/10 to-pink-500/10'
              },
              {
                name: 'Database Management Systems (DBMS)',
                desc: 'Structured database schema design, indexing, performance optimization, and transaction control.',
                icon: <Database className="w-5 h-5 text-[var(--color-brand-orange)]" />,
                bg: 'from-blue-500/10 to-teal-500/10'
              }
            ].map((concept) => (
              <div 
                key={concept.name} 
                className="glass glass-card-hover-outline p-6 rounded-2xl border border-[var(--border-color)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${concept.bg} flex items-center justify-center border border-[var(--color-brand-orange)]/20 mb-5`}>
                    {concept.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{concept.name}</h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{concept.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-semibold text-[var(--color-brand-orange)]">
                  <span>Core Competency</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
