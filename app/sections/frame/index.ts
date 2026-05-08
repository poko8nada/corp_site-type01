export const SITE_FRAME_DRAWER_ID = 'site-frame-drawer' as const;

export const frameIsDemo = true as const;

export const frameBrandText = 'CASUAL BAR Lyra' as const;

export const frameDefaultMetaDescription =
  '中洲のカジュアルバー CASUAL BAR Lyra。女性バーテンダーの気配りと本格的なカクテル・ウイスキーを、落ち着いた空間で楽しめます。' as const;

export type FrameNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export const frameNavEntries: readonly FrameNavEntry[] = [
  { kind: 'link', label: '当店について', href: '/#home-section-explanation' },
  { kind: 'link', label: 'こだわり', href: '/#home-section-strengths' },
  { kind: 'link', label: 'アクセス', href: '/#home-section-facts' },
  { kind: 'link', label: 'よくある質問', href: '/#home-section-info' },
] as const;

export const framePrimaryCta = {
  label: 'お問い合わせ',
  href: '/contact',
} as const;

export type FrameLegalEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export interface FrameFooterCopy {
  companyHeading: string;
  companyLines: readonly string[];
  contactHeading: string;
  contactLines: readonly string[];
  legalHeading: string;
  legalEntries: readonly FrameLegalEntry[];
  copyrightName: string;
}

export const frameFooterCopy: FrameFooterCopy = {
  companyHeading: '店舗情報',
  companyLines: ['CASUAL BAR Lyra', '〒XXX-XXXX 福岡県福岡市博多区デモ町X-X-X', 'デモビル X階'],
  contactHeading: '連絡先',
  contactLines: [
    'Tel XXX-XXX-XXXX',
    '営業: 月〜木 18:30〜翌2:00／金・土 18:30〜翌3:00（日曜定休）',
  ],
  legalHeading: '法務・ポリシー',
  legalEntries: [{ kind: 'link', label: 'プライバシーポリシー', href: '/privacy' }],
  copyrightName: frameBrandText,
} as const;

export { DrawerNav } from './drawer-nav';
export type { DrawerNavProps } from './drawer-nav';
export { Footer } from './footer';
export type { FooterPattern, FooterProps } from './footer';
export { Header } from './header';
export type { HeaderPattern, HeaderProps } from './header';
export { SiteLayout } from './site-layout';
export type { SiteLayoutProps } from './site-layout';
