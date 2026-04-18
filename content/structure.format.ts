// Routes included in the first vertical slice.
export type RouteKey = 'home' | 'contact';

// 現状の site data 側で使っている意味語彙。
// structure 側の role / pattern とは別レイヤーとしていったん残している。
export type SectionKey = 'hero' | 'concept' | 'access' | 'contact';

// header / footer は route ごとに合成して持つ。
export const headerPatterns = ['standard', 'compact', 'none'] as const;
export const footerPatterns = ['standard', 'minimal', 'none'] as const;

export type HeaderPattern = (typeof headerPatterns)[number];
export type FooterPattern = (typeof footerPatterns)[number];

export interface LayoutFormat {
  header: HeaderPattern;
  footer: FooterPattern;
}

// role は「何のためのブロックか」を表す。
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

// pattern は「どう見せるか」の選択肢。
// route や role に厳密に縛らず、まずは structure 側の語彙として持つ。
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

// 新しい案件を始める時にコピーして使うための汎用 structure 雛形。
export const structureFormat: CorpSiteStructureFormat = {
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
        header: 'standard',
        footer: 'standard',
      },
      blocks: [
        { role: 'conversion', pattern: 'rich-text' },
        { role: 'facts', pattern: 'info-list' },
        { role: 'support', pattern: 'rich-text' },
        { role: 'utility', pattern: 'legal-text' },
      ],
    },
  },
} as const;
