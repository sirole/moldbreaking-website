import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const News = () => {
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
              News
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              お知らせ
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-24"
          >
            <div className="w-20 h-20 rounded-full bg-brand-yellow/10 flex items-center justify-center mx-auto mb-8">
              <Calendar className="w-10 h-10 text-brand-yellow" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              近日公開
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              最新のニュースやお知らせを準備中です。<br />
              しばらくお待ちください。
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default News;
