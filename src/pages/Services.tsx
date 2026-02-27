import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Video, Cpu, Check } from 'lucide-react';
import { FloatingCircle, FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

const Services = () => {
  const services = [
    {
      id: 'brand-management',
      title: 'ブランドマネジメント',
      subtitle: 'Brand Management',
      description: 'ブランドを、"売れる構造"にする。売上は偶然ではなく設計の結果。勝ち筋を定義し、継続成長の仕組みをつくります。',
      icon: Building2,
      gradient: 'from-brand-yellow to-brand-gold',
      features: [
        '事業/ブランド戦略',
        'KPI設計',
        '商品・価格・訴求設計',
        'クリエイティブ指針',
        'オペレーション設計',
        '越境ローカライズ',
      ],
      process: ['診断', '仮説設計', '実行', '検証', 'スケール'],
    },
    {
      id: 'live-commerce',
      title: 'ブランドライブコマース',
      subtitle: 'Brand Live Commerce',
      description: 'WOW体験を設計し、成約に直結させる。ライブは"売る場"ではなく、"心が動く場"。熱量を成果へ変えます。',
      icon: Video,
      gradient: 'from-brand-gold to-brand-amber',
      features: [
        '企画・構成',
        '台本・演出設計',
        '配信運用',
        '撮影/制作',
        '切り抜き量産',
        'データ分析と改善',
      ],
      compliance: '薬機法・景表法など日本特有の表現規制を前提に、ブランド資産を守りながら成果を最大化する運用を行います。',
    },
    {
      id: 'muniai',
      title: 'muni LIVE.ai',
      subtitle: 'AI Live Platform / Multi-Agent',
      description: 'コンテンツから成約まで、最短ルートを"自動運転化"する。muni LIVE.aiは、越境・日本進出の成長をAIで再現可能にするマルチエージェント基盤です。',
      icon: Cpu,
      gradient: 'from-brand-amber to-brand-orange',
      features: [
        'Product Agent（爆品選定）',
        'Content Agent（台本・切片・コンプラ）',
        'Data Agent（成約分析）',
        'Supply Agent（在庫・利益）',
        'CRM Agent（再購入）',
        'Match Agent（最適マッチング）',
      ],
      pricing: [
        { type: 'SaaS', desc: '台本/検閲/分析などのAIツール提供' },
        { type: 'Managed', desc: '日本進出・運用を代行し、実戦で精度を磨く' },
        { type: 'Revenue Share', desc: 'AIが生む売上増分から手数料徴収' },
      ],
    },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-64 h-64 border-brand-yellow/10 top-20 -left-20"
            delay={0}
          />
          <FloatingSquare 
            className="w-6 h-6 bg-brand-yellow/15 bottom-1/4 right-20"
            delay={0.3}
          />
          <FloatingCircle 
            className="w-4 h-4 bg-brand-gold/30 top-1/3 right-1/4"
            delay={0.5}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              Services
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">成約の最短ルート</span>を、<br />
              設計して実装する。
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              戦略設計からライブ運用、AI基盤まで。目的に合わせて、最短距離で成果へ導きます。
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-6`}>
                    <service.icon className="w-5 h-5 text-brand-yellow" />
                    <span className="text-brand-yellow text-sm font-medium">{service.subtitle}</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-brand-yellow" />
                        </div>
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process (for brand management) */}
                  {service.process && (
                    <div className="mb-8">
                      <h3 className="text-white font-semibold mb-4">進め方</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, i) => (
                          <div key={step} className="flex items-center">
                            <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 text-sm border border-white/5">
                              {step}
                            </span>
                            {i < service.process.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-zinc-700 mx-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Compliance (for live commerce) */}
                  {service.compliance && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-8">
                      <p className="text-zinc-400 text-sm">{service.compliance}</p>
                    </div>
                  )}

                  {/* Pricing (for muni LIVE.ai) */}
                  {service.pricing && (
                    <div className="mb-8">
                      <h3 className="text-white font-semibold mb-4">導入形態</h3>
                      <div className="space-y-3">
                        {service.pricing.map((price) => (
                          <div key={price.type} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <span className="text-brand-yellow font-semibold text-sm">{price.type}</span>
                            <span className="text-zinc-400 text-sm">{price.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    to={service.id === 'muniai' ? '/products' : '#'}
                    className="inline-flex items-center gap-2 btn-glass-primary"
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${service.gradient} p-1`}>
                    <div className="w-full h-full rounded-3xl bg-dark-light flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-white/10" />
                    </div>
                  </div>
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-10 blur-3xl -z-10`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
