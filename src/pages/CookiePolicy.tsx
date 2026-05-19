import { motion } from 'framer-motion';
import { FloatingRing, DecoLine } from '../components/GeometricShapes';

const CookiePolicy = () => {
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
              クッキーポリシー
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
                <h2 className="text-2xl font-bold text-white mb-4">1. クッキーとは</h2>
                <p className="leading-relaxed">
                  クッキー（Cookie）とは、ウェブサイトを訪問した際に、ユーザーのブラウザに保存される小さなテキストファイルです。クッキーを使用することで、ウェブサイトはユーザーの訪問履歴や設定を記憶し、より快適な閲覧体験を提供することができます。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. クッキーの種類</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">必須クッキー</h3>
                    <p className="leading-relaxed">
                      ウェブサイトの基本的な機能を提供するために必要なクッキーです。これらのクッキーが無効な場合、一部の機能が正常に動作しない可能性があります。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">分析・パフォーマンスクッキー</h3>
                    <p className="leading-relaxed">
                      ウェブサイトの利用状況を分析し、改善するために使用するクッキーです。これらのクッキーにより、訪問者数、ページビュー、エラー発生状況等を把握することができます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">機能性クッキー</h3>
                    <p className="leading-relaxed">
                      ユーザーの設定や選択を記憶し、よりパーソナライズされた体験を提供するクッキーです。例えば、言語設定や地域設定の記憶などに使用されます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">ターゲティングクッキー</h3>
                    <p className="leading-relaxed">
                      ユーザーの興味や行動に基づいて、関連性の高い広告を表示するために使用するクッキーです。これらのクッキーは、ユーザーの許可に基づいて設定されます。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. 当社が使用するクッキー</h2>
                <p className="leading-relaxed mb-4">
                  MoldBreaking株式会社（以下「当社」）のウェブサイトでは、以下の目的でクッキーを使用しています：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ウェブサイトの正常な動作の確保</li>
                  <li>ユーザー体験の向上</li>
                  <li>アクセス解析によるサイト改善</li>
                  <li>セキュリティの確保</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. サードパーティークッキー</h2>
                <p className="leading-relaxed">
                  当社のウェブサイトでは、以下の第三者サービスによるクッキーが使用される場合があります：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Google Analytics（アクセス解析）</li>
                  <li>ソーシャルメディアプラットフォーム（シェア機能等）</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  これらの第三者サービスのクッキー使用については、各サービスのプライバシーポリシーをご参照ください。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. クッキーの管理方法</h2>
                <p className="leading-relaxed mb-4">
                  ユーザーは、ブラウザの設定を変更することで、クッキーの使用を管理することができます。以下は主要ブラウザでのクッキー設定方法です：
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-white font-medium">Google Chrome</p>
                    <p className="text-zinc-400 text-sm mt-1">
                      設定 → プライバシーとセキュリティ → Cookieとその他のサイトデータ
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-white font-medium">Safari</p>
                    <p className="text-zinc-400 text-sm mt-1">
                      設定 → プライバシー → CookieとWebサイトのデータ
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <p className="text-white font-medium">Firefox</p>
                    <p className="text-zinc-400 text-sm mt-1">
                      設定 → プライバシーとセキュリティ → Cookieとサイトデータ
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed mt-4">
                  クッキーを無効にした場合、一部の機能が正常に動作しない可能性がありますので、ご了承ください。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. クッキーポリシーの変更</h2>
                <p className="leading-relaxed">
                  当社は、必要に応じて本クッキーポリシーを変更することがあります。変更した場合は、ウェブサイト上で告知いたします。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. お問い合わせ</h2>
                <p className="leading-relaxed">
                  クッキーの使用に関するお問い合わせは、以下までご連絡ください：
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/5">
                  <p className="text-white font-semibold">MoldBreaking株式会社</p>
                  <p className="text-zinc-400 mt-2">メール：hey@moldbreaking.com</p>
                </div>
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

export default CookiePolicy;
