import { DrawerNav } from '@/shell/drawer-nav';
import { Footer } from '@/shell/footer';
import { Header } from '@/shell/header';
import { raw } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, Script } from 'honox/server';
import {
  SITE_SHELL_DRAWER_ID,
  shellFooterCopy,
  shellNavEntries,
  shellPrimaryCta,
} from '@/shell/config';

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;');
}

export type ShellRenderProps = {
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

  return (
    <html lang='ja'>
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
      <body class='min-h-dvh overflow-x-hidden'>
        {raw('<!-- site-shell:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <a
          class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:border focus:border-neutral-300 focus:bg-white focus:px-4 focus:py-2 focus:shadow'
          href='#main-content'
        >
          メインコンテンツへスキップ
        </a>

        <input class='peer sr-only' id={SITE_SHELL_DRAWER_ID} type='checkbox' />

        <div class='flex min-h-screen flex-col bg-white'>
          <Header
            brandText='BAR KAGETSUKI NAKASU'
            drawerId={SITE_SHELL_DRAWER_ID}
            navEntries={shellNavEntries}
            pattern={headerPattern}
            primaryCta={shellPrimaryCta}
          />
          <main class='flex flex-1 flex-col' id='main-content'>
            <Layout>{children}</Layout>
          </main>
          <Footer copy={shellFooterCopy} pattern={footerPattern} />
        </div>

        <label
          aria-label='メニューを閉じる'
          class='pointer-events-none fixed inset-0 z-40 bg-neutral-950/0 transition peer-checked:pointer-events-auto peer-checked:bg-neutral-950/30 lg:hidden'
          htmlFor={SITE_SHELL_DRAWER_ID}
        />

        <aside class='fixed right-0 top-0 z-50 flex h-full w-[min(100vw-1rem,20rem)] max-w-full translate-x-full flex-col gap-4 border-l border-neutral-200 bg-white p-4 transition-transform peer-checked:translate-x-0 lg:hidden'>
          <p class='text-base leading-snug break-words' title='BAR KAGETSUKI NAKASU'>
            BAR KAGETSUKI NAKASU
          </p>
          <DrawerNav entries={shellNavEntries} />
          <a
            class='inline-flex items-center justify-center rounded border border-neutral-300 px-3 py-2 text-center text-sm'
            href={shellPrimaryCta.href}
          >
            {shellPrimaryCta.label}
          </a>
        </aside>
      </body>
    </html>
  );
});
