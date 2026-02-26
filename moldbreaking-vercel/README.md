# MoldBreaking - An Emotional Tech Company

![MoldBreaking](https://img.shields.io/badge/MoldBreaking-Growth%20via%20AI-FFE225)

MoldBreaking のコーポレートウェブサイト - ブランドマネジメント、ライブコマース、AI基盤を統合したエモーショナルテックカンパニー

## 🚀 技術スタック

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM v7

## 📁 プロジェクト構造

```
my-app/
├── src/
│   ├── components/          # 共通コンポーネント
│   │   ├── ui/             # shadcn/ui コンポーネント
│   │   ├── BrainWaveBackground.tsx  # パーティクル背景
│   │   ├── Card3D.tsx      # 3Dカード効果
│   │   ├── CustomCursor.tsx # カスタムカーソル
│   │   ├── Footer.tsx      # フッター
│   │   ├── GeometricShapes.tsx # 幾何学アニメーション
│   │   ├── Hero.tsx        # トップヒーローセクション
│   │   ├── Navbar.tsx      # ナビゲーション
│   │   └── ...
│   ├── pages/              # ページコンポーネント
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Products.tsx
│   │   ├── Careers.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── hooks/              # カスタムフック
│   ├── lib/                # ユーティリティ関数
│   ├── App.tsx             # メインアプリケーション
│   └── main.tsx            # エントリーポイント
├── public/                 # 静的アセット
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 🌐 Vercel へのデプロイ

### 1. GitHub リポジトリの作成

1. [GitHub](https://github.com) にログイン
2. 「New repository」をクリック
3. リポジトリ名を入力（例: `moldbreaking-website`）
4. 「Create repository」をクリック

### 2. コードのプッシュ

```bash
# ローカルでGitを初期化
git init

# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial commit"

# GitHubリポジトリをリモートに追加
git remote add origin https://github.com/YOUR_USERNAME/moldbreaking-website.git

# プッシュ
git push -u origin main
```

### 3. Vercel でのデプロイ

1. [Vercel](https://vercel.com) にログイン（GitHubアカウントでOK）
2. 「Add New Project」をクリック
3. 先ほど作成したGitHubリポジトリを選択
4. 「Import」をクリック
5. 設定はデフォルトのままでOK
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. 「Deploy」をクリック

### 4. カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Domains」をクリック
3. ドメインを入力（例: `moldbreaking.jp`）
4. 表示されるDNSレコードをドメイン管理画面で設定

**DNS設定例（Cloudflare）:**
```
Type: CNAME
Name: www
Target: cname.vercel-dns.com
```

または

```
Type: A
Name: @
Target: 76.76.21.21
```

## 🎨 カラーパレット

| カラー名 | 値 | 用途 |
|---------|-----|------|
| Brand Yellow | `#FFE225` | メインアクセント |
| Brand Gold | `#FFD700` | グラデーション |
| Brand Amber | `#FFB800` | セカンダリー |
| Dark | `#0a0a0a` | 背景 |
| Dark Light | `#111111` | カード背景 |

## 📄 ページ一覧

| パス | ページ名 | 説明 |
|------|---------|------|
| `/` | ホーム | メインページ |
| `/services` | サービス | 3つのコア事業紹介 |
| `/products` | プロダクト | muni LIVE.ai 詳細 |
| `/careers` | 採用 | CXO募集情報 |
| `/about` | 会社情報 | 会社概要・沿革 |
| `/contact` | お問い合わせ | 問い合わせフォーム |

## 📝 更新履歴

- **2025-02-22**: パーティクルネットワーク背景に変更、Growth via AI ブランディング更新
- **2025-02-13**: 初版リリース

## 📧 お問い合わせ

MoldBreaking株式会社  
contact@moldbreaking.jp

---

© 2024 MoldBreaking. All rights reserved.
