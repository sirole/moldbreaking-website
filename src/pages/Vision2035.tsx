import { motion } from 'framer-motion';
import { TrendingUp, Users, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { FloatingRing, FloatingSquare, DecoLine } from '../components/GeometricShapes';

const Vision2035 = () => {
  const values = [
    { title: 'Break the Mold', desc: '既存の常識を打ち破り、新しい構造を作る' },
    { title: 'WOW Experience', desc: '人を驚かせる体験を作る' },
    { title: 'Real Results', desc: '実際の成果で価値を証明する' },
    { title: 'Build Together', desc: 'ブランド・クリエイター・パートナーと共に成長する' },
  ];

  const roadmap = [
    { year: '2026–2028', title: '事業・AI基盤構築', desc: 'コア事業の確立とAI基盤の開発' },
    { year: '2029', title: 'NASDAQ IPO申請', desc: 'グローバル資本市場への挑戦' },
    { year: '2030', title: 'NASDAQ 上場', desc: '世界の投資家と共に成長する' },
    { year: '2035', title: '時価総額100億ドル', desc: 'グローバルグロースプラットフォーム企業へ', highlight: true },
  ];

  const revenue2026 = [
    { label: 'ライブコマース', value: '15', unit: '億円' },
    { label: 'ブランド管理', value: '12', unit: '億円' },
    { label: 'muniLIVE AI', value: '3', unit: '億円' },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing className="w-96 h-96 border-brand-yellow/5 top-0 right-0" delay={0} />
          <FloatingSquare className="w-5 h-5 bg-brand-yellow/10 bottom-1/4 left-20" delay={0.3} />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Large Typography */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="text-white">MoldBreaking</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mt-2"
              >
                2035 Vision
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-zinc-400 mb-4"
            >
              Break the Mold. Build the Future of Growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed"
            >
              AIとデータの力でブランド成長の仕組みを再構築し、<br />
              世界のブランドが成長するための<span className="text-brand-yellow">Growth via AI</span>の基盤企業になる。
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* 100B Goal */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              2035 Vision
            </motion.span>

            <h2 className="text-3xl font-bold text-white mb-4">
              100億ドル企業への道
            </h2>

            <p className="text-zinc-400 mb-12">
              2035年、MoldBreakingは時価総額100億ドル企業となり、<br />
              ブランド・クリエイター・AIが融合した次世代のグロースプラットフォーム企業を目指す。
            </p>

            {/* Big Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-gradient leading-none">
                100億
              </span>
              <p className="text-zinc-400 text-lg mt-2">ドル</p>
              <p className="text-brand-yellow text-sm mt-1">2035年目標</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Growth via AI */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Growth via AI
            </h2>
            <p className="text-zinc-400">
              AIとコンテンツを融合させ、ブランドの成長を最短距離で実現する。
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Creator', desc: 'コンテンツ' },
              { icon: TrendingUp, label: 'Commerce', desc: '取引' },
              { icon: Sparkles, label: 'Data', desc: 'データ' },
              { icon: Rocket, label: 'AI', desc: 'テクノロジー' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl card-glass"
              >
                <item.icon className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
                <p className="text-white font-semibold">{item.label}</p>
                <p className="text-zinc-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              Our Values
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              Break the Mold. Build the Future.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl card-glass"
              >
                <h3 className="text-xl font-bold text-brand-yellow mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Goal Roadmap */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Capital Goal
            </h2>
            <p className="text-zinc-400">
              2035年 100億ドル企業への成長軌道
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-yellow via-brand-gold to-brand-amber" />

            <div className="space-y-8">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Dot */}
                  <div className={`absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-4 border-dark ${item.highlight ? 'bg-brand-yellow' : 'bg-brand-yellow/50'}`} />

                  {/* Content */}
                  <div className={`p-5 rounded-2xl ${item.highlight ? 'bg-gradient-to-r from-brand-yellow/10 to-brand-gold/10 border border-brand-yellow/30' : 'card-glass'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`font-bold ${item.highlight ? 'text-brand-yellow text-xl' : 'text-brand-yellow'}`}>{item.year}</span>
                      <span className="text-white font-semibold">{item.title}</span>
                    </div>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Target */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              2026年度目標
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              年間売上目標
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-7xl sm:text-8xl font-bold text-gradient">30</span>
              <span className="text-2xl text-zinc-400 ml-2">億円</span>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {revenue2026.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl card-glass"
              >
                <p className="text-zinc-400 text-sm mb-2">{item.label}</p>
                <p className="text-4xl font-bold text-brand-yellow">{item.value}</p>
                <p className="text-zinc-500 text-sm">{item.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization & Ecosystem */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              組織とエコシステム
            </h2>
            <p className="text-zinc-400">
              成長を支える人材とパートナーネットワーク
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'CXO', value: '7名' },
              { label: 'インフルエンサー育成', value: '100人' },
              { label: '提携クリエイター', value: '1万人' },
              { label: 'サービスブランド', value: '1000以上' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-5 rounded-2xl card-glass"
              >
                <p className="text-3xl font-bold text-brand-yellow mb-1">{item.value}</p>
                <p className="text-zinc-400 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Structure */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              事業構造
            </h2>
            <p className="text-zinc-400 mb-8">
              三つの事業が連携し、AIを中心に成長する企業へ。
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Live Commerce', desc: 'ライブコマース事業' },
              { title: 'Brand Growth', desc: 'ブランド成長支援' },
              { title: 'AI System', desc: 'AI基盤・テクノロジー' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl card-glass text-center"
              >
                <h3 className="text-lg font-bold text-brand-yellow mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Break the Mold. Build the Future.
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-8 py-4"
            >
              一緒に未来を作る
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Vision2035;
