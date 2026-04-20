import { siteData } from './data';

/**
 * Props passed as the second argument to `c.render(..., props)` for the global shell.
 * Defaults fall back to `siteWide` when omitted.
 */
export interface SiteShellRenderProps {
  title?: string;
  description?: string;
}

/**
 * Site-wide values consumed by the global HTML shell (`_renderer`).
 * Keep this separate from route/section content so `lang` and defaults stay in one place.
 */
export interface SiteWide {
  htmlLang: string;
  defaultTitle: string;
  defaultDescription: string;
}

export const siteWide: SiteWide = {
  htmlLang: 'ja',
  defaultTitle: siteData.interview.identity.publicName,
  defaultDescription: siteData.interview.identity.summary,
};
