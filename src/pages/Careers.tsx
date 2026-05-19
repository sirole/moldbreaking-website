import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Heart, X, Mail } from 'lucide-react';
import { FloatingCircle, FloatingSquare, FloatingRing, DecoLine } from '../components/GeometricShapes';

interface JobDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  responsibilities: string[];
  appeal: string;
  idealPerson: string[];
  requiredSkills: string[];
  welcomeSkills: string[];
  employmentType: string;
  salary: string;
}

const jobData: JobDetail[] = [
  {
    id: 'brand-growth-lead',
    title: 'ブランドグロース統括責任者',
    subtitle: 'Brand Growth Lead',
    tagline: 'ブランドを売るだけでなく、成長モデルをつくる。',
    overview: 'MoldBreakingは、韓国・中国・アジア発の美容・健康・ライフスタイルブランドを、日本市場で成長させるクロスボーダーブランド支援会社です。TikTokライブコマース、EC、SNS、PR、リテール、AIデータ基盤を組み合わせ、ブランドのローンチから売上拡大まで一気通貫で支援しています。今回募集するのは、ブランドごとの成長戦略を統括し、売上・認知・チャネル展開・顧客育成をリードするブランドグロース統括責任者です。ブランドを単発で販売するのではなく、TikTokで火種をつくり、ECで売上を伸ばし、PRとリテールへ広げる。その一連のブランド成長モデルを設計・実行していただきます。',
    responsibilities: [
      'ブランドごとの日本市場成長戦略の立案',
      '売上目標、利益目標、GMV計画、KPI設計',
      '商品ラインナップ、ヒーロー商品の選定',
      '価格設計、セット設計、キャンペーン設計',
      'TikTokライブコマース施策との連動',
      'TikTok Shop、独立EC、Amazon、楽天、Qoo10などのチャネル戦略',
      'SNS、広告、PR、インフルエンサー施策の設計',
      'リテール、百貨店、バラエティショップ、ドラッグストア展開の企画',
      'ブランド本国との戦略MTG、条件交渉、進捗共有',
      'ブランド別PL、売上、利益、在庫、広告費の管理',
      '顧客データ、レビュー、VOCをもとにした改善提案',
      '社内の営業、ライブ、EC、PR、CX、物流チームの横断管理',
      '月次・四半期ごとのブランド成長レビュー',
      '成功事例のSOP化、再現性ある成長モデルの構築',
    ],
    appeal: 'ブランドグロース統括責任者は、MoldBreakingのブランド事業を大きく伸ばすための中心的なポジションです。単にブランドを仕入れて売るのではなく、「どの商品をヒーロー商品にするか」「TikTokでどのように火種を作るか」「どのチャネルで売上を伸ばすか」「いつリテールへ展開するか」「どの顧客層をリピート化するか」まで、ブランドの成長全体を設計します。ブランドマネージャー、事業責任者、マーケター、営業責任者の要素を併せ持つ、非常に裁量の大きいポジションです。',
    idealPerson: [
      'ブランドを中長期で育てることに興味がある方',
      '売上、利益、KPIに責任を持てる方',
      'EC、ライブ、SNS、広告、PRを統合して考えられる方',
      'ブランド本国や社内チームを巻き込みながら推進できる方',
      '数字とクリエイティブの両方を理解できる方',
      '変化の早い市場でスピード感を持って判断できる方',
      '日本市場で新しいブランドをヒットさせたい方',
    ],
    requiredSkills: [
      'ブランドマネジメント、事業開発、マーケティング、EC運営いずれかの経験',
      '売上・利益・KPI管理の経験',
      '複数チームを巻き込んだプロジェクト推進経験',
      '商品、価格、販促、チャネルを組み合わせた施策設計経験',
      '社内外との折衝・交渉経験',
    ],
    welcomeSkills: [
      '化粧品、健康食品、美容機器、日用品領域でのブランド運営経験',
      '韓国・中国ブランドの日本展開経験',
      'TikTok Shop、ライブコマース、SNSマーケティングの経験',
      'Amazon、楽天、Qoo10、独立ECの運用経験',
      '広告運用、PR、インフルエンサーマーケティングの経験',
      '小売、百貨店、バラエティショップ、ドラッグストアへの展開経験',
      '薬機法・景品表示法に関する基本理解',
      '韓国語または中国語スキル',
    ],
    employmentType: '正社員・役員候補\n※最初の3ヶ月は契約社員または業務委託となる場合があります。',
    salary: '経験・能力・実績を考慮のうえ決定\n※固定報酬＋成果報酬の設計も相談可能',
  },
  {
    id: 'director',
    title: 'ライブコマース統括ディレクター',
    subtitle: 'Live Commerce Director',
    tagline: 'ライブを"配信"で終わらせず、売上をつくる事業へ。',
    overview: 'MoldBreakingは、TikTokライブコマースを起点に、韓国・中国・アジア発ブランドの日本市場展開を支援しています。今回募集するのは、MoldBreakingのライブコマース事業を統括し、売上成果と組織成長をリードするライブコマース統括ディレクターです。',
    responsibilities: [
      'TikTokライブコマース事業全体の運営統括',
      'ブランド別ライブ施策の企画・設計',
      '月間・四半期のGMV目標、利益目標、KPI設計',
      'ライブコマーサー、アシスタントマネージャー、運営チームの管理',
      'ライブ台本、販売トーク、商品訴求の設計',
      '売上、視聴数、CTR、CVR、客単価、ROASなどの分析',
      'ライブコマーサーの育成・評価・ランク設計',
      'SOP、チェックリスト、運用マニュアルの整備',
    ],
    appeal: 'ライブコマース統括ディレクターは、MoldBreakingの中核事業を動かすポジションです。トップライブコマーサーだけに依存するのではなく、売れる仕組み、育成体系、運営体制、データ分析、ブランド別勝ちパターンをつくることが求められます。ライブコマースを労働集約型の配信ビジネスから、再現性のある成長モデルへ進化させる役割です。',
    idealPerson: [
      'ライブコマースを本気で事業化したい方',
      '数字に強く、GMVや利益に責任を持てる方',
      '現場に入りながらチームを動かせる方',
      '企画力と実行力の両方を持っている方',
      'スピード感のある環境で成果を出したい方',
    ],
    requiredSkills: [
      'EC、ライブ配信、SNSマーケティング、広告運用いずれかの経験',
      'チームマネジメントまたはプロジェクト管理経験',
      '売上目標、KPI管理の経験',
      'スケジュール管理、進行管理の実務経験',
      '数字をもとに改善施策を立てた経験',
    ],
    welcomeSkills: [
      'TikTok Shop、TikTok LIVE、ライブコマースの実務経験',
      'ライブコマーサー、インフルエンサー、クリエイターのマネジメント経験',
      '美容、健康食品、日用品領域での販売経験',
      'ECモール運用、広告運用、CRMの経験',
      '中国ライブコマース、韓国ライブコマースへの理解',
    ],
    employmentType: '正社員\n※最初の3ヶ月は契約社員または業務委託となる場合があります。',
    salary: '経験・能力・実績を考慮のうえ決定\n※基本報酬＋成果報酬の設計、役員SOも相談可能',
  },
  {
    id: 'cx-specialist',
    title: 'カスタマーエクスペリエンススペシャリスト',
    subtitle: 'CX Specialist',
    tagline: 'お客様の声から、ブランドの成長をつくる。',
    overview: 'MoldBreakingは、韓国・中国・アジア発の美容・健康・ライフスタイルブランドを、日本市場で成長させるクロスボーダーブランド支援会社です。今回募集するのは、ライブコマースやECを通じて商品を購入したお客様に対し、購入前後の問い合わせ対応、顧客体験の改善、VOC分析、CRM施策のサポートを行うカスタマーエクスペリエンススペシャリストです。',
    responsibilities: [
      'TikTok Shop、EC、SNS経由の問い合わせ対応',
      '注文、配送、返品、交換、決済に関する顧客対応',
      'レビュー、コメント、DMの確認・管理',
      'ライブ配信中・配信後のお客様対応サポート',
      '顧客の声、クレーム、要望の整理',
      'VOC分析と社内共有',
      'FAQ、対応テンプレート、マニュアルの作成',
      'CRM施策、リピート購入施策のサポート',
    ],
    appeal: 'ライブコマースでは、お客様の反応がリアルタイムで届きます。「なぜ買ったのか」「なぜ迷ったのか」「どこで不安を感じたのか」―こうした声を拾い、ライブ内容や商品設計、CRM、ブランド成長に反映していくことが、この仕事の大きな価値です。カスタマー対応を"処理業務"で終わらせず、ブランド成長のためのデータとして活かしていくポジションです。',
    idealPerson: [
      'お客様対応を丁寧にできる方',
      '相手の立場に立って考えられる方',
      '細かい確認作業を正確に進められる方',
      'クレームやトラブルにも冷静に対応できる方',
      'お客様の声をサービス改善につなげたい方',
    ],
    requiredSkills: [
      '日本語での丁寧な文章コミュニケーション能力',
      '基本的なPCスキル',
      'チャット、メール、SNSでの顧客対応経験',
      'ECまたはカスタマーサポート業務への理解',
    ],
    welcomeSkills: [
      'ECサイト、モール、TikTok Shopでの顧客対応経験',
      '美容、健康食品、化粧品、日用品領域でのCS経験',
      'CRM、リピート施策、レビュー管理の経験',
      '韓国語または中国語スキル',
      'Codex含めChatGPT若しくはGeminiの活用をしている',
    ],
    employmentType: '正社員 / 契約社員 / 業務委託\n※経験・スキル・稼働条件に応じて相談',
    salary: '年収300万円〜500万円\n※経験・能力・実績を考慮のうえ決定します。',
  },
  {
    id: 'kr-sales',
    title: '韓国ブランド営業',
    subtitle: 'Korean Brand Sales',
    tagline: '韓国ブランドを、日本で"売れるブランド"へ。',
    overview: 'MoldBreakingは、韓国・中国・アジア発の美容・健康・ライフスタイルブランドを、日本市場で成長させるクロスボーダーブランド支援会社です。今回募集するのは、韓国ブランドの新規開拓から日本市場向け提案、契約交渉、ライブコマース施策の企画、社内チームとのプロジェクト推進までを担う営業・事業開発ポジションです。',
    responsibilities: [
      '韓国の美容・健康・ライフスタイルブランドの新規開拓',
      '日本市場向けの提案・事業設計（市場性、競合、価格設計）',
      'TikTokライブコマース施策の企画提案',
      '韓国ブランドとの代理店契約、販売条件の交渉',
      '社内外のプロジェクト推進・スケジュール管理',
      'ブランドローンチまでの伴走型サポート',
    ],
    appeal: '韓国ブランドの日本進出を、TikTokライブコマースを起点に自ら仕掛けることができます。単なる輸入販売や代理店営業ではなく、ブランド発掘、契約、ローンチ、ライブ販売、EC連動、リテール展開まで一気通貫で関わることができるポジションです。',
    idealPerson: [
      '営業や事業開発の実務経験がある方',
      '韓国語と日本語の両方が使える方',
      '美容・健康・日用品領域に興味がある方',
      '自ら動いて結果を出したい方',
      'クロスボーダービジネスに強い関心がある方',
    ],
    requiredSkills: [
      '韓国語（ビジネスレベル）',
      '法人営業または事業開発の経験',
      '日本語ネイティブレベルのコミュニケーション能力',
      '基本的なPCスキル（スプレッドシート、提案資料作成）',
    ],
    welcomeSkills: [
      'ライブコマース、EC、SNS、広告、PRいずれかの知見',
      '日本市場でのブランドローンチ経験',
      '化粧品、健康食品、美容機器、日用品領域の知見',
      '薬機法・景品表示法に関する基本理解',
      '英語スキル',
    ],
    employmentType: '正社員 / 契約社員 / 業務委託\n※経験・役割に応じて相談',
    salary: '年収450万円〜700万円＋インセンティブ\n※経験・能力・実績を考慮のうえ決定します。',
  },
  {
    id: 'assistant-manager',
    title: 'アシスタントマネージャー',
    subtitle: 'Assistant Manager',
    tagline: 'ライブの現場を動かし、売上を支える。',
    overview: 'MoldBreakingは、TikTokライブコマースを起点に、韓国・中国・アジア発ブランドの日本市場展開を支援しています。今回募集するのは、ライブコマース事業の現場運営を支えるアシスタントマネージャーです。',
    responsibilities: [
      'ライブ配信スケジュールの管理',
      'ライブコマーサーの稼働予定管理',
      '商品サンプル、台本、販売ページ、クーポンなどの準備確認',
      'ブランド担当、EC担当、物流担当との連携',
      'ライブ当日の進行サポート（コメント、在庫、クーポン確認）',
      'ライブ後の売上、視聴数、CVR、コメント内容の整理',
      '改善点の洗い出しと社内共有',
      'チーム内のタスク管理・進捗管理',
    ],
    appeal: 'ライブコマースの成果は、出演者だけで決まりません。事前準備、商品理解、配信設計、スケジュール管理、在庫確認、配信中のサポート、配信後の改善まで、すべてのオペレーションが売上につながります。アシスタントマネージャーは、ライブの現場を支える中心的な存在です。将来的には、ライブディレクター、クリエイターマネージャー、事業責任者へとキャリアを広げることも可能です。',
    idealPerson: [
      'スケジュール管理や進行管理が得意な方',
      '細かい確認作業を抜け漏れなくできる方',
      'ライブコマースやTikTokに興味がある方',
      '現場でスピード感を持って動ける方',
      'チームを支える役割にやりがいを感じる方',
    ],
    requiredSkills: [
      '基本的なPCスキル',
      'チャットツール、スプレッドシートの使用経験',
      'スケジュール管理または進行管理の経験',
      '社内外とのコミュニケーション能力',
    ],
    welcomeSkills: [
      'ライブ配信、EC、SNS運用の経験',
      'TikTok Shopまたはライブコマースの実務経験',
      '芸能、インフルエンサー、クリエイター関連のマネジメント経験',
      '美容・健康・日用品領域への興味',
      '中国語または韓国語スキル',
    ],
    employmentType: '契約社員 / 業務委託\n※経験・稼働条件に応じて相談',
    salary: '時給1500円',
  },
  {
    id: 'executive',
    title: '常務',
    subtitle: '経営幹部候補',
    tagline: '事業を構想し、組織を動かし、MoldBreakingの次の成長をつくる。',
    overview: 'MoldBreakingは、ライブコマース、クロスボーダーブランド支援、AIによるライブ基盤事業を軸に、アジア発ブランドの日本市場展開を加速させる会社です。今回募集するのは、MoldBreakingの経営・事業推進を担う常務候補です。代表、経営陣、各事業責任者と連携しながら、会社全体の事業戦略、組織づくり、営業推進、プロジェクト管理、収益管理、重要パートナーとの交渉をリードしていただきます。',
    responsibilities: [
      '経営戦略・事業戦略の立案と実行',
      'ライブコマース事業、ブランド事業、AI事業の横断管理',
      '年間売上目標、利益目標、KPIの設計・管理',
      '重要クライアント、ブランド、パートナーとの交渉',
      '韓国・中国・日本ブランドとのアライアンス推進',
      '組織体制の設計、採用、育成、評価',
      '各事業責任者・マネージャーのマネジメント',
      '新規事業・新規ブランド・新規販路の開発',
    ],
    appeal: 'MoldBreakingは、ライブコマースとAIを掛け合わせ、ブランド成長の新しいインフラをつくろうとしています。常務ポジションは、現場管理だけではなく、会社の未来そのものを設計する役割です。事業戦略を描き、組織をつくり、人を動かし、売上をつくる。経営に近い立場で、急成長フェーズの会社を一緒に大きくしていくことができます。',
    idealPerson: [
      '経営視点で事業を見られる方',
      '数字と現場の両方を見て意思決定できる方',
      '事業責任者、役員、経営幹部としての経験がある方',
      '組織をつくり、人を動かすことができる方',
      '変化の早い環境でスピード感を持って動ける方',
    ],
    requiredSkills: [
      '事業責任者、経営幹部、部門責任者いずれかの経験',
      '売上・利益・KPI管理の経験',
      'チームマネジメント経験',
      '法人営業、事業開発、ブランド事業、EC、マーケティングいずれかの実務経験',
      '経営層との意思決定・実行推進の経験',
    ],
    welcomeSkills: [
      'スタートアップ、ベンチャー企業での経営経験',
      'ライブコマース、EC、SNS、広告、PR領域での事業経験',
      'クロスボーダービジネスの経験',
      '韓国・中国企業との事業交渉経験',
      '資金調達、IR、IPO準備に関わった経験',
    ],
    employmentType: '正社員 / 業務委託 / 役員候補\n※経験・役割・コミットメントに応じて相談',
    salary: '経験・能力・成果責任に応じて決定\n※固定報酬、成果報酬、役員報酬、ストックオプション等は個別相談',
  },
];

