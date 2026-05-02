import {
  SITE_FRAME_DRAWER_ID,
  SiteLayout,
  frameFooterCopy,
  frameNavEntries,
  framePrimaryCta,
} from '@/sections/frame';
import { raw } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;');
}

export type SiteRenderProps = {
  title?: string;
  description?: string;
  headerPattern?: 'standard' | 'compact' | 'none';
  footerPattern?: 'standard' | 'minimal' | 'none';
};

export default jsxRenderer((props) => {
  const { children, Layout } = props;
  const title = props.title ?? 'BAR KAGETSUKI NAKASU';
  const description =
    props.description ??
    '福岡・中洲の夜に、静かに寄り添うオーセンティックバー。ウイスキーとカクテルを落ち着いた空間で楽しめます。';
  const headerPattern = props.headerPattern ?? 'standard';
  const footerPattern = props.footerPattern ?? 'standard';

  const brandText = 'BAR KAGETSUKI NAKASU';

  return (
    <html lang='ja'>
      <head>
        {raw('<!-- site-frame:analytics-head (e.g. GTM container snippet) -->')}
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
        <meta name='description' content={escapeHtmlAttr(description)} />
        <link rel='icon' href='/favicon.ico' />
        <Link href='/app/style.css' rel='stylesheet' />
        <Script src='/app/client.ts' async />
      </head>
      <body class='bg-base-100 text-base-content min-h-dvh overflow-x-hidden'>
        {raw('<!-- site-frame:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <SiteLayout
          brandText={brandText}
          drawerId={SITE_FRAME_DRAWER_ID}
          footerCopy={frameFooterCopy}
          footerPattern={footerPattern}
          headerPattern={headerPattern}
          main={<Layout>{children}</Layout>}
          navEntries={frameNavEntries}
          primaryCta={framePrimaryCta}
        />
      </body>
    </html>
  );
});
