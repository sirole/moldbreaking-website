import { motion } from 'framer-motion';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const PrivacyPolicy = () => {
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
              プライバシーポリシー
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
                <h2 className="text-2xl font-bold text-white mb-4">1. はじめに</h2>
                <p className="leading-relaxed">
                  MoldBreaking株式会社（以下「当社」）は、お客様の個人情報の重要性を認識し、個人情報の保護に関する法律その他の関連法令を遵守するとともに、以下のプライバシーポリシーに従い、個人情報の適切な取り扱いおよび保護に努めます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. 個人情報の定義</h2>
                <p className="leading-relaxed">
                  本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができるものを含みます）を指します。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. 個人情報の収集</h2>
                <p className="leading-relaxed mb-4">
                  当社は、以下の方法で個人情報を収集することがあります：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>お問い合わせフォームからの入力</li>
                  <li>メールや電話によるやり取り</li>
                  <li>各種サービスのお申し込み</li>
                  <li>イベント・セミナーへの参加登録</li>
                  <li>採用応募</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. 収集する個人情報の項目</h2>
                <p className="leading-relaxed mb-4">
                  当社が収集する個人情報の項目は以下の通りです：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>氏名（漢字・カナ・英字）</li>
                  <li>会社名・部署名・役職</li>
                  <li>住所</li>
                  <li>電話番号</li>
                  <li>メールアドレス</li>
                  <li>その他当社が定める入力フォームに入力された情報</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. 個人情報の利用目的</h2>
                <p className="leading-relaxed mb-4">
                  当社は、収集した個人情報を以下の目的で利用します：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>お問い合わせへの対応</li>
                  <li>サービスの提供および運営</li>
                  <li>サービスに関する情報のご案内</li>
                  <li>新サービス・イベント等のご案内</li>
                  <li>採用選考</li>
                  <li>統計データの作成（個人を識別できない形式）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. 個人情報の第三者提供</h2>
                <p className="leading-relaxed">
                  当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者に提供しません：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. 個人情報の管理</h2>
                <p className="leading-relaxed">
                  当社は、個人情報の正確性を保ち、不正アクセス、紛失、破壊、改ざん、漏洩などを防止するため、適切な安全対策を講じます。また、個人情報を取り扱う従業員に対して、教育・啓発活動を実施し、個人情報の適切な管理に努めます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. 個人情報の開示・訂正・削除</h2>
                <p className="leading-relaxed">
                  お客様は、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止等を請求することができます。請求を希望される場合は、下記のお問い合わせ先までご連絡ください。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookieの使用</h2>
                <p className="leading-relaxed">
                  当社のウェブサイトでは、お客様により良いサービスを提供するため、Cookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。ただし、Cookieを無効にした場合、一部のサービスが正常に機能しない可能性があります。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. プライバシーポリシーの変更</h2>
                <p className="leading-relaxed">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、ウェブサイト上で告知いたします。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. お問い合わせ</h2>
                <p className="leading-relaxed">
                  個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/5">
                  <p className="text-white font-semibold">MoldBreaking株式会社</p>
                  <p className="text-zinc-400 mt-2">〒150-0046 東京都渋谷区松濤２丁目１５−１３ X-BASE SHIBUYA 102</p>
                  <p className="text-zinc-400 mt-1">メール：hey@moldbreaking.com</p>
                </div>
              </section>

              <section className="pt-8 border-t border-white/5">
                <p className="text-zinc-500 text-sm">
                  制定日：2024年10月1日<br />
                  最終更新日：2026年3月1日
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
