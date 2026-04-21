// Routes included in the first vertical slice.
export type RouteKey = 'home' | 'contact';

// 現状の site data 側で使っている意味語彙。
// structure 側の role / pattern とは別レイヤーとしていったん残している。
export type SectionKey = 'hero' | 'concept' | 'access' | 'contact';

// ---------------------------------------------------------------------------
// Header / Footer の見せ方パターン
// ---------------------------------------------------------------------------
// これらはインタビュー時の「どんなヘッダー・フッターにするか」の選択肢として
// まとめておくもの。実際のコンポーネント実装（app/shell/）とは独立しており、
// 数や名称が一致する保証はない。
//
// header: standard
//   - サイト名、グローバルナビ、主要 CTA の 3 要素が並ぶ。
//   - ロゴが大きく、ナビが中央に配置される。
//
// header: compact
//   - 同じ要素を詰めたバリエーション。
//   - 上下の余白が狭く、フォントサイズが一段階小さい。
//
// header: none
//   - ヘッダーを表示しない。
//
// footer: standard
//   - 4 カラム構成。
//   - 店舗情報、連絡先、法務・ポリシー、コピーライト。
//   - 複数の情報セクションが並ぶケース向き。
//
// footer: minimal
//   - コピーライト＋連絡先の 1 行だけ。
//   - ページ数が少ないサイトやランディングページ向き。
//
// footer: none
//   - フッターを表示しない。
// ---------------------------------------------------------------------------
export const headerPatterns = ['standard', 'compact', 'none'] as const;
export const footerPatterns = ['standard', 'minimal', 'none'] as const;

export type HeaderPattern = (typeof headerPatterns)[number];
export type FooterPattern = (typeof footerPatterns)[number];

export interface LayoutFormat {
  header: HeaderPattern;
  footer: FooterPattern;
}

// ---------------------------------------------------------------------------
// role = ブロックが担う「役割」
// pattern = その役割を「どう見せるか」の UI バリエーション
// ---------------------------------------------------------------------------
// インタビューでは「トップページに何を置きたいか」から逆算して、
// 適切な role を選び、さらにその中から pattern を決めていく。
// 実際のコンポーネント実装（app/）とは独立している。
// ---------------------------------------------------------------------------

export const contentRoles = [
  'lead', // 第一印象を作る導入。主メッセージ、ブランドの顔、ファーストビュー。
  'explanation', // 内容や背景を説明する役。サービス説明、想い、会社紹介、ストーリー。
  'catalog', // 選択肢を並べて比較させる役。商品一覧、メニュー、プラン、サービス一覧。
  'proof', // 信頼を補強する役。実績、導入事例、レビュー、数字、受賞歴。
  'facts', // 客観情報を整理して見せる役。住所、営業時間、料金、会社概要、スペック。
  'conversion', // 行動につなげる役。問い合わせ、予約、資料請求、応募、購入導線。
  'support', // 理解や意思決定を補助する役。FAQ、利用フロー、注意事項、比較の補助。
  'updates', // 継続的な更新を伝える役。お知らせ、ニュース、ブログ、イベント情報。
  'utility', // サイト運用上必要な補助情報。規約、ポリシー、法務表記、補助ナビ。
] as const;

export type ContentRole = (typeof contentRoles)[number];

export const blockPatterns = [
  'visual-lead',
  'carousel',
  'split-media',
  'rich-text',
  'card-grid',
  'proof-grid',
  'info-list',
  'faq',
  'article-list',
  'cta-band',
  'legal-text',
  'map-with-info',
] as const;

export type BlockPattern = (typeof blockPatterns)[number];

// role ごとのおすすめ pattern。
// ただしこれはガイドであって、型としての強制ではない。
export const suggestedPatternsByRole = {
  lead: ['visual-lead', 'carousel', 'split-media'],
  explanation: ['rich-text', 'split-media'],
  catalog: ['card-grid', 'info-list'],
  proof: ['proof-grid', 'card-grid'],
  facts: ['info-list', 'map-with-info'],
  conversion: ['cta-band', 'rich-text'],
  support: ['faq', 'rich-text'],
  updates: ['article-list', 'card-grid'],
  utility: ['legal-text', 'info-list'],
} as const satisfies Record<ContentRole, readonly BlockPattern[]>;

export interface RouteBlock {
  role: ContentRole;
  pattern: BlockPattern;
}

export interface RouteFormat {
  layout: LayoutFormat;
  blocks: readonly RouteBlock[];
}

export interface StructureFormat<TRoute extends string = string> {
  routes: Record<TRoute, RouteFormat>;
}

export type CorpSiteStructureFormat = StructureFormat<RouteKey>;

// 現在このサイトで採用している structure の実値。
export const structure: CorpSiteStructureFormat = {
  routes: {
    home: {
      layout: {
        header: 'standard',
        footer: 'standard',
      },
      blocks: [
        { role: 'lead', pattern: 'visual-lead' },
        { role: 'explanation', pattern: 'rich-text' },
        { role: 'facts', pattern: 'map-with-info' },
        { role: 'conversion', pattern: 'cta-band' },
      ],
    },
    contact: {
      layout: {
        header: 'compact',
        footer: 'minimal',
      },
      blocks: [
        { role: 'conversion', pattern: 'rich-text' },
        { role: 'facts', pattern: 'info-list' },
        { role: 'support', pattern: 'faq' },
        { role: 'utility', pattern: 'legal-text' },
      ],
    },
  },
} as const;
