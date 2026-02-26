import { motion } from 'framer-motion';
import { BarChart3, Zap, Globe, Heart } from 'lucide-react';
import Card3D from './Card3D';

const Values = () => {
  const values = [
    {
      icon: BarChart3,
      title: 'Data-Driven',
      titleJa: 'データ駆動',
      description: '意思決定をデータで行う。感覚ではなく、数字で成果を語る。',
      color: '#FFE225',
      gradient: 'from-yellow-400 to-amber-500',
    },
    {
      icon: Zap,
      title: 'Direct-Conversion',
      titleJa: '直接成約',
      description: '成約までの距離を最短化する。無駄を削ぎ、最短ルートをつくる。',
      color: '#FFD700',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Global-Scale',
      titleJa: 'グローバル展開',
      description: '日本で磨き、世界へ展開する。国内で勝ち筋を確立し、越境へ。',
      color: '#FFB800',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: Heart,
      title: 'WOW Experience',
      titleJa: '感動体験',
      description: '心が動く体験を、成果に変える。感情とビジネスの両立。',
      color: '#FF9500',
      gradient: 'from-red-400 to-rose-500',
    },
  ];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/geometric-abstract.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* Glowing Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 226, 37, 0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-brand-yellow/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-6 h-6 border border-brand-gold/20 rounded-lg"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-medium mb-6 border border-brand-yellow/20"
          >
            Philosophy
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            私たちの行動指針。これらの価値観が、すべての意思決定の基盤となります。
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Card3D className="group h-full">
                <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-brand-yellow/30 transition-all duration-500 relative overflow-hidden">
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${value.color}15, transparent 60%)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4">{value.titleJa}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
                    style={{ background: `linear-gradient(to right, ${value.color}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
