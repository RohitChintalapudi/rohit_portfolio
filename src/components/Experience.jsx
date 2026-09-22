import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AchievementModal from './AchievementModal';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

const Experience = () => {
  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);
  const timelineRef = useRef(null);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 65%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const beadTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  const experiences = [
    {
      title: "Software Development Intern",
      organization: "NighaTech Global Pvt. Ltd.",
      timeline: "May 2026 – Present",
      description: "Built scalable web and mobile applications using React, React Native, Expo, and the MERN stack while developing REST APIs, RBAC, and IoT-based monitoring features.",
      icon: <Briefcase className="w-5 h-5 text-white" />
    },
    {
      title: "AI Product Engineering Intern",
      organization: "CCC Digital India Pvt. Ltd.",
      timeline: "May 2026 – July 2026",
      description: "Developed AI-powered learning workflows using LangGraph, Groq, Ollama, and RAG while building scalable backend services and context-aware AI applications.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      hasAchievement: true
    }
  ];

  const education = [
    {
      title: "B.Tech in Computer Science and Engineering",
      organization: "SRM University AP",
      timeline: "2024 – 2028",
      description: "CGPA: 9.65/10.0. Focusing on core computer science subjects, data structures, and software engineering principles.",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      title: "Intermediate",
      organization: "SR Junior College",
      timeline: "2022 – 2024",
      description: "Percentage: 97.9%. Completed foundational studies with excellence in sciences and mathematics.",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      title: "School",
      organization: "DAV public school",
      timeline: "Graduated 2022",
      description: "Percentage: 94.33%. Completed secondary education with strong foundational coursework.",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    }
  ];

  const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;
    
    return (
      <div className="relative pl-8 md:pl-0 z-10">
        <div className={`md:flex items-center justify-between md:mb-8 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Timeline Date (Desktop) */}
          <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <span className="text-[var(--color-brand-orange)] font-bold tracking-wider text-glow text-sm">{item.timeline}</span>
          </div>

          {/* Center dot */}
          <div className="absolute left-0 md:relative md:left-auto w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-brand-orange)] flex items-center justify-center z-20 group-hover:bg-[var(--color-brand-orange)] transition-colors duration-300 md:mx-auto box-glow">
            <div className="w-2 h-2 rounded-full bg-[var(--text-primary)] group-hover:scale-0 transition-transform"></div>
          </div>

          {/* Content Card */}
          <div className={`w-full md:w-5/12 pb-8 md:pb-0 ${isEven ? 'pl-4 md:pl-8' : 'pl-4 md:pl-0 md:pr-8'}`}>
            <div className={`glass glass-card-hover-outline p-6 rounded-2xl border border-[var(--border-color)] hover:-translate-y-1 ${!isEven && 'md:text-right'}`}>
              <div className="flex items-start justify-between gap-3 mb-1">
                <div className="flex-1">
                  <div className={`md:hidden mb-1 text-[var(--color-brand-orange)] font-bold text-xs ${!isEven && 'text-left'}`}>
                    {item.timeline}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <h4 className="text-[var(--color-brand-orange)] font-bold text-sm mb-4">{item.organization}</h4>
                </div>

                {item.hasAchievement && (
                  <button
                    type="button"
                    onClick={() => setIsAchievementModalOpen(true)}
                    title="View Best Intern Honors & Trophy"
                    aria-label="View Best Intern Honors & Trophy"
                    className="group/trophy shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/40 hover:border-amber-400 text-amber-300 text-xs font-semibold shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all cursor-pointer active:scale-95"
                  >
                    <span className="relative flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-amber-400 group-hover/trophy:scale-110 group-hover/trophy:rotate-6 transition-transform" />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                    </span>
                    <span className="bg-gradient-to-r from-amber-200 to-orange-300 bg-clip-text text-transparent text-[11px] font-mono tracking-wide">
                      Trophy
                    </span>
                  </button>
                )}
              </div>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[var(--color-brand-orange)]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection direction="up" effect="scale" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Experience & <span className="text-[var(--color-brand-orange)] text-glow">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">
            My academic journey and professional experience so far.
          </p>
        </AnimatedSection>

        {/* Timeline Container with Scroll Progress Line */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Desktop Central Static Track (Behind Headers: z-0) */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-white/10 -translate-x-1/2 rounded-full z-0 pointer-events-none" />

          {/* Desktop Central Active Scroll Glowing Orange Line (Behind Headers: z-0) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-brand-orange)] via-orange-400 to-amber-300 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.9),0_0_25px_rgba(249,115,22,0.5)] z-0 pointer-events-none"
          />

          {/* Desktop Glowing Tracer Bead at head of line */}
          <motion.div
            style={{ top: beadTop }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[var(--color-brand-orange)] shadow-[0_0_18px_#f97316,0_0_30px_#f97316] z-0 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-[var(--color-brand-orange)] opacity-80" />
          </motion.div>

          {/* Mobile Left Static Track (Behind Headers: z-0) */}
          <div className="md:hidden absolute left-[11px] top-6 bottom-6 w-[2px] bg-white/10 rounded-full z-0 pointer-events-none" />

          {/* Mobile Left Active Scroll Glowing Orange Line (Behind Headers: z-0) */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="md:hidden absolute left-[11px] top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-[var(--color-brand-orange)] via-orange-400 to-amber-300 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.9)] z-0 pointer-events-none"
          />

          {/* Mobile Glowing Tracer Bead */}
          <motion.div
            style={{ top: beadTop }}
            className="md:hidden absolute left-[11px] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[var(--color-brand-orange)] shadow-[0_0_15px_#f97316] z-0 pointer-events-none"
          />

          {/* Experience Section */}
          <AnimatedSection direction="up" effect="blur" delay={0.1} className="relative z-20 mb-12">
            <div>
              {/* Experience Header Badge (Placed on Top with solid backdrop: z-30) */}
              <div className="flex justify-start md:justify-center mb-8 relative z-30">
                <div className="inline-flex items-center gap-3 bg-black border border-white/20 px-6 py-2.5 rounded-full shadow-[0_0_25px_rgba(0,0,0,1)] box-glow relative z-30">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center box-glow transform hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Experience</h3>
                </div>
              </div>

              <div>
                {experiences.map((exp, idx) => (
                  <TimelineItem key={`exp-${idx}`} item={exp} index={idx} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection direction="up" effect="blur" delay={0.2} className="relative z-20">
            <div>
              {/* Education Header Badge (Placed on Top with solid backdrop: z-30) */}
              <div className="flex justify-start md:justify-center mb-8 relative z-30">
                <div className="inline-flex items-center gap-3 bg-black border border-white/20 px-6 py-2.5 rounded-full shadow-[0_0_25px_rgba(0,0,0,1)] box-glow relative z-30">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center box-glow transform hover:scale-110 transition-transform">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Education</h3>
                </div>
              </div>

              <div>
                {education.map((edu, idx) => (
                  <TimelineItem key={`edu-${idx}`} item={edu} index={idx} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Clean & Minimal Square Card Modal */}
      <AchievementModal
        isOpen={isAchievementModalOpen}
        onClose={() => setIsAchievementModalOpen(false)}
      />
    </section>
  );
};

export default Experience;
