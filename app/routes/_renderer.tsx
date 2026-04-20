import { raw } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';
import { siteWide } from '../../content/site';

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;');
}

export default jsxRenderer((props) => {
  const { children, Layout } = props;
  const title = props.title ?? siteWide.defaultTitle;
  const description = props.description ?? siteWide.defaultDescription;

  return (
    <html lang={siteWide.htmlLang}>
      <head>
        {raw('<!-- site-shell:analytics-head (e.g. GTM container snippet) -->')}
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{title}</title>
        <meta name='description' content={escapeHtmlAttr(description)} />
        <link rel='icon' href='/favicon.ico' />
        <Link href='/app/style.css' rel='stylesheet' />
        <Script src='/app/client.ts' async />
      </head>
      <body class='min-h-dvh'>
        {raw('<!-- site-shell:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <a
          class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black'
          href='#main-content'
        >
          メインコンテンツへスキップ
        </a>
        <main id='main-content'>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
});
