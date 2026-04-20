/**
 * Props passed as the second argument to `c.render(..., props)` for the global shell.
 * Defaults fall back to `siteShell` when omitted.
 */
export interface SiteShellRenderProps {
  title?: string;
  description?: string;
}

/**
 * Default document metadata for the global HTML shell (`_renderer`).
 *
 * README のとおり、ここはサイト向けの確定コピー／メタであり、`interview` を import して直結しない。
 * デモでは取材と同じ文言でも、責務上は別レイヤーとして維持する。
 */
export interface SiteShell {
  htmlLang: string;
  defaultTitle: string;
  defaultDescription: string;
}

export const siteShell: SiteShell = {
  htmlLang: 'ja',
  defaultTitle: 'BAR KAGETSUKI NAKASU',
  defaultDescription:
    '福岡・中洲の夜に、静かに寄り添うオーセンティックバー。ウイスキーとカクテルを落ち着いた空間で楽しめます。',
};