const JobPopup = ({ job, onClose }: { job: JobDetail; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl bg-[#111111] border border-white/10 rounded-3xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-6 sm:p-8 lg:p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs mb-4">
              {job.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{job.title}</h2>
            <p className="text-lg text-zinc-400">{job.tagline}</p>
          </div>

          {/* Overview */}
          <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            <h3 className="text-sm font-semibold text-brand-yellow mb-3">ポジション概要</h3>
            <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">{job.overview}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">具体的な業務内容</h3>
            <ul className="space-y-2">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 shrink-0" />
                  <span className="text-zinc-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Appeal */}
          <div className="mb-8 p-5 rounded-2xl bg-brand-yellow/5 border border-brand-yellow/20">
            <h3 className="text-sm font-semibold text-brand-yellow mb-3">このポジションの魅力</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{job.appeal}</p>
          </div>

          {/* Ideal Person */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">求める人物像</h3>
            <div className="flex flex-wrap gap-2">
              {job.idealPerson.map((item, i) => (
                <span key={i} className="px-3 py-2 rounded-xl bg-white/5 text-zinc-300 text-sm border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Required Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">必須スキル・経験</h3>
            <ul className="space-y-2">
              {job.requiredSkills.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span className="text-zinc-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Welcome Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">歓迎スキル・経験</h3>
            <ul className="space-y-2">
              {job.welcomeSkills.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/50 mt-2 shrink-0" />
                  <span className="text-zinc-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Employment & Salary */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-sm font-semibold text-zinc-500 mb-2">雇用形態</h3>
              <p className="text-zinc-300 text-sm whitespace-pre-line">{job.employmentType}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <h3 className="text-sm font-semibold text-zinc-500 mb-2">報酬</h3>
              <p className="text-zinc-300 text-sm whitespace-pre-line">{job.salary}</p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-6 border-t border-white/10 text-center">
            <a
              href={`mailto:hey@moldbreaking.com?subject=${encodeURIComponent(`【応募】${job.title}`)}&body=${encodeURIComponent(`株式会社MoldBreaking 採用担当者様\n\n私は「${job.title}」のポジションに応募したいと考えております。\n\n履歴書と職務経歴書を添付しておりますので、ご確認いただけますと幸いです。\n\nよろしくお願いいたします。`)}
              }`}
              className="inline-flex items-center justify-center gap-2 btn-glass-primary px-8 py-4 text-base"
            >
              <Mail className="w-5 h-5" />
              このポジションに応募する
            </a>
            <p className="text-zinc-500 text-xs mt-3">
              メールを送信して応募してください
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Updated 2026-05-19: Added Brand Growth Lead position, reordered job listings
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobDetail | null>(null);

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
      {/* Job Popup */}
      <AnimatePresence>
        {selectedJob && (
          <JobPopup job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingRing className="w-56 h-56 border-brand-yellow/10 top-10 -left-20" delay={0} />
          <FloatingSquare className="w-6 h-6 bg-brand-yellow/15 bottom-1/4 right-20" delay={0.3} />
          <FloatingCircle className="w-4 h-4 bg-brand-gold/30 top-1/3 right-1/4" delay={0.5} />
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

      {/* Job Listings */}
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
              Open Positions
            </motion.span>
            <h2 className="text-3xl font-bold text-white mb-4">
              募集<span className="text-gradient">ポジション</span>
            </h2>
            <p className="text-zinc-400">
              各ポジションをクリックして詳細をご確認ください
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobData.map((job, index) => (
              <motion.button
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedJob(job)}
                className="w-full text-left p-6 rounded-2xl card-glass hover:border-brand-yellow/30 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-xs">
                        {job.subtitle}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm">{job.tagline}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-zinc-500 text-xs hidden sm:block">
                      {job.employmentType.split('\n')[0]}
                    </span>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-brand-yellow group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.button>
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
