import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Video, Cpu } from 'lucide-react';
import Card3D from './Card3D';

const CoreServices = () => {
  const services = [
    {
      id: 1,
      title: 'Brand Growth Business',
      subtitle: 'ブランドマネジメント',
      description: '売れる構造を設計し、運用で育てる。ブランドの魅力を"伝わる形"に翻訳し、継続成長の仕組みをつくります。',
      icon: Building2,
      image: '/images/network.jpg',
      features: ['事業/ブランド戦略', 'KPI設計', 'クリエイティブ指針', '越境ローカライズ'],
      gradient: 'from-brand-yellow to-brand-gold',
      link: '/brands',
      stats: { value: '150+', label: '支援ブランド' },
    },
    {
      id: 2,
      title: 'Creator / Talent Business',
      subtitle: 'ブランドライブコマース',
      description: 'WOW体験を設計し、成約に直結させる。視聴者の感情が動く瞬間を設計し、購買意思決定までの距離を最短化します。',
      icon: Video,
      image: '/images/app-mockup.jpg',
      features: ['企画・台本・演出', '配信運用', '切り抜き量産', 'キャスティング'],
      gradient: 'from-brand-gold to-brand-amber',
      link: '/creators',
      stats: { value: '¥5B+', label: '成約実績' },
    },
    {
      id: 3,
      title: 'Infrastructure Business',
      subtitle: 'muni LIVE.ai',
      description: '勝ち筋をアルゴリズム化し、全リンクを自動運転へ。コンテンツから成約まで、最短ルートを"自動運転化"します。',
      icon: Cpu,
      image: '/images/geometric-abstract.jpg',
      features: ['爆品選定AI', '台本生成', 'リアルタイム検閲', '成約分析'],
      gradient: 'from-brand-amber to-brand-orange',
      link: '/ai',
      stats: { value: '6', label: 'AIエージェント' },
    },
  ];

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-dark-light to-transparent" />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 border border-brand-yellow/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-brand-yellow/30 rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
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
            Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-gradient">3つのコア</span>事業
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            ブランドマネジメント、ライブコマース、AI基盤を組み合わせ、
            状況に応じた最適解を提案します。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <Link to={service.link} className="block h-full">
                <Card3D className="group h-full">
                  <div className="h-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-brand-yellow/30 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                        <service.icon className="w-6 h-6 text-dark" />
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                        <span className="text-brand-yellow font-bold">{service.stats.value}</span>
                        <span className="text-zinc-400 text-xs ml-1">{service.stats.label}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-zinc-500">{service.subtitle}</p>
                      </div>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-xs border border-white/5 hover:border-brand-yellow/30 hover:text-brand-yellow transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-brand-yellow group/link">
                        <span className="text-sm font-medium">詳しく見る</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
