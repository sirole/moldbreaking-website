import { motion } from 'framer-motion';
import { ArrowRight, Package, BookOpen, Mic, Radio, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const Creators = () => {
  const growthSteps = [
    {
      num: '01',
      title: '自分の声を見つける',
      desc: '自分だけの表現スタイルを見つける',
    },
    {
      num: '02',
      title: '成約のロジックを理解する',
      desc: '成約につながるライブの構造を学ぶ',
    },
    {
      num: '03',
      title: '配信者からプロへ',
      desc: 'プロとしての道を歩み始める',
    },
  ];

  const dailySchedule = [
    { time: '09:00', icon: Package, title: '選品', desc: '本日の商品選定' },
    { time: '11:00', icon: BookOpen, title: 'オリエンテーション', desc: 'チームミーティング' },
    { time: '14:00', icon: BookOpen, title: '脚本', desc: '台本作成・レビュー' },
    { time: '17:00', icon: Mic, title: '練習', desc: 'リハーサル・調整' },
    { time: '20:00', icon: Radio, title: 'ライブ', desc: '本番ライブ' },
    { time: '22:30', icon: BarChart3, title: '振り返り', desc: '分析・改善' },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/5 via-transparent to-transparent" />
          <FloatingRing className="w-96 h-96 border-brand-yellow/5 top-0 right-0" delay={0} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              CREATORS
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              期待される<br />
              <span className="text-gradient">配信者</span>になる。
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl mx-auto mb-8">
              ライブは、ただの販売ではない。<br />
              <span className="text-brand-yellow font-semibold">WOW</span> を生み出せる。
            </p>
            <motion.a
              href="https://docs.google.com/forms/u/0/d/1oRMHizPQbWYhlqaqoDsFMFGAV2EsA6lM5wRnfL2IaCc/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-8 py-4"
            >
              muniLIVEに応募する
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* WOW Philosophy */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              ライブは、ただの販売ではない。
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              素晴らしいライブは、<br />
              <span className="text-brand-yellow font-semibold">WOW</span> を生み出す。
            </p>
            <div className="flex justify-center gap-6">
              {['驚き', '共感', '信頼'].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* muniLIVE Section with Background Logo */}
      <section className="section-padding border-t border-white/5 relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <img 
            src="/imgs/Logos/Brands/muniLIVE_logo_0821.png" 
            alt="" 
            className="w-[600px] h-auto"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <img 
                src="/imgs/Logos/Brands/muniLIVE_logo_0821.png" 
                alt="muniLIVE" 
                className="h-8 w-auto"
              />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              構造で、<span className="text-gradient">再現する</span>成長。
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              感覚ではなく、データと実践から導き出された<br />
              再現性のある成長プログラム。
            </p>
          </motion.div>

          {/* Growth Steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {growthSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group hover:border-brand-yellow/30 transition-all"
              >
                {/* Large background number */}
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <span className="text-brand-yellow text-sm font-medium">{step.num}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Joshino Asami */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="/imgs/People/JoshinoAsami_01.png"
                  alt="Joshino Asami"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-brand opacity-10 blur-3xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-yellow text-sm mb-4 block">Founder</span>
              <h2 className="text-4xl font-bold text-white mb-2">Joshino Asami</h2>
              <p className="text-xl text-zinc-400 mb-6">
                構造で、運ではない。
              </p>
              <p className="text-zinc-500 leading-relaxed">
                ライブコマースの現場で培った実戦経験と、<br />
                データに基づく成約の構造。<br />
                その両方を持つからこそ、<br />
                誰もが再現できる成長の道筋を描ける。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Story - Numbers with Icons */}
      <section className="section-padding border-t border-white/5 bg-gradient-to-b from-dark to-dark-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 1500万 with icon */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-4 mb-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-brand-yellow" />
                </div>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-7xl sm:text-8xl lg:text-9xl font-bold text-gradient block"
              >
                1500万
              </motion.span>
              <p className="text-zinc-400 mt-4">単場成約突破</p>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-white/10 mx-auto my-12" />

            {/* 1亿日元 with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                </div>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                単場 <span className="text-3xl font-bold text-brand-yellow">1 億円</span>、<br />
                も夢ではない。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              muniLIVEでの一日
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/10" />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {dailySchedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-yellow/10 mb-4">
                    <item.icon className="w-6 h-6 text-brand-yellow" />
                    {/* Dot on timeline */}
                    <div className="hidden lg:block absolute -bottom-8 w-2 h-2 rounded-full bg-brand-yellow" />
                  </div>
                  <p className="text-brand-yellow text-sm font-medium">{item.time}</p>
                  <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                  <p className="text-zinc-500 text-xs mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closed Loop */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['選品', '準備', '表現', '成約', '振り返り'].map((word, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-white/5 text-zinc-300">
                  {word}
                </span>
              ))}
            </div>
            <p className="text-2xl text-white font-light">
              点だけでは、<span className="text-brand-yellow">不十分</span>。<br />
              <span className="text-gradient font-bold">導線</span>が重要だ。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding border-t border-white/5 bg-gradient-to-b from-dark-light/30 to-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              あなたの<span className="text-gradient">最初のWOW</span>を、<br />
              生み出す準備はできたか？
            </h2>
            <motion.a
              href="https://docs.google.com/forms/u/0/d/1oRMHizPQbWYhlqaqoDsFMFGAV2EsA6lM5wRnfL2IaCc/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-10 py-5 text-lg"
            >
              muniLIVEに応募する
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <p className="text-zinc-500 text-sm mt-6">
              全員が選ばれるわけではない。
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Creators;
