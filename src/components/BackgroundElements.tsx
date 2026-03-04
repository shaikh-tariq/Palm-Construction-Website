import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const BackgroundElements = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#2E7D32] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Interactive Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Floating Orbs */}
      <motion.div 
        animate={{
          x: mousePos.x * 100,
          y: mousePos.y * 100,
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2E7D32] rounded-full blur-[150px] opacity-[0.05]"
      />
      <motion.div 
        animate={{
          x: -mousePos.x * 150,
          y: -mousePos.y * 150,
        }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#2E7D32] rounded-full blur-[200px] opacity-[0.03]"
      />

      {/* Structural Beam Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(45deg, white 25%, transparent 25%, transparent 50%, white 50%, white 75%, transparent 75%, transparent)`,
          backgroundSize: '100px 100px',
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
        }}
      />

      {/* Floating Construction Elements */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, 0],
          x: mousePos.x * 40,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] opacity-[0.05]"
      >
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22v-5l5-5 5 5v5" />
          <path d="M7 12V2h10v10" />
          <path d="M2 17h20" />
          <path d="M17 12l5 5v5" />
        </svg>
      </motion.div>

      <motion.div 
        animate={{
          y: [0, 30, 0],
          rotate: [0, -3, 0],
          x: mousePos.x * -60,
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[5%] opacity-[0.03]"
      >
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <path d="M7 2v20" />
          <path d="M17 2v20" />
          <path d="M2 7h20" />
          <path d="M2 17h20" />
        </svg>
      </motion.div>

      {/* Blueprint Layer */}
      <motion.div 
        style={{ opacity: scrollYProgress }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#2E7D32]/10" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#2E7D32]/10" />
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
};

export default BackgroundElements;
