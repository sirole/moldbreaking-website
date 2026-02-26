import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Heart } from 'lucide-react';
import { FloatingCircle, FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

const Careers = () => {
  const values = [
    { title: 'Data-Driven', description: '感覚ではなく、データで意思決定する' },
    { title: 'Direct-Conversion', description: '成約までの距離を削ることが正義' },
    { title: 'Global-Scale', description: '日本で磨き、世界へ展開する' },
    { title: 'WOW Experience', description: '心が動く体験が、すべての起点' },
  ];

  const promises = [
    {
      title: 'ミニCEO体験',
      description: 'PLを持ち、意思決定は速く、結果がすべて。1つの事業・ブランドを「自分の手で育てる」経験ができます。',
      icon: Target,
    },
    {
      title: '市場価値の最大化',
      description: 'AI × ライブ × データ。今後10年で最も価値が上がる領域のど真ん中で、実戦経験を積めます。',
      icon: TrendingUp,
    },
    {
      title: 'WOW体験をつくる側へ',
      description: '感情が動く瞬間を設計し、それを成約につなげる。クリエイティブとビジネスの両立を、本気で追求できます。',
      icon: Heart,
    },
  ];

  const cxoSeats = [
    { title: 'CEO', subtitle: 'Chief Executive Officer', desc: 'ビジョン提示、資金調達、全体統括' },
    { title: 'COO', subtitle: 'Chief Operating Officer', desc: '戦略を現場に落とし込み、数字を作る' },
    { title: 'CFO', subtitle: 'Chief Financial Officer', desc: '財務戦略、資金繰り、IPO準備' },
    { title: 'CIO/CTO', subtitle: 'Chief Information/Technology Officer', desc: 'Multi-Agent基盤構築、AI活用推進' },
    { title: 'CHO/CSO', subtitle: 'Chief Human/Strategy Officer', desc: '組織開発、採用、カルチャー醸成' },
    { title: 'CGO/CBO', subtitle: 'Chief Growth/Brand Officer', desc: 'グロース戦略、ブランド統括' },
    { title: 'CXO', subtitle: 'Chief Experience Officer', desc: 'Customer Experienceを企業価値に変換', open: true },
  ];

  const steps = [
    { step: '01', title: 'Intent Entry', desc: '意思表明（書類選考）', detail: '「なぜCXOとしてこの挑戦に参加したいのか」に答えてください。' },
    { step: '02', title: 'Dialogue Session', desc: '対話セッション（一次）', detail: '思考と哲学を共有する対話です。' },
    { step: '03', title: 'CX Challenge', desc: 'CX設計チャレンジ', detail: '実際の事業テーマで設計力を見せてください。' },
    { step: '04', title: 'Founder Session', desc: '創業者セッション', detail: '創業者と1対1で話します。' },
    { step: '05', title: 'Mutual Commitment', desc: '相互コミットメント', detail: '条件・役割・リスク・リターンを出し合います。' },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        {/* Geometric decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-56 h-56 border-brand-yellow/10 top-10 -left-20"
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
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[128px]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-zinc-500 mb-4">An emotional tech company.</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              予算消化の仕事は、もう終わり。<br />
              <span className="text-gradient">成約の最短ルート</span>をつくり、<br />
              10億ブランドを生み出す。
            </h1>
            <p className="text-xl text-brand-yellow font-semibold mb-4">
              Growth via AI
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              MoldBreakingは、ライブコマースの爆発力（点）を、モール・CRM・AIで"線の高収益事業"へ変えるチームです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/u/0/d/1oRMHizPQbWYhlqaqoDsFMFGAV2EsA6lM5wRnfL2IaCc/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-primary inline-flex items-center justify-center gap-2"
              >
                カジュアル面談する
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="btn-glass-outline">
                求人を見る
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Why MoldBreaking */}
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
              なぜ、今<span className="text-gradient">MoldBreaking</span>なのか
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              多くの企業が、まだ「ライブコマース＝属人的な職人芸」の段階にいます。
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              私たちはすでに、日本トップクラスの成約実績とデータを持ち、その成功を<span className="text-brand-yellow font-medium">muni LIVE.ai（マルチエージェント）</span>によって誰でも再現できる"成長インフラ"へ変換しようとしています。
            </p>
            <p className="text-white text-lg leading-relaxed">
              これは単なるスタートアップではありません。<span className="text-brand-yellow font-medium">労働集約型モデルから、AIインフラモデルへの転換点</span>です。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Promises */}
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
              MoldBreakingが<span className="text-gradient">約束する3つのこと</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl card-glass"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-6">
                  <promise.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{promise.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-zinc-400">Valuesが示す働き方</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl card-glass text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-zinc-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CXO Recruitment */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              スーパーエリート<span className="text-gradient">CXO募集</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-2">― 7人で、世界を獲りに行く ―</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              私たちは、<span className="text-white font-medium">たった7人のCXOで経営中枢を構成し、アメリカNASDAQ上場を目指します。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-zinc-300">
              <div className="px-6 py-3 rounded-xl card-glass">
                <span className="text-brand-yellow font-bold">2030年</span>
                <span className="ml-2">ユニコーン企業</span>
              </div>
              <div className="px-6 py-3 rounded-xl card-glass">
                <span className="text-brand-gold font-bold">2035年</span>
                <span className="ml-2">デカコーン企業</span>
              </div>
            </div>
          </motion.div>

          {/* CXO Seats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {cxoSeats.map((seat, index) => (
              <motion.div
                key={seat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`p-4 rounded-xl border ${
                  seat.open
                    ? 'bg-brand-yellow/10 border-brand-yellow/30'
                    : 'bg-dark-light border-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold">{seat.title}</span>
                  {seat.open && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-yellow text-dark text-xs font-semibold">
                      募集中
                    </span>
                  )}
                </div>
                <p className="text-zinc-500 text-xs mb-1">{seat.subtitle}</p>
                <p className="text-zinc-400 text-sm">{seat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Selection Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              CXO Selection Flow
            </h3>
            <p className="text-zinc-400">― 選考ではなく、相互指名のプロセス ―</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-4 rounded-xl card-glass h-full">
                  <span className="text-brand-yellow font-bold text-lg">{step.step}</span>
                  <h4 className="text-white font-semibold mt-2 mb-1">{step.title}</h4>
                  <p className="text-zinc-400 text-sm mb-2">{step.desc}</p>
                  <p className="text-zinc-500 text-xs">{step.detail}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-zinc-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
