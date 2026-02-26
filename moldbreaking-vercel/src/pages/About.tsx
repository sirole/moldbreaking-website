import { motion } from 'framer-motion';
import { Target, Rocket, Users, Globe, ArrowRight } from 'lucide-react';
import { FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

const About = () => {
  const companyInfo = [
    { label: '会社名', value: 'MoldBreaking株式会社' },
    { label: '設立', value: '2014年10月' },
    { label: '所在地', value: '〒150-0046 東京都渋谷区松濤２丁目１５−１３ X-BASE SHIBUYA 102' },
    { label: 'スタジオ', value: '〒340-0034 埼玉県草加市氷川町2127-13 ケイユ―ビル5階A' },
    { label: '代表者', value: '代表取締役社長 原 朝未' },
    { label: 'エリート', value: '7名（2026年現在）' },
    { label: '外部組織', value: '50名超え' },
    { label: '事業内容', value: 'ブランドグロース事業・クリエイターグロース事業・AI基盤' },
  ];

  const evolution = [
    {
      year: '2018.11',
      title: 'Total Marketing',
      subtitle: 'BEAUTY特化型トータルマーケティング開始（日本 → 中国）',
      desc: '日本ブランドの中国市場成長を支援。越境成長モデルを構築。',
    },
    {
      year: '2021.04',
      title: 'General Distribution',
      subtitle: 'BEAUTY特化型総代理事業開始（中国 → 日本）',
      desc: '中国ブランドの日本市場参入を実行。越境を販売から市場構造へ。',
    },
    {
      year: '2023.04',
      title: 'Brand × Live Commerce',
      subtitle: 'ブランドマネジメント事業開始 TikTokライブコマース本格展開（アジア → 日本）',
      desc: 'コンテンツ主導型取引モデルへ移行。人依存成長の最大化。',
    },
    {
      year: '2025.12',
      title: 'Live Commerce Infrastructure',
      subtitle: 'ライブコマース基盤 開発開始',
      desc: 'オペレーションからシステムへ。',
    },
    {
      year: '2026.03',
      title: 'AI Infrastructure',
      subtitle: 'AI基盤事業 社内全面始動',
      desc: '経験を構造へ。構造をAIへ。',
    },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-64 h-64 border-brand-yellow/10 top-10 -left-20"
            delay={0}
          />
          <FloatingSquare 
            className="w-5 h-5 bg-brand-yellow/15 bottom-1/4 right-20"
            delay={0.3}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-zinc-500 mb-4">An emotional tech company.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              感性とテクノロジーで、<br />
              <span className="text-gradient">取引の新しいルール</span>をつくる。
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
              >
                Mission
              </motion.span>
              <h2 className="text-3xl font-bold text-white mb-6">
                ミッション
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                MoldBreakingは、ブランドの成長を<span className="text-brand-yellow font-medium">"確定的な作業"</span>に変えるために存在します。
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                日本で磨いた売れる文法と成約データを基盤に、運用とAIの両輪で、再現可能な成長を提供します。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: '明確な目標', desc: 'データで成果を測定' },
                { icon: Rocket, title: '迅速な実行', desc: '最短距離で成果へ' },
                { icon: Users, title: 'チームワーク', desc: '多様な才能の融合' },
                { icon: Globe, title: 'グローバル展開', desc: '世界への挑戦' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl card-glass text-center"
                >
                  <item.icon className="w-8 h-8 text-brand-yellow mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              Company
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              会社概要
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              {companyInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-4 border-b border-white/5"
                >
                  <span className="text-zinc-500">{item.label}</span>
                  <span className="text-white text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section - Compact Layout */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              Leadership
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              創業者
            </h2>
          </motion.div>

          {/* Two Founders Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 上司のあさみ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass rounded-3xl p-6"
            >
              {/* Image - Smaller */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brand-yellow/30">
                <img
                  src="/imgs/People/founder_hara.png"
                  alt="上司のあさみ"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs mb-3 inline-block">
                  代表取締役社長
                </span>
                <h3 className="text-2xl font-bold text-white">上司のあさみ</h3>
                <p className="text-zinc-500 text-sm">JOSHINO ASAMI</p>
              </div>

              <div className="p-3 rounded-xl bg-brand-yellow/5 border border-brand-yellow/20 mb-4">
                <p className="text-brand-yellow text-xs font-medium mb-1">Live Commerce Visionary</p>
                <p className="text-white text-sm">健康で美しい、を世界基準へ。</p>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                "売る人"ではなく、ライブを通してWOW（驚嘆）を届ける存在。
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-brand-yellow text-xs font-medium shrink-0 w-16">Concept</span>
                  <p className="text-zinc-300 text-sm">健康で美しい</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-yellow text-xs font-medium shrink-0 w-16">Core Value</span>
                  <p className="text-zinc-300 text-sm">ライブを通してWOWを届けよ</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-zinc-500 text-xs">2026年、Growth via AI ビジョンでMoldBreaking代表取締役に就任</p>
              </div>
            </motion.div>

            {/* 郭兮若 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glass rounded-3xl p-6"
            >
              {/* Image - Smaller */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brand-yellow/30">
                <img
                  src="/imgs/People/founder_guo.png"
                  alt="郭兮若"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs mb-3 inline-block">
                  Founder & CEO
                </span>
                <h3 className="text-2xl font-bold text-white">郭 兮若</h3>
                <p className="text-zinc-500 text-sm">KAKU KEIJAKU</p>
              </div>

              <div className="p-3 rounded-xl bg-brand-yellow/5 border border-brand-yellow/20 mb-4">
                <p className="text-brand-yellow text-xs font-medium mb-1">Break the Mold.</p>
                <p className="text-white text-xs">From Cross-Border Operator</p>
                <p className="text-white text-xs">to AI Infrastructure Builder.</p>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                中国出身、早稲田大学中退、日本在住20年。2014年 MoldBreaking創業。
              </p>

              <div className="space-y-2">
                {[
                  { num: '01', title: 'Understand the System', desc: '資生堂/花王/POLA-ORBIS' },
                  { num: '02', title: 'Break the Boundary', desc: '花西子/COLORKEY' },
                  { num: '03', title: 'Rebuild the Path', desc: 'ライブコマース導入' },
                ].map((phase) => (
                  <div key={phase.num} className="flex items-center gap-2">
                    <span className="text-brand-yellow text-xs font-bold">{phase.num}</span>
                    <p className="text-zinc-300 text-xs">{phase.title}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-zinc-500 text-xs">2030 Vision | All in AI. 世界ブランド向けAI Infrastructure構築</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Evolution */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              Evolution
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Company Evolution
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-yellow via-brand-gold to-brand-amber" />

            <div className="space-y-8">
              {evolution.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-brand-yellow border-4 border-dark" />
                  
                  {/* Content */}
                  <div className="card-glass rounded-2xl p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-brand-yellow font-bold">{item.year}</span>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-1">{item.subtitle}</p>
                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Direction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 text-brand-yellow mb-4">
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm font-medium">Direction</span>
            </div>
            <p className="text-xl text-white font-light">
              From Cross-Border Operator
            </p>
            <p className="text-xl text-white font-light">
              to <span className="text-gradient font-bold">AI Transaction Infrastructure</span>.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
