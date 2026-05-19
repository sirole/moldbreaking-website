import { motion } from 'framer-motion';

const PartnersSection = () => {
  // 品牌顺序：SHESEIDO / ORBIS / ASTALIFT / DOPAMY / SPRX / Evercollagen / VARIHOPE / PerfectDiary / Mistine
  const brandLogos = [
    { name: 'SHISEIDO', file: 'shiseido_logo.png' },
    { name: 'ORBIS', file: 'ORBIS_LOGO.png' },
    { name: 'ASTALIFT', file: 'ASTALIFT_logo.png' },
    { name: 'DOPAMY', file: 'DOPAMY_logo.png' },
    { name: 'SPRX', file: 'SPRX_LOGO.jpg' },
    { name: 'Evercollagen', file: 'EVERCOLLAGEN_logo.png' },
    { name: 'VARIHOPE', file: 'VARIHOPE_logo.png' },
    { name: 'PerfectDiary', file: 'PerfectDiary_logo.png' },
    { name: 'Mistine', file: 'MISTINE_logo.png' },
  ];

  // 媒体顺序：Forbes / chinadaily / tvasahi / tereto / WWD / BiST / VOCE / VIVI / EqualOcean
  const mediaLogos = [
    { name: 'Forbes', file: 'Forbes_logo.png' },
    { name: 'ChinaDaily', file: 'ChinaDaily_logo.png' },
    { name: 'tvasahi', file: 'tvasahi_logo.png' },
    { name: 'tereto', file: 'TereTo_logo.png' },
    { name: 'WWD', file: 'WWD_logo.png' },
    { name: 'BiST', file: 'BiST_logo.png' },
    { name: 'VOCE', file: 'VOCE_LOGO.png' },
    { name: 'VIVI', file: 'vivi_logo.png' },
    { name: 'EqualOcean', file: 'EqualOcean_logo.png' },
  ];

  // 无限滚动动画
  const marqueeAnimation = {
    x: [0, -50 * brandLogos.length],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 30,
        ease: "linear" as const,
      },
    },
  };

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Brand Partners - 滚动效果 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          Brands <span className="text-zinc-500 text-lg">伴走ブランド(一部)</span>
        </h2>
      </motion.div>

      {/* 品牌Logo滚动 */}
      <div className="relative mb-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />
        <motion.div
          animate={marqueeAnimation}
          className="flex gap-8"
        >
          {/* 复制两份实现无缝滚动 */}
          {[...brandLogos, ...brandLogos].map((brand, index) => (
            <div
              key={`brand-${index}`}
              className="flex-shrink-0 w-32 h-20 rounded-xl bg-white flex items-center justify-center px-4 hover:scale-105 transition-transform"
            >
              <img
                src={`/imgs/Logos/Brands/${brand.file}`}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Media Partners - 网格布局 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          Media <span className="text-zinc-500 text-lg">メディア(一部)</span>
        </h2>
      </motion.div>

      {/* 媒体Logo网格布局 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {mediaLogos.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 226, 37, 0.3)' }}
              className="aspect-[3/2] rounded-xl bg-white flex items-center justify-center p-3 hover:shadow-lg hover:shadow-brand-yellow/10 transition-all"
            >
              <img
                src={`/imgs/Logos/Medias/${media.file}`}
                alt={media.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
