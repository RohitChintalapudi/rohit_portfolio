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
  SiVercel,
} from 'react-icons/si';
import {
  Puzzle,
  Binary,
  Cpu,
  Database,
  Boxes,
  Zap,
  Workflow,
  Sparkles
} from 'lucide-react';

// Unified list of 28 technologies and core CS concepts
const SKILL_NODES = [
  // Layer 1: Inner Orbit (Core Foundations & Main Engines - 8 nodes)
  { id: 'react', name: 'React', category: 'Frontend Ecosystem', icon: SiReact, color: '#61DAFB', orbit: 1, angle: -90, radius: 160, swirlDir: 1 },
  { id: 'nodejs', name: 'Node.js', category: 'Backend Runtime', icon: SiNodedotjs, color: '#83CD29', orbit: 1, angle: -45, radius: 170, swirlDir: -1 },
  { id: 'python', name: 'Python', category: 'Language & AI', icon: SiPython, color: '#3776AB', orbit: 1, angle: 0, radius: 160, swirlDir: 1 },
  { id: 'typescript', name: 'TypeScript', category: 'Type-Safe Logic', icon: SiTypescript, color: '#3178C6', orbit: 1, angle: 45, radius: 170, swirlDir: -1 },
  { id: 'postgres', name: 'PostgreSQL', category: 'Relational Database', icon: SiPostgresql, color: '#4169E1', orbit: 1, angle: 90, radius: 160, swirlDir: 1 },
  { id: 'openai', name: 'OpenAI', category: 'LLMs & Embeddings', icon: SiOpenai, color: '#10A37F', orbit: 1, angle: 135, radius: 170, swirlDir: -1 },
  { id: 'langgraph', name: 'LangGraph', category: 'Agentic Workflows & Multi-Agent', icon: Workflow, isLucide: true, color: '#FF6B00', orbit: 1, angle: 180, radius: 160, swirlDir: 1 },
  { id: 'cpp', name: 'C++', category: 'High-Performance & DSA', icon: SiCplusplus, color: '#00599C', orbit: 1, angle: 225, radius: 170, swirlDir: -1 },

  // Layer 2: Middle Orbit (Full Stack & Systems & AI - 10 nodes)
  { id: 'javascript', name: 'JavaScript', category: 'Core Web Language', icon: SiJavascript, color: '#F7DF1E', orbit: 2, angle: -110, radius: 270, swirlDir: -1 },
  { id: 'nextjs', name: 'Next.js', category: 'React Framework', icon: SiNextdotjs, color: '#FFFFFF', orbit: 2, angle: -72, radius: 290, swirlDir: 1 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Modern Styling', icon: SiTailwindcss, color: '#38BDF8', orbit: 2, angle: -36, radius: 275, swirlDir: -1 },
  { id: 'fastapi', name: 'FastAPI', category: 'Async Python APIs', icon: SiFastapi, color: '#05998B', orbit: 2, angle: 0, radius: 295, swirlDir: 1 },
  { id: 'express', name: 'Express.js', category: 'RESTful Server', icon: SiExpress, color: '#E5E7EB', orbit: 2, angle: 36, radius: 270, swirlDir: -1 },
  { id: 'mongodb', name: 'MongoDB', category: 'Document Database', icon: SiMongodb, color: '#47A248', orbit: 2, angle: 72, radius: 290, swirlDir: 1 },
  { id: 'redis', name: 'Redis', category: 'In-Memory Cache & Queues', icon: SiRedis, color: '#FF4438', orbit: 2, angle: 108, radius: 275, swirlDir: -1 },
  { id: 'langchain', name: 'LangChain', category: 'AI Orchestration & RAG', icon: SiLangchain, color: '#5FA66A', orbit: 2, angle: 144, radius: 290, swirlDir: 1 },
  { id: 'systemdesign', name: 'System Design', category: 'Scalable Architecture', icon: Cpu, isLucide: true, color: '#F59E0B', orbit: 2, angle: 180, radius: 280, swirlDir: -1 },
  { id: 'dbms', name: 'DBMS', category: 'Database Systems & SQL', icon: Database, isLucide: true, color: '#38BDF8', orbit: 2, angle: 216, radius: 295, swirlDir: 1 },

  // Layer 3: Outer Orbit (DevOps, Cloud, Core Concepts & Tools - 10 nodes)
  { id: 'docker', name: 'Docker', category: 'Containerization & DevOps', icon: SiDocker, color: '#2496ED', orbit: 3, angle: -125, radius: 395, swirlDir: 1 },
  { id: 'git', name: 'Git', category: 'Version Control', icon: SiGit, color: '#F05032', orbit: 3, angle: -90, radius: 415, swirlDir: -1 },
  { id: 'github', name: 'GitHub', category: 'Collaboration & CI/CD', icon: SiGithub, color: '#FFFFFF', orbit: 3, angle: -55, radius: 390, swirlDir: 1 },
  { id: 'vercel', name: 'Vercel', category: 'Edge Deployment', icon: SiVercel, color: '#FFFFFF', orbit: 3, angle: -18, radius: 420, swirlDir: -1 },
  { id: 'dsa', name: 'DSA & Problem Solving', category: 'Data Structures & Algorithms', icon: Puzzle, isLucide: true, color: '#FFA116', orbit: 3, angle: 20, radius: 395, swirlDir: 1 },
  { id: 'mysql', name: 'MySQL', category: 'Relational Database', icon: SiMysql, color: '#4479A1', orbit: 3, angle: 55, radius: 415, swirlDir: -1 },
  { id: 'pytorch', name: 'PyTorch', category: 'Deep Learning', icon: SiPytorch, color: '#EE4C2C', orbit: 3, angle: 90, radius: 390, swirlDir: 1 },
  { id: 'restapis', name: 'REST & Real-time', category: 'WebSockets & API Design', icon: Zap, isLucide: true, color: '#EC4899', orbit: 3, angle: 125, radius: 410, swirlDir: -1 },
  { id: 'oop', name: 'OOP', category: 'Object-Oriented Design', icon: Boxes, isLucide: true, color: '#A855F7', orbit: 3, angle: 160, radius: 395, swirlDir: 1 },
  { id: 'c', name: 'C', category: 'Low-Level Programming', icon: SiC, color: '#A8B9CC', orbit: 3, angle: 195, radius: 415, swirlDir: -1 },
];

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

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

// 5 Harmonic Petal Contours forming the blooming flower geometry
const FLOWER_PETALS = [
  "M 0 0 C 80 -180, 200 -260, 0 -360 C -200 -260, -80 -180, 0 0 Z",
  "M 0 0 C 180 -80, 260 80, 340 0 C 260 -160, 180 -80, 0 0 Z",
  "M 0 0 C 140 120, 220 280, 100 340 C 0 260, 60 140, 0 0 Z",
  "M 0 0 C -120 140, -260 220, -320 100 C -240 0, -140 60, 0 0 Z",
  "M 0 0 C -180 -80, -280 -220, -120 -330 C -20 -240, -100 -120, 0 0 Z"
];

// Single Swirling Technology Node Component with Scroll Motion
const SwirlNode = ({ node, smoothProgress, hoveredNode, setHoveredNode, reducedMotion }) => {
  const isHovered = hoveredNode === node.id;
  const isAnyHovered = hoveredNode !== null;
  const Icon = node.icon;

  const iconSize = node.orbit === 1 ? 46 : node.orbit === 2 ? 40 : 36;
  const halfSize = iconSize / 2;

  // Real-time Swirling Coordinate Interpolation during scroll
  const x = useTransform(smoothProgress, (p) => {
    if (reducedMotion) return node.finalX;
    const e = easeInOutCubic(p);
    const curAngle = node.flowerAngleRad + (node.scatterAngle - node.flowerAngleRad) * (1 - e);
    const curR = node.flowerR + (node.scatterR - node.flowerR) * (1 - e);
    return curR * Math.cos(curAngle);
  });

  const y = useTransform(smoothProgress, (p) => {
    if (reducedMotion) return node.finalY;
    const e = easeInOutCubic(p);
    const curAngle = node.flowerAngleRad + (node.scatterAngle - node.flowerAngleRad) * (1 - e);
    const curR = node.flowerR + (node.scatterR - node.flowerR) * (1 - e);
    return curR * Math.sin(curAngle);
  });

  const scale = useTransform(smoothProgress, (p) => {
    if (reducedMotion) return 1;
    const e = easeInOutCubic(p);
    return 0.35 + 0.65 * e;
  });

  const opacity = useTransform(smoothProgress, (p) => {
    if (reducedMotion) return 1;
    const e = easeInOutCubic(p);
    return 0.1 + 0.9 * e;
  });

  return (
    <motion.g
      style={{ x, y, opacity, scale }}
      className="cursor-pointer"
      onMouseEnter={() => setHoveredNode(node.id)}
      onMouseLeave={() => setHoveredNode(null)}
    >
      <motion.g
        animate={{
          scale: isHovered ? 1.3 : isAnyHovered ? 0.75 : 1,
          opacity: isHovered ? 1 : isAnyHovered ? 0.25 : 0.95,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 22,
        }}
      >
        {/* Subtle breathing oscillation once arrived */}
        <motion.g
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -4.5, 0],
                  x: [0, node.swirlDir * 2, 0],
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
          <circle cx="0" cy="0" r={halfSize + 16} fill="transparent" />

          {/* Hover ambient halo */}
          {isHovered && (
            <circle
              cx="0"
              cy="0"
              r={halfSize + 12}
              fill={node.color}
              opacity="0.3"
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
                  ? `drop-shadow(0 0 12px ${node.color}) drop-shadow(0 0 24px rgba(255,107,0,0.7))`
                  : 'drop-shadow(0 2px 8px rgba(0,0,0,0.85))',
              }}
            >
              <Icon size={iconSize} className="w-full h-full" />
            </div>
          </foreignObject>

          {/* Tooltip on Hover Only */}
          {isHovered && (
            <motion.g
              initial={{ opacity: 0, y: -4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              transform={`translate(0, ${node.finalY < 0 ? -halfSize - 22 : halfSize + 26})`}
              className="pointer-events-none"
            >
              <rect
                x="-75"
                y="-16"
                width="150"
                height="32"
                rx="16"
                fill="#0e0e11"
                stroke="rgba(255, 107, 0, 0.6)"
                strokeWidth="1.2"
                filter="url(#softGlow)"
              />
              <text
                x="0"
                y="-2"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11.5"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {node.name}
              </text>
              <text
                x="0"
                y="9"
                textAnchor="middle"
                fill="#ff8c38"
                fontSize="8"
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
    </motion.g>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const reducedMotion = useReducedMotion();

  // Scroll driven animation: tracking entire travel through section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 92%', 'center 50%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate coordinates, blooming flower offsets, and spiral paths for all nodes
  const processedNodes = useMemo(() => {
    return SKILL_NODES.map((node, i) => {
      const flowerAngleRad = (node.angle * Math.PI) / 180;
      // 5-fold harmonic flower petal modulation
      const petalMod = 1 + 0.12 * Math.sin(5 * flowerAngleRad + (node.orbit * 0.8));
      const flowerR = node.radius * petalMod;
      const finalX = flowerR * Math.cos(flowerAngleRad);
      const finalY = flowerR * Math.sin(flowerAngleRad);

      // Wide spiral scattering angle & distance for the swirling convergence
      const scatterAngle = flowerAngleRad + node.swirlDir * (2.8 + (node.orbit * 0.5));
      const scatterR = 640 + (node.orbit * 110) + ((i * 37) % 90);

      const pathD = createSpiralPath(finalX, finalY, node.swirlDir, node.orbit);

      const floatDuration = 3.5 + (Math.abs(node.angle) % 4) * 0.5;
      const floatDelay = (Math.abs(node.angle) % 7) * 0.3;

      return {
        ...node,
        flowerAngleRad,
        flowerR,
        finalX,
        finalY,
        scatterAngle,
        scatterR,
        pathD,
        floatDuration,
        floatDelay,
      };
    });
  }, []);

  // Center gravitational scaling & rotation driven by scroll
  const centerScale = useTransform(smoothProgress, (p) => {
    const e = easeInOutCubic(p);
    return 0.7 + 0.3 * e;
  });

  const flowerBloomScale = useTransform(smoothProgress, (p) => {
    const e = easeInOutCubic(p);
    return 0.2 + 0.8 * e;
  });

  const flowerBloomOpacity = useTransform(smoothProgress, (p) => {
    const e = easeInOutCubic(p);
    return 0.05 + 0.45 * e;
  });

  const pathsProgress = useTransform(smoothProgress, (p) => {
    return easeInOutCubic(p);
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-[var(--bg-primary)] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background Ambience - Deep Clean Dark */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-brand-orange)]/6 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-orange-600/10 rounded-full blur-[90px]" />
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
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#ff8c38" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="activeSwirlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="1" />
              <stop offset="50%" stopColor="#ff9f43" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="petalBloomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.06" />
            </linearGradient>

            {/* Glowing filters */}
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

          {/* BLOOMING FLOWER PETAL CONTOURS (Swirling and expanding with scroll) */}
          <motion.g
            style={{
              scale: flowerBloomScale,
              opacity: flowerBloomOpacity,
              transformOrigin: '0px 0px',
            }}
            className="pointer-events-none"
          >
            {FLOWER_PETALS.map((d, idx) => (
              <motion.path
                key={`flower-petal-${idx}`}
                d={d}
                fill="none"
                stroke="url(#petalBloomGrad)"
                strokeWidth={1.2}
                strokeDasharray="3 6"
                animate={{
                  rotate: [0, idx % 2 === 0 ? 360 : -360],
                }}
                transition={{
                  rotate: { duration: 150 + idx * 30, repeat: Infinity, ease: 'linear' },
                }}
                style={{ transformOrigin: '0px 0px' }}
              />
            ))}
          </motion.g>

          {/* ORBITAL GUIDES / RESONANCE RINGS */}
          <g className="pointer-events-none opacity-20">
            <circle cx="0" cy="0" r="165" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.8" strokeDasharray="3 7" />
            <circle cx="0" cy="0" r="285" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="2 9" />
            <circle cx="0" cy="0" r="405" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="4 12" />
          </g>

          {/* SPIRAL SWIRL CONNECTING PATHS (Drawing progressively as skills converge) */}
          <g>
            {processedNodes.map((node) => {
              const isHovered = hoveredNode === node.id;
              const isAnyHovered = hoveredNode !== null;
              
              let strokeOpacity = 0.28;
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
                    style={{
                      pathLength: pathsProgress,
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

          {/* SWIRLING TECHNOLOGY & CONCEPT LOGOS */}
          <g>
            {processedNodes.map((node) => (
              <SwirlNode
                key={`swirl-node-${node.id}`}
                node={node}
                smoothProgress={smoothProgress}
                hoveredNode={hoveredNode}
                setHoveredNode={setHoveredNode}
                reducedMotion={reducedMotion}
              />
            ))}
          </g>

          {/* CENTRAL GRAVITATIONAL ELEMENT — "SKILLS" TYPOGRAPHY ONLY */}
          <motion.g
            transform="translate(0, 0)"
            style={{ scale: centerScale }}
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
              fill="#ffffff"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="34"
              letterSpacing="0.22em"
              style={{
                textTransform: 'uppercase',
                filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 35px rgba(255, 107, 0, 0.6))',
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
          </motion.g>
        </svg>
      </div>

      {/* Subtle bottom indicator */}
      <div className="text-center mt-4 pointer-events-none">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-secondary)]/60 font-medium">
          Scroll to swirl • Hover to inspect
        </p>
      </div>
    </section>
  );
};

export default Skills;