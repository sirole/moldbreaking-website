import { motion } from 'framer-motion';
import { 
  Package, 
  FileText, 
  BarChart3, 
  Truck, 
  Users, 
  UserCheck,
  Check,
  Sparkles
} from 'lucide-react';
import { FloatingCircle, FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

const Products = () => {
  const agents = [
    {
      id: 'product',
      title: 'Product Agent',
      titleJa: '爆品選定',
      description: '売れる兆しを、先に掴む。市場・競合・トレンドから"勝てる商品"を予測します。',
      icon: Package,
      color: 'from-brand-yellow to-brand-gold',
      features: ['市場分析', '競合調査', 'トレンド予測', '商品選定'],
    },
    {
      id: 'content',
      title: 'Content Agent',
      titleJa: '台本・切片・コンプラ',
      description: '速く、強く、そして安全に。台本生成・切片量産・薬機法/景表法チェックをリアルタイムで。',
      icon: FileText,
      color: 'from-brand-gold to-brand-amber',
      features: ['台本生成', '切片量産', 'リアルタイム検閲', '規制対応'],
    },
    {
      id: 'data',
      title: 'Data Agent',
      titleJa: '成約分析',
      description: '"売れる理由"を、解読する。トークと購買行動を紐づけ、再現できる資産へ変換します。',
      icon: BarChart3,
      color: 'from-brand-amber to-brand-orange',
      features: ['トーク分析', '購買行動マッピング', '勝ちパターン構造化', '横展開支援'],
    },
    {
      id: 'supply',
      title: 'Supply Agent',
      titleJa: '在庫・利益',
      description: '在庫と利益を、常時監視する。売れてから慌てない。利益率を守りながら伸ばします。',
      icon: Truck,
      color: 'from-brand-orange to-orange-500',
      features: ['在庫監視', '原価管理', '利益率追跡', 'アラート通知'],
    },
    {
      id: 'crm',
      title: 'CRM Agent',
      titleJa: '再購入',
      description: '一度の成約を、長期の関係に変える。購入後の体験設計で、LTVを最大化します。',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      features: ['顧客セグメント', 'コミュニケーション設計', '再購入促進', 'LTV最大化'],
    },
    {
      id: 'match',
      title: 'Match Agent',
      titleJa: '最適マッチング',
      description: '"誰が売るか"を、科学する。ROI予測に基づき、ブランド×クリエイターの最適解を提示します。',
      icon: UserCheck,
      color: 'from-red-500 to-rose-500',
      features: ['ROI予測', '相性分析', 'キャスティング支援', '効果最大化'],
    },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-48 h-48 border-brand-yellow/10 top-20 right-20"
            delay={0}
          />
          <FloatingSquare 
            className="w-5 h-5 bg-brand-yellow/15 bottom-1/4 left-20"
            delay={0.3}
          />
          <FloatingCircle 
            className="w-3 h-3 bg-brand-gold/30 top-1/3 left-1/4"
            delay={0.5}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span className="text-brand-yellow text-sm font-medium">AI Live Platform</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">muni LIVE.ai</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-4">
              ライブコマースの"取引インフラ"を、AIで再定義する。
            </p>
            <p className="text-zinc-400 leading-relaxed">
              勝ち筋をデータ化し、成約までの距離を極限まで短縮します。
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Product Overview
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                muni LIVE.aiは、ユーザーの目的に合わせて複数の専門AIが協働する<span className="text-brand-yellow font-medium">マルチエージェント基盤</span>です。
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Orchestratorが全体を指揮し、各エージェントが専門領域を担当。全リンクを一貫した意思決定で回します。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <span className="text-zinc-300">Orchestrator（中央制御）</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                    <span className="text-brand-yellow font-bold">6</span>
                  </div>
                  <span className="text-zinc-300">Agents：Product / Content / Data / Supply / CRM / Match</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl bg-dark-light border border-white/5 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-brand mx-auto mb-4 flex items-center justify-center">
                    <span className="text-dark font-bold text-2xl">M</span>
                  </div>
                  <p className="text-zinc-500">muni LIVE.ai Architecture</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-brand opacity-10 blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              6つの<span className="text-gradient">AIエージェント</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              各エージェントが専門領域を担当し、ライブコマースの全リンクをカバーします。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl card-glass h-full overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4`}>
                    <agent.icon className="w-6 h-6 text-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-yellow transition-colors">
                    {agent.title}
                  </h3>
                  <p className="text-brand-yellow text-sm font-medium mb-3">
                    {agent.titleJa}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {agent.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {agent.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 rounded-full bg-white/5 text-zinc-500 text-xs border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Implementation */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              サービス<span className="text-gradient">導入</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              成果へ最短で到達する導入設計。SaaSからManagedまで、目的と体制に合わせて選べます。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'SaaS',
                description: '台本/検閲/分析などのAIツール提供',
                features: ['AIツール利用', 'API連携', 'サポート'],
              },
              {
                title: 'Managed',
                description: '日本進出・運用を代行し、実戦で精度を磨く',
                features: ['運用代行', '専任チーム', '定期レポート'],
                highlighted: true,
              },
              {
                title: 'Revenue Share',
                description: 'AIが生む売上増分から手数料徴収',
                features: ['成果報酬', 'リスク軽減', '長期パートナー'],
              },
            ].map((plan) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 rounded-3xl ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-brand-yellow/10 to-brand-gold/10 border border-brand-yellow/20'
                    : 'card-glass'
                }`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-yellow" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 统一 CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-12 py-4 text-lg"
            >
              相談する
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;
