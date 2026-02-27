import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, TrendingUp, Shield } from 'lucide-react';
import Card3D from './Card3D';

const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const challenges = [
    {
      icon: Target,
      title: '経験と勘に依存',
      description: 'ライブコマースの現場は属人化しがち',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      icon: TrendingUp,
      title: 'ROIがブラックボックス',
      description: '成果の再現性が担保できない',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Shield,
      title: '規制リスク',
      description: '薬機法・景表法によるブランド毀損リスク',
      color: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-30"
        style={{ y: imageY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/data-viz.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-brand-yellow/20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-4 h-4 bg-brand-yellow/40 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-brand-gold/30"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <motion.div style={{ y: contentY }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-medium mb-6 border border-brand-yellow/20"
            >
              Challenge
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              私たちが
              <br />
              <span className="text-gradient">解く課題</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              越境・国内問わず、ライブコマースの現場は「経験と勘」に依存し、ROIがブラックボックス化しがちです。
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-400 text-lg leading-relaxed mt-4"
            >
              私たちはその不確実性を、<span className="text-brand-yellow font-medium">データと仕組みで"確定的な成長"</span>へ変えます。
            </motion.p>
          </motion.div>

          {/* Right - Challenge Cards with 3D Effect */}
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <Card3D className="group">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-brand-yellow/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-${challenge.color.split('-')[1]}/20`}>
                        <challenge.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-yellow transition-colors">
                          {challenge.title}
                        </h3>
                        <p className="text-zinc-500">
                          {challenge.description}
                        </p>
                      </div>
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-brand-yellow text-lg">→</span>
                      </motion.div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-[5]">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path 
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z" 
            fill="url(#wave-gradient)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#FFE225" />
              <stop offset="1" stopColor="#FFB800" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ProblemSection;
