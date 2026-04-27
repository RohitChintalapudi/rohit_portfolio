import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Member at Next Tech Lab (NTL)",
      organization: "SRM University AP",
      timeline: "2025 \u2013 Present",
      description: "Active member of a student-led innovation lab focused on research, development, and hackathons. Contributed to building project prototypes and participated in collaborative technical problem-solving.",
      icon: <Briefcase className="w-5 h-5 text-white" />
    }
  ];

  const education = [
    {
      title: "B.Tech in Computer Science and Engineering",
      organization: "SRM University AP",
      timeline: "2024 \u2013 2028",
      description: "CGPA: 9.63/10.0. Focusing on core computer science subjects, data structures, and software engineering principles.",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      title: "Intermediate",
      organization: "SR Junior College",
      timeline: "2022 \u2013 2024",
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

  const TimelineItem = ({ item }) => (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline line for mobile */}
      <div className="md:hidden absolute left-[11px] top-8 bottom-0 w-px bg-[var(--border-color)]"></div>
      
      <div className="md:flex items-center justify-between md:mb-8 group">
        {/* Left side (Timeline / Empty space) */}
        <div className="hidden md:block w-5/12 text-right pr-8">
          <span className="text-[var(--color-brand-orange)] font-bold tracking-wider text-glow text-sm">{item.timeline}</span>
        </div>

        {/* Center dot */}
        <div className="absolute left-0 md:relative md:left-auto w-6 h-6 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-brand-orange)] flex items-center justify-center z-10 group-hover:bg-[var(--color-brand-orange)] transition-colors duration-300 md:mx-auto box-glow">
          <div className="w-2 h-2 rounded-full bg-[var(--text-primary)] group-hover:scale-0 transition-transform"></div>
        </div>

        {/* Right side (Content) */}
        <div className="w-full md:w-5/12 pl-4 md:pl-8 pb-8 md:pb-0">
          <div className="glass p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--color-brand-orange)]/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all relative transform group-hover:-translate-y-1">
            <div className="md:hidden mb-2 text-[var(--color-brand-orange)] font-bold text-xs">
              {item.timeline}
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
            <h4 className="text-[var(--text-secondary)] font-medium text-sm mb-4">{item.organization}</h4>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection direction="up" effect="scale" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            Experience & <span className="text-[var(--color-brand-orange)] text-glow">Education</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-2xl mx-auto">
            My academic journey and professional experience so far.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2"></div>

          <AnimatedSection direction="up" effect="blur" delay={0.1}>
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-8 md:bg-[var(--bg-secondary)] md:relative md:z-20 md:w-max md:mx-auto md:px-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center box-glow transform hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Experience</h3>
              </div>
              <div>
                {experiences.map((exp, idx) => (
                  <TimelineItem key={idx} item={exp} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" effect="blur" delay={0.3}>
            <div>
              <div className="flex items-center justify-center gap-3 mb-8 md:bg-[var(--bg-secondary)] md:relative md:z-20 md:w-max md:mx-auto md:px-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center box-glow transform hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Education</h3>
              </div>
              <div>
                {education.map((edu, idx) => (
                  <TimelineItem key={idx} item={edu} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
