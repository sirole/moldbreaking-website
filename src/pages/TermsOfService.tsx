import { motion } from 'framer-motion';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const TermsOfService = () => {
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
              Legal
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              利用規約
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <DecoLine />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-zinc-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第1条（適用）</h2>
                <p className="leading-relaxed">
                  本利用規約（以下「本規約」）は、MoldBreaking株式会社（以下「当社」）が提供するすべてのサービス（以下「本サービス」）の利用に関する条件を定めるものです。本サービスを利用するすべての方（以下「ユーザー」）は、本規約に同意したものとみなされます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第2条（サービスの内容）</h2>
                <p className="leading-relaxed">
                  当社は、以下のサービスを提供します：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>ブランドグロース事業</li>
                  <li>クリエイターグロース事業</li>
                  <li>AI基盤サービス</li>
                  <li>関連するコンサルティングサービス</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第3条（利用登録）</h2>
                <p className="leading-relaxed">
                  本サービスの利用を希望する者は、当社所定の方法により利用登録を行うものとします。当社は、以下のいずれかに該当する場合、利用登録を拒否することがあります：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>虚偽の情報を提供した場合</li>
                  <li>過去に本規約に違反したことがある場合</li>
                  <li>その他当社が不適切と判断した場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第4条（ユーザーの責任）</h2>
                <p className="leading-relaxed">
                  ユーザーは、自己の責任において本サービスを利用するものとし、以下の事項を遵守するものとします：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>法令および公序良俗を遵守すること</li>
                  <li>本規約を遵守すること</li>
                  <li>第三者の権利を侵害しないこと</li>
                  <li>提供した情報の正確性を保つこと</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第5条（禁止事項）</h2>
                <p className="leading-relaxed">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社または第三者の知的財産権を侵害する行為</li>
                  <li>当社または第三者の名誉・信用を毀損する行為</li>
                  <li>本サービスの運営を妨害する行為</li>
                  <li>不正アクセスまたはそれを試みる行為</li>
                  <li>その他当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第6条（知的財産権）</h2>
                <p className="leading-relaxed">
                  本サービスに関するすべての知的財産権（著作権、商標権、特許権等）は、当社または正当な権利を有する第三者に帰属します。ユーザーは、当社の事前の書面による承諾なく、これらを使用、複製、改変、配布等をすることはできません。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第7条（保密義務）</h2>
                <p className="leading-relaxed">
                  ユーザーは、本サービスの利用に関連して知り得た当社の機密情報（技術情報、営業情報、顧客情報等）を、当社の事前の書面による承諾なく、第三者に開示または漏洩してはなりません。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第8条（免責事項）</h2>
                <p className="leading-relaxed">
                  当社は、以下の事項について一切の責任を負いません：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>本サービスの完全性、正確性、有用性について</li>
                  <li>ユーザー間または第三者との紛争について</li>
                  <li>不可抗力によるサービスの中断・停止について</li>
                  <li>その他当社の責めに帰しえない事由による損害</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第9条（サービスの変更・中止）</h2>
                <p className="leading-relaxed">
                  当社は、ユーザーへの事前の通知なく、本サービスの内容を変更、追加、中止することがあります。これによりユーザーに生じた損害について、当社は責任を負いません。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第10条（利用契約の解除）</h2>
                <p className="leading-relaxed">
                  当社は、ユーザーが本規約に違反した場合、または当社が不適切と判断した場合、事前の通知なく、当該ユーザーに対する本サービスの提供を停止し、利用契約を解除することができます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">第11条（準拠法・管轄裁判所）</h2>
                <p className="leading-relaxed">
                  本規約の準拠法は日本法とし、本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>

              <section className="pt-8 border-t border-white/5">
                <p className="text-zinc-500 text-sm">
                  制定日：2024年10月1日<br />
                  最終更新日：2024年10月1日
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
