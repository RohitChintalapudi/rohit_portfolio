import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", color: "#A8B9CC" },
        { name: "C++", color: "#00599C" },
        { name: "JavaScript", color: "#F7DF1E" },
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
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#E34F26" },
        { name: "MongoDB", color: "#47A248" },
        { name: "MySQL", color: "#4479A1" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", color: "#F05032" },
        { name: "GitHub", color: "#ffffff" },
        { name: "Postman", color: "#FF6C37" },
        { name: "REST APIs", color: "#f97316" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <AnimatedSection delay={0.5} direction="up" effect="scale" className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Core Concepts</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Database Management Systems (DBMS)'].map((concept) => (
              <span key={concept} className="px-6 py-3 glass rounded-full text-sm text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--color-brand-orange)]/50 hover:text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                {concept}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
