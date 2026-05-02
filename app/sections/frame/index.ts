export const SITE_FRAME_DRAWER_ID = 'site-frame-drawer' as const;

export type FrameNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export const frameNavEntries: readonly FrameNavEntry[] = [
  { kind: 'link', label: 'ホーム', href: '/' },
  { kind: 'link', label: 'お問い合わせ', href: '/contact' },
  {
    kind: 'placeholder',
    label: 'お知らせ',
    reason: '掲載ページ未作成のためリンクなし（後で URL を接続）',
  },
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
  companyLines: ['BAR KAGETSUKI NAKASU', 'Gate Stage Nakasu 5F'],
  contactHeading: '連絡先',
  contactLines: ['Tel 092-555-0137'],
  legalHeading: '法務・ポリシー',
  legalEntries: [
    {
      kind: 'placeholder',
      label: 'プライバシーポリシー',
      reason: 'ページ未作成のためリンクなし（後で URL を接続）',
    },
    {
      kind: 'placeholder',
      label: '特定商取引法に基づく表記',
      reason: 'ページ未作成のためリンクなし（後で URL を接続）',
    },
  ],
  copyrightName: 'BAR KAGETSUKI NAKASU',
} as const;

export { DrawerNav } from './drawer-nav';
export type { DrawerNavProps } from './drawer-nav';
export { Footer } from './footer';
export type { FooterPattern, FooterProps } from './footer';
export { Header } from './header';
export type { HeaderPattern, HeaderProps } from './header';
export { SiteLayout } from './site-layout';
export type { SiteLayoutProps } from './site-layout';
