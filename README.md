# corp-site-type01

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js)
![GitHub last commit](https://img.shields.io/github/last-commit/poko8nada/corp_site-type01)
![GitHub issues](https://img.shields.io/github/issues/poko8nada/corp_site-type01)

## Overview

中小企業向けの静的コーポレートサイトを、再利用しやすい型として整備するためのリポジトリ。`dist/` をそのまま静的ホスティングへ置いて運用できる形を目指す。

このリポジトリは、案件ごとに差し替え可能な雛形を作る過程で、実在しない企業を題材にしたデモ用の例として使う。`content/` は取材・構成の設計メモ置き場であり import せず、実装者が目視して `app/` に手で反映する。

## Getting Started

### Prerequisites

- Node.js 18 以上
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/poko8nada/corp_site-type01.git
cd corp_site-type01
pnpm install
```

## Usage

```bash
pnpm dev              # 開発サーバー
pnpm build            # 静的成果物を dist/ に出力
pnpm preview          # ビルド結果のプレビュー
pnpm preview:pages    # rebuild 後に wrangler pages dev
pnpm typecheck        # TypeScript チェック
pnpm lint             # oxlint
pnpm test:run         # Vitest
```

## Concept & Goals

### Goals

- 保守や高頻度更新を前提としない中小企業サイトを、静的 HTML + 最小限のバックエンド（お問い合わせのみ）で構築する
- CMSを持たないことでセキュリティリスクと運用コストを下げる
- 公式の一次情報置き場として、ユーザーがストレスなく情報にたどり着け、かつモダンでブランドイメージを醸成できるサイトを目指す
- `sections` と能力コンポーネントの組み替えで複数案件へ流用できる型にする
- GTM、sitemap 等の基盤、顧客レビュー用の確認環境（Cloudflare 等）

### Non-goals

- LP 特化の過剰演出・animation 主目的の表現
- CMS 直結・高頻度記事運用の内蔵
- `content/` からコードへの自動データ連携（手動確認が原則）
- ブラウザから直接 API を叩く構成（API key 隠蔽・cache・CORS は別システム側）
- webサイト単体の明確なKPI設定（流入元はGoogleMap・SNS・検索など多岐にわたり、そこのマーケティングはスコープ外）

### Operational assumptions

- 本番の主軸は静的配信。`dist/` をレンタルサーバーや静的ホスティングに置くだけで動作する
- GitHub Pages は本番候補、Cloudflare は確認用として扱う想定
- CMS が必要でも、ブラウザから直接 API を叩く構成は採らない

## Stack

- **App / SSG**: Honox + Hono + Vite。静的ビルド、`app/` が実装の自己完結領域
- **Styling**: Tailwind CSS 4 + DaisyUI。トークン・テーマは `app/style.css` 側
- **Package manager**: pnpm
- **Deploy**: Wrangler（`preview:pages` 等）。GitHub Pages も本番候補
- **Design**: Pencil（`pencil/*.pen`）。運用は未確定論点として Issues 側で追う

## App Architecture

`app/components/`（能力単位）と `app/sections/`（ページ上の役割・共通枠）の組み替えで案件 variation を出す。

### Site IA（正: `content/structure.md`）

ルート、各ページの section `role` の並び、`frame` の header / footer パターンは `content/structure.md` の YAML を正とする。コードは自動 import せず、実装が追従する。

現案件（抜粋）:

- `frame`: `header: standard`, `footer: standard`
- `/`（home）: `lead` → `explanation` → `strengths` → `facts` → `conversion`
- `/contact`: `context` → `form-area`

未確定や後から変える点は同ファイルの「Open questions」を参照する。

- `app/components/` は「何ができるか」で名付けたブロック。ルートや `content/` の語彙に依存しない
- `app/sections/frame/` にヘッダー・フッター・ドロワー・全ページ共通レイアウトを置く
- `app/sections/<name>/` はページ上の役割単位の合成。各フォルダの `index.ts` がそのフォルダのカタログ（コンポーネントと定数の export をここに寄せる。）
- ルートの `sections/index.ts` は任意で薄い再 export 用

```text
app/
├── components/
│   ├── section.tsx
│   ├── visual-lead.tsx
│   ├── rich-text.tsx
│   ├── map-with-info.tsx
│   └── cta-band.tsx
│
├── sections/
│   ├── index.ts                    # catalogと再エクスポート
│   ├── frame/                      # 全ページ共通（structure の frame に対応）
│   │   ├── index.ts                # catalog: Header, Footer, DrawerNav, SiteLayout + 定数
│   │   ├── site-layout.tsx
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── drawer-nav.tsx
│   ├── home/                       # structure の routes.home に対応
│   │   ├── index.ts                # catalog: lead / explanation / strengths / facts / conversion
│   │   ├── lead.tsx
│   │   ├── explanation.tsx
│   │   ├── strengths.tsx
│   │   ├── facts.tsx
│   │   └── conversion.tsx
│   └── contact/                    # structure の routes.contact に対応
│       ├── index.ts                # catalog: context, form-area
│       ├── context.tsx
│       └── form-area.tsx
│
├── routes/
│   ├── _renderer.tsx               # html/head/body + SiteLayout のみ
│   ├── index.tsx                   # ホーム: structure の role 順に沿ってセクションを並べる
│   ├── contact/
│   │   └── index.tsx               # /contact（structure の contact）
│   ├── _404.tsx
│   └── _error.tsx
│
├── client.ts
├── server.ts
└── style.css
```

### Routes and renderer

- `_renderer.tsx`: タイトル・description・lang 等を直接記述。`content/site.ts` のような確定コピー層は持たない
- Route: `c.render` の第2引数で `headerPattern` / `footerPattern` を指定。共通 helper は持たない

## Content Workflow

`content/` は取材結果・設計メモのみ。コードから自動 import せず、実装者やエージェントが「ページに何を載せるか」を決めるときの参照材料とする。

| ファイル                                | 内容                                                 |
| --------------------------------------- | ---------------------------------------------------- |
| `interview.md`                          | 案件ごとの取材整理                                   |
| `structure.md`                          | サイト IA・frame の正。詳細は YAML と Open questions |
| `pre_survey.md`                         | 事前調査（GoogleMap・レビュー・競合分析）と仮説      |
| `home-implementation-open-questions.md` | home の未確定一覧（議論用）。import しない           |

Header / footer のパターン名（`standard` / `compact` / `minimal` / `none` 等）は `structure.md` に寄せ、実装は `app/sections/frame/` のコンポーネントと `c.render` のオプションで直接指定する。

## Configuration

Pages プロジェクト名など: `package.json` の `deploy` スクリプトと `wrangler.jsonc` を、環境に合わせて変更する。

## Contributing

変更の単位と受け入れ条件は GitHub Issues に合わせる。PR では再現手順と関連 Issue の参照を書く。

## License

MIT（LICENSE ファイル未配置の場合はリポジトリオーナーに確認のうえ整備する）。
