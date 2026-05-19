import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedCharacters } from './AnimatedText';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Particles - React to Mouse */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-brand-yellow rounded-full"
            style={{
              left: `${15 + (i % 10) * 8}%`,
              top: `${10 + Math.floor(i / 10) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [(mousePosition.x - 0.5) * 30, (mousePosition.x - 0.5) * -30, (mousePosition.x - 0.5) * 30],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs - Mouse Reactive */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 226, 37, 0.12) 0%, transparent 60%)',
        }}
        animate={{
          x: (mousePosition.x - 0.5) * 80,
          y: (mousePosition.y - 0.5) * 80,
          scale: [1, 1.3, 1],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50, damping: 20 },
          y: { type: 'spring', stiffness: 50, damping: 20 },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 60%)',
        }}
        animate={{
          x: (mousePosition.x - 0.5) * -60,
          y: (mousePosition.y - 0.5) * -60,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          x: { type: 'spring', stiffness: 40, damping: 20 },
          y: { type: 'spring', stiffness: 40, damping: 20 },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32"
        style={{ opacity, y }}
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-yellow text-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span className="text-brand-yellow">An emotional tech company</span>
          </motion.span>
        </motion.div>

        {/* Main Title with Character Animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-8 tracking-tighter"
        >
          <span className="block text-gradient text-glow">
            <AnimatedCharacters text="Growth" delay={0.4} />
          </span>
          <span className="block text-white/80 mt-2">
            <AnimatedCharacters text="Growth via AI" delay={0.6} />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl sm:text-2xl text-zinc-300 mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          データで"売れる"を再現し、成約の最短ルートをつくる。
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          ブランドマネジメント、ライブコマース、AI基盤を統合し、
          コンテンツから成約までを最適化します。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 btn-glass-primary overflow-hidden"
          >
            <span className="relative z-10">相談する</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-amber"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            to="/ai"
            className="group inline-flex items-center justify-center gap-2 btn-glass"
          >
            <Play className="w-4 h-4" />
            <span>muni LIVE.aiを知る</span>
          </Link>
          <Link
            to="/careers"
            className="group inline-flex items-center justify-center gap-2 btn-glass-outline"
          >
            <span>採用を見る</span>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '500+', label: 'ブランド支援' },
            { value: '¥10B+', label: '成約実績' },
            { value: '98%', label: '顧客満足度' },
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-24"
        >
          <motion.div 
            className="flex flex-col items-center gap-2 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}
          >
            <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border border-zinc-700 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 rounded-full bg-brand-yellow"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
