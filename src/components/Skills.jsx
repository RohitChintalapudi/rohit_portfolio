import React from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Code2, Layers, Database } from 'lucide-react';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiLangchain,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVercel,
  SiTailwindcss,
} from 'react-icons/si';

const INNER_R = 175;
const OUTER_R = 280;

const rawItems = [
  { name: 'C++', ring: 'inner', color: '#76d7ea', icon: SiCplusplus },
  { name: 'C', ring: 'outer', color: '#A8B9CC', icon: SiC },
  { name: 'Python', ring: 'inner', color: '#3776AB', icon: SiPython },
  { name: 'JavaScript', ring: 'outer', color: '#F7DF1E', icon: SiJavascript },
  { name: 'TypeScript', ring: 'inner', color: '#3178C6', icon: SiTypescript },
  { name: 'React', ring: 'inner', color: '#61DAFB', icon: SiReact },
  { name: 'React Native', ring: 'outer', color: '#61DAFB', icon: SiReact },
  { name: 'Node.js', ring: 'inner', color: '#8CC84B', icon: SiNodedotjs },
  { name: 'Express.js', ring: 'outer', color: '#7A7A7A', icon: SiExpress },
  { name: 'PostgreSQL', ring: 'inner', color: '#6896C4', icon: SiPostgresql },
  { name: 'MongoDB', ring: 'inner', color: '#4DB33D', icon: SiMongodb },
  { name: 'MySQL', ring: 'outer', color: '#4479A1', icon: SiMysql },
  { name: 'PGVector', ring: 'outer', color: '#6896C4', initial: 'PG' },
  { name: 'LangChain', ring: 'outer', color: '#5FA66A', icon: SiLangchain },
  { name: 'LangGraph', ring: 'outer', color: '#b28bf0', initial: 'LG' },
  { name: 'RAG', ring: 'inner', color: '#22C55E', initial: 'RAG' },
  { name: 'OpenAI', ring: 'inner', color: '#74AA9C', icon: SiOpenai },
  { name: 'Groq', ring: 'outer', color: '#F55036', initial: 'GQ' },
  { name: 'Git', ring: 'inner', color: '#F05032', icon: SiGit },
  { name: 'GitHub', ring: 'outer', color: '#ffffff', icon: SiGithub },
  { name: 'Vercel', ring: 'outer', color: '#ffffff', icon: SiVercel },
  { name: 'Railway', ring: 'outer', color: '#8B5CF6', initial: 'RW' },
  { name: 'Tailwind CSS', ring: 'inner', color: '#38BDF8', icon: SiTailwindcss },
];

const innerItems = rawItems.filter((it) => it.ring === 'inner');
const outerItems = rawItems.filter((it) => it.ring === 'outer');

const petal = (theta, phase) => 1 + 0.14 * Math.sin(5 * theta + phase);

const buildSpatial = (list, baseR, offset, phase) =>
  list.map((it, i) => {
    const theta = (i * 2 * Math.PI) / list.length - Math.PI / 2 + offset;
    const flowerR = baseR * petal(theta, phase);
    const flowerAngle = theta;
    const scatterR = 620 + ((i * 61 + list.length * 23) % 360);
    const scatterAngle = i * 2.3999 + (i % 3) * 0.9;
    const swirl = (2.6 + (i % 5) * 0.5) * (i % 2 === 0 ? 1 : -1);
    return { ...it, flowerAngle, flowerR, scatterR, scatterAngle, swirl };
  });

const hybridItems = [
  ...buildSpatial(innerItems, INNER_R, 0, 0),
  ...buildSpatial(outerItems, OUTER_R, Math.PI / innerItems.length, 1.2),
];

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const BadgeMark = ({ item }) => {
  const Icon = item.icon;
  const mark = Icon ? (
    <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" style={{ color: item.color }} />
  ) : (
    <span className="font-extrabold text-sm sm:text-base" style={{ color: item.color }}>
      {item.initial}
    </span>
  );
  return <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center shadow-sm flex-shrink-0">{mark}</div>;
};

