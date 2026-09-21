import React, { useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiOpenai,
  SiLangchain,
  SiPytorch,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
} from 'react-icons/si';
import {
  Binary,
  Cpu,
  Database,
  Boxes,
  Zap,
  Workflow
} from 'lucide-react';

// Unified list of 28 technologies and core CS concepts
const SKILL_NODES = [
  // Layer 1: Inner Orbit (Core Foundations & Main Engines)
  { id: 'react', name: 'React', category: 'Frontend Ecosystem', icon: SiReact, color: '#61DAFB', orbit: 1, angle: -85, radius: 160, swirlDir: 1 },
  { id: 'nodejs', name: 'Node.js', category: 'Backend Runtime', icon: SiNodedotjs, color: '#83CD29', orbit: 1, angle: -35, radius: 175, swirlDir: -1 },
  { id: 'python', name: 'Python', category: 'Language & AI', icon: SiPython, color: '#3776AB', orbit: 1, angle: 15, radius: 165, swirlDir: 1 },
  { id: 'typescript', name: 'TypeScript', category: 'Type-Safe Logic', icon: SiTypescript, color: '#3178C6', orbit: 1, angle: 65, radius: 170, swirlDir: -1 },
  { id: 'postgres', name: 'PostgreSQL', category: 'Relational Database', icon: SiPostgresql, color: '#4169E1', orbit: 1, angle: 120, radius: 160, swirlDir: 1 },
  { id: 'openai', name: 'OpenAI', category: 'LLMs & Embeddings', icon: SiOpenai, color: '#10A37F', orbit: 1, angle: 175, radius: 175, swirlDir: -1 },
  { id: 'dsa', name: 'DSA', category: 'Data Structures & Algorithms', icon: Binary, isLucide: true, color: '#FF7A00', orbit: 1, angle: 225, radius: 165, swirlDir: 1 },
  { id: 'cpp', name: 'C++', category: 'High-Performance & DSA', icon: SiCplusplus, color: '#00599C', orbit: 1, angle: 275, radius: 170, swirlDir: -1 },

  // Layer 2: Middle Orbit (Full Stack & Systems & AI)
  { id: 'javascript', name: 'JavaScript', category: 'Core Web Language', icon: SiJavascript, color: '#F7DF1E', orbit: 2, angle: -105, radius: 275, swirlDir: -1 },
  { id: 'nextjs', name: 'Next.js', category: 'React Framework', icon: SiNextdotjs, color: '#FFFFFF', orbit: 2, angle: -65, radius: 290, swirlDir: 1 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Modern Styling', icon: SiTailwindcss, color: '#38BDF8', orbit: 2, angle: -20, radius: 280, swirlDir: -1 },
  { id: 'fastapi', name: 'FastAPI', category: 'Async Python APIs', icon: SiFastapi, color: '#05998B', orbit: 2, angle: 25, radius: 295, swirlDir: 1 },
  { id: 'express', name: 'Express.js', category: 'RESTful Server', icon: SiExpress, color: '#E5E7EB', orbit: 2, angle: 70, radius: 270, swirlDir: -1 },
  { id: 'mongodb', name: 'MongoDB', category: 'Document Database', icon: SiMongodb, color: '#47A248', orbit: 2, angle: 105, radius: 285, swirlDir: 1 },
  { id: 'redis', name: 'Redis', category: 'In-Memory Cache & Queues', icon: SiRedis, color: '#FF4438', orbit: 2, angle: 145, radius: 275, swirlDir: -1 },
  { id: 'langchain', name: 'LangChain', category: 'AI Orchestration & RAG', icon: SiLangchain, color: '#5FA66A', orbit: 2, angle: 190, radius: 290, swirlDir: 1 },
  { id: 'systemdesign', name: 'System Design', category: 'Scalable Architecture', icon: Cpu, isLucide: true, color: '#F59E0B', orbit: 2, angle: 235, radius: 280, swirlDir: -1 },
  { id: 'dbms', name: 'DBMS', category: 'Database Systems & SQL', icon: Database, isLucide: true, color: '#38BDF8', orbit: 2, angle: 260, radius: 295, swirlDir: 1 },

  // Layer 3: Outer Orbit (DevOps, Cloud, Core Concepts & Extended Tools)
  { id: 'docker', name: 'Docker', category: 'Containerization & DevOps', icon: SiDocker, color: '#2496ED', orbit: 3, angle: -115, radius: 395, swirlDir: 1 },
  { id: 'git', name: 'Git', category: 'Version Control', icon: SiGit, color: '#F05032', orbit: 3, angle: -75, radius: 410, swirlDir: -1 },
  { id: 'github', name: 'GitHub', category: 'Collaboration & CI/CD', icon: SiGithub, color: '#FFFFFF', orbit: 3, angle: -40, radius: 390, swirlDir: 1 },
  { id: 'vercel', name: 'Vercel', category: 'Edge Deployment', icon: SiVercel, color: '#FFFFFF', orbit: 3, angle: 0, radius: 420, swirlDir: -1 },
  { id: 'linux', name: 'Linux', category: 'Unix Environments', icon: SiLinux, color: '#FCC624', orbit: 3, angle: 45, radius: 400, swirlDir: 1 },
  { id: 'mysql', name: 'MySQL', category: 'Relational Database', icon: SiMysql, color: '#4479A1', orbit: 3, angle: 90, radius: 385, swirlDir: -1 },
  { id: 'pytorch', name: 'PyTorch', category: 'Deep Learning', icon: SiPytorch, color: '#EE4C2C', orbit: 3, angle: 135, radius: 415, swirlDir: 1 },
  { id: 'restapis', name: 'REST & Real-time', category: 'WebSockets & API Design', icon: Zap, isLucide: true, color: '#EC4899', orbit: 3, angle: 175, radius: 405, swirlDir: -1 },
  { id: 'oop', name: 'OOP', category: 'Object-Oriented Design', icon: Boxes, isLucide: true, color: '#A855F7', orbit: 3, angle: 215, radius: 390, swirlDir: 1 },
  { id: 'c', name: 'C', category: 'Low-Level Programming', icon: SiC, color: '#A8B9CC', orbit: 3, angle: 260, radius: 410, swirlDir: -1 },
];

// Helper to compute coordinates from polar
function polarToCartesian(angleDeg, radius) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.round(radius * Math.cos(rad) * 10) / 10,
    y: Math.round(radius * Math.sin(rad) * 10) / 10,
  };
}

