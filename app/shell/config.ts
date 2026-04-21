export const SITE_SHELL_DRAWER_ID = 'site-shell-drawer' as const;

export type ShellNavEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export const shellNavEntries: readonly ShellNavEntry[] = [
  { kind: 'link', label: 'ホーム', href: '/' },
  { kind: 'link', label: 'お問い合わせ', href: '/contact' },
  {
    kind: 'placeholder',
    label: 'お知らせ',
    reason: '掲載ページ未作成のためリンクなし（後で URL を接続）',
  },
] as const;

export const shellPrimaryCta = {
  label: 'お問い合わせ',
  href: '/contact',
} as const;

export type ShellLegalEntry =
  | { kind: 'link'; label: string; href: string }
  | { kind: 'placeholder'; label: string; reason: string };

export interface ShellFooterCopy {
  companyHeading: string;
  companyLines: readonly string[];
  contactHeading: string;
  contactLines: readonly string[];
  legalHeading: string;
  legalEntries: readonly ShellLegalEntry[];
  copyrightName: string;
}

export const shellFooterCopy: ShellFooterCopy = {
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
