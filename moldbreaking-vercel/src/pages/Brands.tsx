import { motion } from 'framer-motion';
import { ArrowRight, Monitor, ShoppingBag, Store, RefreshCw } from 'lucide-react';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const Brands = () => {
  const philosophies = [
    {
      title: '市場は、推測しない。',
      content: 'ライブの現場で、実売で確かめる。一つひとつの購入が、市場の答え。感覚ではなく、事実で判断する。',
      icon: Monitor,
    },
    {
      title: '美しさと、収益は両立できる。',
      content: '世界観を守りながら、転換率を設計する。クリエイティブは、飾りではない。ブランド価値を高めながら、売上をつくる。その両立こそ、私たちの役割。',
      icon: ShoppingBag,
    },
    {
      title: '分断しない。',
      content: 'ライブ。EC。リテール。それぞれを別々に動かさない。一つの流れとして設計する。テストから拡張まで、一本の導線。',
      icon: Store,
    },
    {
      title: 'だから、速い。',
      content: 'やり直さない。遠回りしない。必要な判断を、必要なタイミングで。',
      icon: ArrowRight,
    },
  ];

  // 日本美妆渠道
  const channels = [
    { name: 'Amazon', type: 'EC' },
    { name: 'Qoo10', type: 'EC' },
    { name: 'Rakuten', type: 'EC' },
    { name: '@cosme', type: 'EC' },
    { name: 'LOFT', type: 'リテール' },
    { name: 'PLAZA', type: 'リテール' },
    { name: '松本清', type: 'リテール' },
    { name: '@cosme store', type: 'リテール' },
  ];

  return (
    <main className="bg-dark min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing 
            className="w-64 h-64 border-brand-yellow/10 top-20 -left-20"
            delay={0}
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm mb-6"
            >
              BRANDS
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              点ではなく、<span className="text-gradient">導線</span>で<br />成長させる。
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              ブランドが伸びる瞬間には、理由がある。<br />
              私たちはその理由を、<span className="text-brand-yellow">構造</span>にする。
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Philosophy Sections */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-px bg-brand-yellow/30 mb-8" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-yellow" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    {item.title}
                  </h2>
                  <p className="text-lg text-zinc-400 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent" />
                    <item.icon className="w-24 h-24 text-brand-yellow/20 relative z-10" />
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-yellow/10" />
                    <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-brand-gold/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ライブ・EC・リテール 闭环图 */}
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
              ライブ <span className="text-brand-yellow">×</span> EC <span className="text-brand-yellow">×</span> リテール
            </h2>
            <p className="text-zinc-400">一つの流れとして設計する</p>
          </motion.div>

          {/* 闭环图 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* 中心 */}
            <div className="relative aspect-square">
              {/* 外圈 */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10" />
              
              {/* 三个主要节点 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {/* ライブ */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-brand-yellow/20 border-2 border-brand-yellow flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-brand-yellow" />
                  </div>
                  <p className="text-center text-brand-yellow text-sm mt-2 font-medium">ライブ</p>
                </div>
                
                {/* EC */}
                <div className="absolute bottom-8 left-0">
                  <div className="w-20 h-20 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-brand-gold" />
                  </div>
                  <p className="text-center text-brand-gold text-sm mt-2 font-medium">EC</p>
                </div>
                
                {/* リテール */}
                <div className="absolute bottom-8 right-0">
                  <div className="w-20 h-20 rounded-full bg-brand-amber/20 border-2 border-brand-amber flex items-center justify-center">
                    <Store className="w-8 h-8 text-brand-amber" />
                  </div>
                  <p className="text-center text-brand-amber text-sm mt-2 font-medium">リテール</p>
                </div>
              </motion.div>

              {/* 中心旋转箭头 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCw className="w-16 h-16 text-brand-yellow/30" />
                </motion.div>
              </div>

              {/* 中心文字 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">統合</p>
                  <p className="text-zinc-500 text-xs">インテグレーション</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 日本美妆渠道 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <p className="text-center text-zinc-500 text-sm mb-6">主要販売チャネル</p>
            <div className="flex flex-wrap justify-center gap-3">
              {channels.map((channel, index) => (
                <motion.div
                  key={channel.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm hover:border-brand-yellow/30 hover:text-brand-yellow transition-all"
                >
                  {channel.name}
                  <span className="text-zinc-500 text-xs ml-2">{channel.type}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-px bg-brand-yellow/30 mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              それが、私たちの<span className="text-gradient">基盤</span>。
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {[
                { title: '構造', desc: 'リソースではない' },
                { title: '判断', desc: '表面的な露出でもない' },
                { title: '連続性', desc: 'それが私たちの基盤' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl card-glass relative overflow-hidden group hover:border-brand-yellow/30 transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-brand-yellow mb-2 relative z-10">{item.title}</h3>
                  <p className="text-zinc-400 text-sm relative z-10">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ブランドの<span className="text-gradient">成長</span>を、一緒に。
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-8 py-4"
            >
              お問い合せ
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Brands;