const MagneticPill = ({ item }) => {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = Math.max(-10, Math.min(10, e.clientX - (rect.left + rect.width / 2)));
    const dy = Math.max(-10, Math.min(10, e.clientY - (rect.top + rect.height / 2)));
    e.currentTarget.style.setProperty('--mx', `${dx}px`);
    e.currentTarget.style.setProperty('--my', `${dy}px`);
  };
  const onLeave = (e) => {
    e.currentTarget.style.setProperty('--mx', '0px');
    e.currentTarget.style.setProperty('--my', '0px');
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="flex items-center gap-2 sm:gap-2.5 group/pill transition-all duration-300"
    >
      <BadgeMark item={item} />
      <span className="text-[10px] sm:text-sm font-semibold text-gray-300 group-hover/pill:text-white whitespace-nowrap transition-colors">
        {item.name}
      </span>
    </div>
  );
};

const TechParticle = ({ item, smooth, reduced }) => {
  const x = useTransform(smooth, (v) => {
    const e = easeInOut(v);
    const angle = item.flowerAngle + item.swirl * (1 - e);
    const radius = item.scatterR + (item.flowerR - item.scatterR) * e;
    return Math.cos(angle) * radius;
  });
  const y = useTransform(smooth, (v) => {
    const e = easeInOut(v);
    const angle = item.flowerAngle + item.swirl * (1 - e);
    const radius = item.scatterR + (item.flowerR - item.scatterR) * e;
    return Math.sin(angle) * radius;
  });
  const opacity = useTransform(smooth, (v) => 0.3 + 0.7 * easeInOut(v));
  const scale = useTransform(smooth, (v) => 0.55 + 0.45 * easeInOut(v));

  const finalX = Math.cos(item.flowerAngle) * item.flowerR;
  const finalY = Math.sin(item.flowerAngle) * item.flowerR;

  const content = (
    <div className="text-[11px] sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full glass border border-white/10 shadow-lg group hover:border-[var(--color-brand-orange)]/60 hover:shadow-[0_0_28px_rgba(249,115,22,0.4)] hover:bg-white/[0.06] transition-all duration-300 flex items-center">
      <MagneticPill item={item} />
    </div>
  );

  if (reduced) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(${finalX}px, ${finalY}px)` }}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2">{content}</div>
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div style={{ x, y, opacity, scale }}>
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <motion.div
            animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
            transition={{
              duration: 4 + (item.flowerAngle * 10) % 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (item.flowerAngle * 5) % 2,
            }}
          >
            {content}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = React.useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24 });

  const centerScale = useTransform(smooth, (v) => 0.78 + 0.24 * easeInOut(v));
  const centerGlow = useTransform(smooth, (v) => 0.45 + 0.55 * easeInOut(v));

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative bg-[var(--bg-secondary)] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection direction="up" effect="scale" className="text-center mb-10">
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
            A living orbit of the technologies I use to design, build, and ship modern applications.
          </p>
        </AnimatedSection>

        <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[660px]">
          {/* Stage scaling wrapper for responsive radial sizing */}
          <div className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.52] sm:scale-[0.7] lg:scale-100">
            {/* Orbit rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/[0.06] pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <span className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -ml-0.5 -mt-0.5 rounded-full bg-[var(--color-brand-orange)]/50"></span>
              </motion.div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-white/[0.05] pointer-events-none">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
              >
                <span className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 rounded-full bg-white/20"></span>
              </motion.div>
            </div>

            {!reduced && (
              <motion.div className="relative" style={{ scale: centerScale, opacity: centerGlow }}>
                {hybridItems.map((item) => (
                  <TechParticle key={item.name} item={item} smooth={smooth} reduced={reduced} />
                ))}
              </motion.div>
            )}

            {reduced && (
              <div className="relative">
                {hybridItems.map((item) => (
                  <TechParticle key={item.name} item={item} smooth={smooth} reduced={reduced} />
                ))}
              </div>
            )}

            {/* Center Skills Element */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="absolute -inset-2 rounded-full bg-[var(--color-brand-orange)]/15 blur-xl"></div>
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--color-brand-orange)]/70 shadow-[0_0_35px_rgba(249,115,22,0.22)] flex flex-col items-center justify-center">
                  <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--color-brand-orange)] font-bold mb-1">My</span>
                  <span className="text-4xl sm:text-5xl font-extrabold leading-none text-[var(--text-primary)]">Skills</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Core Concepts */}
        <AnimatedSection delay={0.2} direction="up" effect="scale" className="mt-16 max-w-5xl mx-auto">
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