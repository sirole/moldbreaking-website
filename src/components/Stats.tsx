import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={ref}>
      {value.includes('¥') ? '¥' : ''}
      {formatNumber(count)}
      {value.includes('+') ? '+' : ''}
      {value.includes('B') ? 'B' : ''}
      {value.includes('%') ? '%' : ''}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const stats = [
    { value: '500', suffix: '+', label: 'ブランド支援', icon: '🏢' },
    { value: '¥10', suffix: 'B+', label: '成約実績', icon: '💰' },
    { value: '98', suffix: '%', label: '顧客満足度', icon: '⭐' },
    { value: '3', suffix: '', label: 'コア事業', icon: '🎯' },
  ];

  return (
    <section
      ref={containerRef}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/network.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
      </motion.div>

      {/* Animated Grid */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 226, 37, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 226, 37, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-brand-yellow/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-4 h-4 bg-brand-yellow/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-medium mb-6 border border-brand-yellow/20"
            >
              Achievement
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-gradient">実績</span>と信頼
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              日本トップクラスの成約データと運用ノウハウを起点に、ブランドの立ち上げからスケールまでを支援してきました。
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              私たちは<span className="text-brand-yellow font-medium">「これから試す」のではなく、すでに勝っている手法をAIで拡大</span>します。
            </p>
          </motion.div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 cursor-pointer"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 226, 37, 0.1), transparent 60%)',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
