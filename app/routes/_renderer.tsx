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
      <body class='bg-base-100 text-base-content min-h-dvh overflow-x-hidden'>
        {raw('<!-- site-shell:analytics-body-open (e.g. GTM noscript iframe) -->')}
        <div class='drawer drawer-end'>
          <input class='drawer-toggle' id={SITE_SHELL_DRAWER_ID} type='checkbox' />
          <div class='drawer-content bg-base-100 flex min-h-dvh min-w-0 flex-col'>
            <a
              class='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-btn focus:border focus:border-base-300 focus:bg-base-100 focus:px-4 focus:py-2 focus:text-base-content focus:shadow focus:outline-2 focus:outline-offset-2'
              href='#main-content'
            >
              メインコンテンツへスキップ
            </a>
            <div class='flex min-h-screen flex-1 flex-col'>
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
          </div>
          <div class='drawer-side z-50 lg:hidden'>
            <label
              aria-label='画面のこの部分をタップしてメニューを閉じる'
              class='drawer-overlay'
              htmlFor={SITE_SHELL_DRAWER_ID}
            />
            <aside class='bg-base-200 text-base-content flex min-h-full w-80 max-w-[calc(100vw-1rem)] flex-col gap-4 border-l border-base-300 p-4'>
              <div class='flex min-w-0 items-start justify-between gap-2'>
                <p
                  class='font-display text-lg leading-snug tracking-tight break-words'
                  title='BAR KAGETSUKI NAKASU'
                >
                  BAR KAGETSUKI NAKASU
                </p>
                <label
                  aria-label='メニューを閉じる'
                  class='btn btn-square btn-ghost btn-sm shrink-0'
                  htmlFor={SITE_SHELL_DRAWER_ID}
                >
                  <svg
                    aria-hidden='true'
                    class='h-5 w-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 18L18 6M6 6l12 12'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    />
                  </svg>
                </label>
              </div>
              <DrawerNav entries={shellNavEntries} />
              <a class='btn btn-outline btn-primary btn-sm shrink-0' href={shellPrimaryCta.href}>
                {shellPrimaryCta.label}
              </a>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
});
