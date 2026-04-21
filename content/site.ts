import { structure, type FooterPattern, type HeaderPattern, type RouteKey } from './structure';

/**
 * Props passed as the second argument to `c.render(..., props)` for the global shell.
 * Defaults fall back to `siteShell` when omitted.
 */
export interface SiteShellRenderProps {
  title?: string;
  description?: string;
  headerPattern?: HeaderPattern;
  footerPattern?: FooterPattern;
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

/**
 * `structure.routes` の layout を `c.render` の shell props に落とす。
 */
export function shellLayoutForRoute(
  route: RouteKey,
): Pick<SiteShellRenderProps, 'headerPattern' | 'footerPattern'> {
  const { layout } = structure.routes[route];
  return { headerPattern: layout.header, footerPattern: layout.footer };
}
