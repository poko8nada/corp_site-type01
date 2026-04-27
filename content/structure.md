# サイト構成の設計メモ

## Header / Footer の見せ方パターン

インタビュー時の「どんなヘッダー・フッターにするか」の選択肢としてまとめておくもの。実際のコンポーネント実装（`app/shell/`）とは独立しており、数や名称が一致する保証はない。

### header: standard

サイト名、グローバルナビ、主要 CTA の 3 要素が並ぶ。

### header: compact

同じ要素を詰めたバリエーション。上下の余白が狭く、フォントサイズが一段階小さい。

### footer: standard

4 カラム構成。店舗情報、連絡先、法務・ポリシー、コピーライト。

### footer: minimal

コピーライト＋連絡先の 1 行だけ。ページ数が少ないサイトやランディングページ向き。

### パターン名一覧（設計メモ用）

**header**: `standard` | `compact` | `none`

**footer**: `standard` | `minimal` | `none`

---

## role と pattern

- **role** — ブロックが担う「役割」
- **pattern** — その役割を「どう見せるか」の UI バリエーション

インタビューでは「トップページに何を置きたいか」から逆算して、適切な role を選び、さらにその中から pattern を決めていく。

### contentRoles（役割の語彙）

| role          | 意味                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| `lead`        | 第一印象を作る導入。主メッセージ、ブランドの顔、ファーストビュー。     |
| `explanation` | 内容や背景を説明する役。サービス説明、想い、会社紹介、ストーリー。     |
| `catalog`     | 選択肢を並べて比較させる役。商品一覧、メニュー、プラン、サービス一覧。 |
| `proof`       | 信頼を補強する役。実績、導入事例、レビュー、数字、受賞歴。             |
| `facts`       | 客観情報を整理して見せる役。住所、営業時間、料金、会社概要、スペック。 |
| `conversion`  | 行動につなげる役。問い合わせ、予約、資料請求、応募、購入導線。         |
| `support`     | 理解や意思決定を補助する役。FAQ、利用フロー、注意事項、比較の補助。    |
| `updates`     | 継続的な更新を伝える役。お知らせ、ニュース、ブログ、イベント情報。     |
| `utility`     | サイト運用上必要な補助情報。規約、ポリシー、法務表記、補助ナビ。       |

### blockPatterns（見せ方の語彙）

`visual-lead`, `carousel`, `split-media`, `rich-text`, `card-grid`, `proof-grid`, `info-list`, `faq`, `article-list`, `cta-band`, `legal-text`, `map-with-info`

### role ごとのおすすめ pattern（ガイド。型としての強制ではない）

| role          | おすすめ pattern                   |
| ------------- | ---------------------------------- |
| `lead`        | visual-lead, carousel, split-media |
| `explanation` | rich-text, split-media             |
| `catalog`     | card-grid, info-list               |
| `proof`       | proof-grid, card-grid              |
| `facts`       | info-list, map-with-info           |
| `conversion`  | cta-band, rich-text                |
| `support`     | faq, rich-text                     |
| `updates`     | article-list, card-grid            |
| `utility`     | legal-text, info-list              |

---

## 現在このサイトで採用している structure の実値

### routes.home

**layout**

- header: `standard`
- footer: `standard`

**blocks**（順序どおり）

| #   | role        | pattern       |
| --- | ----------- | ------------- |
| 1   | lead        | visual-lead   |
| 2   | explanation | rich-text     |
| 3   | facts       | map-with-info |
| 4   | conversion  | cta-band      |

### routes.contact

**layout**

- header: `compact`
- footer: `minimal`

**blocks**（順序どおり）

| #   | role       | pattern    |
| --- | ---------- | ---------- |
| 1   | conversion | rich-text  |
| 2   | facts      | info-list  |
| 3   | support    | faq        |
| 4   | utility    | legal-text |