// Generate smooth flowing spiral Bézier path from center (0,0) to target point
function createSpiralPath(x, y, swirlDir, orbit) {
  const angle = Math.atan2(y, x);
  const dist = Math.hypot(x, y);

  // Organic spiral offset angle
  const bend = (swirlDir * (0.65 + orbit * 0.15));
  
  // Control point 1 (close to center, initiating swirl)
  const cp1Dist = dist * 0.32;
  const cp1Angle = angle + bend * 0.85;
  const cx1 = cp1Dist * Math.cos(cp1Angle);
  const cy1 = cp1Dist * Math.sin(cp1Angle);

  // Control point 2 (approaching target, weaving)
  const cp2Dist = dist * 0.72;
  const cp2Angle = angle + bend * 0.35;
  const cx2 = cp2Dist * Math.cos(cp2Angle);
  const cy2 = cp2Dist * Math.sin(cp2Angle);

  return `M 0 0 C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${x.toFixed(1)} ${y.toFixed(1)}`;
}

// Major petal contour loops weaving the orbital flower petals
const PETAL_CONTOURS = [
  "M 0 -70 C 130 -140, 260 -90, 280 -20 C 300 60, 210 160, 0 170 C -210 160, -300 60, -280 -20 C -260 -90, -130 -140, 0 -70 Z",
  "M -50 -50 C 90 -280, 280 -210, 360 -40 C 420 120, 240 330, 30 290 C -180 250, -340 100, -290 -70 C -240 -220, -160 -290, -50 -50 Z",
  "M 40 40 C 220 180, 390 120, 410 -60 C 430 -240, 180 -380, -20 -390 C -220 -400, -390 -160, -380 40 C -370 240, -140 390, 40 40 Z"
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const reducedMotion = useReducedMotion();

  // Scroll driven animation values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 50%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 22,
    restDelta: 0.001,
  });

  // Calculate coordinates and paths for all nodes
  const processedNodes = useMemo(() => {
    return SKILL_NODES.map((node) => {
      const { x, y } = polarToCartesian(node.angle, node.radius);
      const pathD = createSpiralPath(x, y, node.swirlDir, node.orbit);
      // Floating animation delay & period
      const floatDuration = 3.5 + (Math.abs(node.angle) % 4) * 0.5;
      const floatDelay = (Math.abs(node.angle) % 7) * 0.3;
      return {
        ...node,
        x,
        y,
        pathD,
        floatDuration,
        floatDelay,
      };
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-[var(--bg-primary)] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background Ambience - Deep Clean Dark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--color-brand-orange)]/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[90px]" />
      </div>

      {/* Header section title */}
      <div className="container mx-auto px-6 text-center relative z-20 mb-2 sm:mb-6 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]"
        >
          My <span className="text-[var(--color-brand-orange)] text-glow">Skills</span>
        </motion.h2>
      </div>

      {/* Swirling Technology Network Canvas / SVG Container */}
      <div className="relative w-full max-w-[1100px] aspect-[11/9] sm:aspect-[11/8.5] flex items-center justify-center mx-auto px-2">
        <svg
          viewBox="-550 -440 1100 880"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Orange glowing gradients */}
            <linearGradient id="swirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#ff8c38" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="activeSwirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="1" />
              <stop offset="50%" stopColor="#ff9f43" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="contourGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.18" />
            </linearGradient>

            {/* Glowing filter for highlighted paths */}
            <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* BACKGROUND PETAL CONTOUR CURVES (Weaving Flower Geometry) */}
          <g className="pointer-events-none">
            {PETAL_CONTOURS.map((d, idx) => (
              <motion.path
                key={`petal-${idx}`}
                d={d}
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth={1}
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: hoveredNode ? 0.08 : 0.45,
                  rotate: [0, idx % 2 === 0 ? 360 : -360],
                }}
                transition={{
                  pathLength: { duration: 1.8, delay: 0.2 * idx, ease: 'easeOut' },
                  opacity: { duration: 0.4 },
                  rotate: { duration: 140 + idx * 40, repeat: Infinity, ease: 'linear' },
                }}
                style={{ transformOrigin: '0px 0px' }}
              />
            ))}
          </g>

          {/* ORBITAL GUIDES / FAINT RESONANCE RINGS */}
          <g className="pointer-events-none opacity-20">
            <circle cx="0" cy="0" r="168" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.8" strokeDasharray="3 7" />
            <circle cx="0" cy="0" r="285" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="2 9" />
            <circle cx="0" cy="0" r="400" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="4 12" />
          </g>

          {/* SPIRAL SWIRL CONNECTING PATHS (Technology -> Central Skills) */}
          <g>
            {processedNodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isAnyHovered = hoveredNode !== null;
              
              // Dynamic line styles based on hover state
              let strokeOpacity = 0.25;
              let strokeWidth = 1.1;
              let strokeColor = "url(#swirlGrad)";
              let filter = undefined;

              if (isHovered) {
                strokeOpacity = 1;
                strokeWidth = 2.4;
                strokeColor = "url(#activeSwirlGrad)";
                filter = "url(#glowEffect)";
              } else if (isAnyHovered) {
                strokeOpacity = 0.06;
                strokeWidth = 0.8;
              }

              return (
                <g key={`path-group-${node.id}`}>
                  {/* The Flowing Spiral Curve */}
                  <motion.path
                    id={`trail-${node.id}`}
                    d={node.pathD}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeOpacity={strokeOpacity}
                    filter={filter}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: strokeOpacity,
                      strokeWidth: strokeWidth,
                    }}
                    transition={{
                      pathLength: { duration: 1.4, delay: 0.1 + (node.radius / 800), ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3 },
                      strokeWidth: { duration: 0.25 },
                    }}
                  />

                  {/* Flowing Energy Light Pulses along the Curves */}
                  {!reducedMotion && (node.orbit <= 2 || isHovered) && (
                    <circle r={isHovered ? 2.8 : 1.6} fill={isHovered ? '#ffffff' : '#ff8c38'}>
                      <animateMotion
                        dur={`${node.orbit === 1 ? 3.8 : 5.2}s`}
                        repeatCount="indefinite"
                        path={node.pathD}
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </g>

          {/* FLOATING TECHNOLOGY & CONCEPT LOGOS */}
          <g>
            {processedNodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isAnyHovered = hoveredNode !== null;
              const Icon = node.icon;

              // Size based on orbit & significance
              const iconSize = node.orbit === 1 ? 32 : node.orbit === 2 ? 28 : 25;
              const halfSize = iconSize / 2;

              return (
                <g
                  key={`node-${node.id}`}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1.35 : isAnyHovered ? 0.8 : 1,
                      opacity: isHovered ? 1 : isAnyHovered ? 0.25 : 0.95,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 22,
                    }}
                  >
                    {/* Breathing / Floating organic micro-movement */}
                    <motion.g
                      animate={
                        reducedMotion
                          ? {}
                          : {
                              y: [0, -5, 0],
                              x: [0, node.swirlDir * 2.5, 0],
                            }
                      }
                      transition={{
                        duration: node.floatDuration,
                        delay: node.floatDelay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Interactive Touch/Click Hitbox */}
                      <circle
                        cx="0"
                        cy="0"
                        r={halfSize + 14}
                        fill="transparent"
                      />

                      {/* Hover ambient halo behind icon */}
                      {isHovered && (
                        <circle
                          cx="0"
                          cy="0"
                          r={halfSize + 8}
                          fill={node.color}
                          opacity="0.25"
                          filter="url(#glowEffect)"
                        />
                      )}

                      {/* The Pure Icon - LOGO ONLY, NO CARDS, NO BOXES */}
                      <foreignObject
                        x={-halfSize}
                        y={-halfSize}
                        width={iconSize}
                        height={iconSize}
                        className="overflow-visible pointer-events-none"
                      >
                        <div
                          className="w-full h-full flex items-center justify-center transition-all duration-300"
                          style={{
                            color: isHovered ? '#ffffff' : node.color || '#ffffff',
                            filter: isHovered
                              ? `drop-shadow(0 0 10px ${node.color}) drop-shadow(0 0 20px rgba(255,107,0,0.6))`
                              : 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))',
                          }}
                        >
                          <Icon size={iconSize} className="w-full h-full" />
                        </div>
                      </foreignObject>

                      {/* Tooltip on Hover Only (Technology name + category) */}
                      {isHovered && (
                        <motion.g
                          initial={{ opacity: 0, y: -4, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          transform={`translate(0, ${node.y < 0 ? -halfSize - 18 : halfSize + 22})`}
                          className="pointer-events-none"
                        >
                          <rect
                            x="-70"
                            y="-14"
                            width="140"
                            height="28"
                            rx="14"
                            fill="#0e0e11"
                            stroke="rgba(255, 107, 0, 0.6)"
                            strokeWidth="1"
                            filter="url(#softGlow)"
                          />
                          <text
                            x="0"
                            y="-2"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="10.5"
                            fontWeight="700"
                            fontFamily="system-ui, -apple-system, sans-serif"
                          >
                            {node.name}
                          </text>
                          <text
                            x="0"
                            y="8"
                            textAnchor="middle"
                            fill="#ff8c38"
                            fontSize="7.5"
                            fontWeight="600"
                            letterSpacing="0.05em"
                            fontFamily="system-ui, -apple-system, sans-serif"
                          >
                            {node.category}
                          </text>
                        </motion.g>
                      )}
                    </motion.g>
                  </motion.g>
                </g>
              );
            })}
          </g>

          {/* CENTRAL GRAVITATIONAL ELEMENT — "SKILLS" TYPOGRAPHY ONLY */}
          {/* No card, No circular container, Clean Minimal typography with radiant gravitational pull */}
          <g
            transform="translate(0, 0)"
            className="pointer-events-none"
          >
            {/* Ambient gravitational radiant aura */}
            <circle
              cx="0"
              cy="0"
              r="68"
              fill="none"
              stroke="url(#swirlGrad)"
              strokeWidth="1.2"
              opacity="0.3"
              strokeDasharray="2 6"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="30s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Inner pulse ring */}
            <circle
              cx="0"
              cy="0"
              r="46"
              fill="none"
              stroke="#ff6b00"
              strokeWidth="0.8"
              opacity="0.25"
            >
              <animate
                attributeName="r"
                values="42;48;42"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0.45;0.2"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Center Typography */}
            <motion.text
              x="0"
              y="11"
              textAnchor="middle"
              fill="#ff6b00"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="34"
              letterSpacing="0.22em"
              style={{
                textTransform: 'uppercase',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 0, 0.9)) drop-shadow(0 0 45px rgba(255, 107, 0, 0.55))',
              }}
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              SKILLS
            </motion.text>
          </g>
        </svg>
      </div>

      {/* Subtle bottom indicator */}
      <div className="text-center mt-4 pointer-events-none">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-secondary)]/60 font-medium">
          Hover to trace neural connections
        </p>
      </div>
    </section>
  );
};

export default Skills;