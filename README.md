# corp-site-type01

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen?logo=node.js)
![GitHub last commit](https://img.shields.io/github/last-commit/poko8nada/corp_site-type01)
![GitHub issues](https://img.shields.io/github/issues/poko8nada/corp_site-type01)

中小企業向けの静的コーポレートサイトを、再利用しやすい型として整備するためのリポジトリ。`dist/` をそのまま静的ホスティングへ置いて運用できる形を目指す。

## Developer Notes

> 開発者・AI エージェント向けのメモ。実装の単位・完了条件・優先順は GitHub Issues。

### Concept & Goals

- 一般的な中小企業サイトを素早く組み立てるテンプレートを作成。page / shell の差し替えで案件 variation を出しやすく。
- 完了のイメージ: セクションと shell のパーツセット、静的成果物、GTM / sitemap などの基盤、確認用に Cloudflare を使える導線。
- やらないこと: LP 特化の過剰演出、CMS 直結、高頻度記事運用の内蔵、`content/` からコードへの自動データ連携（手動確認・手埋め込みが原則）。

### Stack & Key Decisions

- App / SSG: Honox + Hono + Vite。静的ビルド、`app/` が実装の自己完結領域。
- Styling: Tailwind CSS 4 + DaisyUI。トークン・テーマは `app/style.css` 側（`content/` と自動連携しない）。
- Package maneger: `pnpm`
- Deploy: Wrangler（`preview:pages` 等）。GitHub Pages も本番候補とする。
- Design: Pencil（`pencil/*.pen`）。運用は未確定論点として Issues 側で追う。

## Overview

このリポジトリは、案件ごとに差し替え可能な雛形の作る上で、実在しない企業を題材にしたデモ用の例として使う。`content/` は取材・構成の設計メモ置き場であり import せず、実装者が目視して `app/` に手で反映する。

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

## Configuration

- Pages プロジェクト名など: `package.json` の `deploy` スクリプトと `wrangler.jsonc` を、環境に合わせて変更する。

## Content and implementation (`content/`)

`content/` は取材結果・設計メモのみ。コードから自動 import せず、人間やエージェントが「ページに何を載せるか」を決めるときの参照材料とする。

### Current content

- `interview.md`: 案件ごとの取材整理（デモは BAR KAGETSUKI NAKASU。テンプレに既存メモを当てはめた版）。
- `structure.md`: ルートと blocks（`role` / `pattern`）、header・footer パターンの設計メモ。

### Header / footer

パターン名（`standard` / `compact` / `minimal` / `none` 等）は設計メモとして `structure.md` に寄せ、実装は `app/shell/` と `c.render` のオプションで直接指定する。

## App responsibilities (`app/`)

- Shell（`app/shell/`）: header、footer、drawer-nav。型は各コンポーネントが持ち、`content/` から型を import しない。
- Renderer（`app/routes/_renderer.tsx`）: タイトル・description・lang 等を直接記述。`content/site.ts` のような確定コピー層は持たない。
- Route: `c.render` の第2引数で `headerPattern` / `footerPattern` を指定。`shellLayoutForRoute` のような共通 helper は持たない。

## Goals and non-goals

### Goals

- 中小コーポレで必要になりやすいセクション・shell のパーツセット
- GitHub Pages やレンタルサーバーへ載せやすい静的 `dist/`
- interview / presentation / structure のメモを手作業で実装へ繋ぐワークフロー
- GTM、sitemap 等の基盤、顧客レビュー用の確認環境（Cloudflare 等）

### Non-goals

- LP 特化・animation 主目的の表現、ブラウザからの API 直叩き、上記「Concept & Goals」の境界と重なるものは同様に扱う。

## Operational assumptions

- 本番の主軸は静的配信。
- GitHub Pages は本番候補、Cloudflare は確認用として扱う想定。
- CMS が必要でも、ブラウザから直接 API を叩く構成は採らない。API key 隠蔽・cache・CORS は別システム側。

## Direction and open questions

- shell / section の組み替えで複数案件へ流用。
- Pencil と実装の順番、お問い合わせ機能の library、UI library の採否は Issues で整理。

## Contributing

変更の単位と受け入れ条件は GitHub Issues に合わせる。PR では再現手順と関連 Issue の参照を書く。

## License

MIT（LICENSE ファイル未配置の場合はリポジトリオーナーに確認のうえ整備する）。
