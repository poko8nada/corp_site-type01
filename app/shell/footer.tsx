import type { ShellFooterCopy, ShellLegalEntry } from './config';

export type FooterPattern = 'standard' | 'minimal' | 'none';

export interface FooterProps {
  pattern: FooterPattern;
  copy: ShellFooterCopy;
}

function currentYear(): number {
  return new Date().getFullYear();
}

function legalRow(entry: ShellLegalEntry) {
  if (entry.kind === 'link') {
    return (
      <a
        class='link link-hover inline-flex min-h-9 items-center rounded-sm py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'
        href={entry.href}
      >
        {entry.label}
      </a>
    );
  }
  return (
    <span
      class='text-base-content/50 inline-flex min-h-9 cursor-not-allowed items-center py-0.5'
      data-shell-link-state='placeholder'
      title={entry.reason}
    >
      {entry.label}
    </span>
  );
}

export function Footer(props: FooterProps) {
  const { pattern, copy } = props;

  if (pattern === 'none') {
    return null;
  }

  const shellInset = 'mx-auto w-full max-w-6xl px-4 pt-12 pb-6 sm:px-6 sm:pt-14 sm:pb-8 lg:px-8';

  const sectionBlockMinimal = 'flex min-w-0 w-full md:w-auto flex-col gap-4 text-left';
  const sectionBlockStandard = 'flex min-w-0 w-full md:w-auto flex-col gap-1.5 text-left';

  const footerSectionTitle =
    'text-base-content/60 text-xs font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-wide';

  if (pattern === 'minimal') {
    return (
      <footer class='border-base-300 bg-base-200 text-base-content border-t'>
        <div class={shellInset}>
          <section aria-labelledby='footer-minimal-heading' class={sectionBlockMinimal}>
            <h2 class='sr-only' id='footer-minimal-heading'>
              店舗・連絡先
            </h2>
            <div class='space-y-2 text-sm leading-relaxed'>
              <p class='text-base font-semibold leading-snug'>{copy.copyrightName}</p>
              {copy.contactLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div class='border-base-300 mt-8 border-t pt-6 text-center'>
              <p class='text-sm leading-relaxed'>
                © {currentYear()} {copy.copyrightName}
              </p>
            </div>
          </section>
        </div>
      </footer>
    );
  }

  return (
    <footer class='border-base-300 bg-base-200 text-base-content border-t'>
      <div class={shellInset}>
        <div class='grid w-full grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-14 md:gap-y-0 lg:gap-x-20'>
          <div class='flex flex-col gap-y-10 sm:flex-row sm:gap-x-14 sm:gap-y-0 lg:gap-x-16'>
            <section class={sectionBlockStandard}>
              <h2 class={footerSectionTitle} id='footer-company-heading'>
                {copy.companyHeading}
              </h2>
              <ul
                aria-labelledby='footer-company-heading'
                class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
              >
                {copy.companyLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
            <section class={sectionBlockStandard}>
              <h2 class={footerSectionTitle} id='footer-contact-heading'>
                {copy.contactHeading}
              </h2>
              <ul
                aria-labelledby='footer-contact-heading'
                class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
              >
                {copy.contactLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          </div>
          <section class={`${sectionBlockStandard} md:justify-self-end`}>
            <h2 class={footerSectionTitle} id='footer-legal-heading'>
              {copy.legalHeading}
            </h2>
            <ul
              aria-labelledby='footer-legal-heading'
              class='flex flex-col gap-1.5 text-sm font-normal leading-relaxed'
            >
              {copy.legalEntries.map((entry) => (
                <li key={entry.label}>{legalRow(entry)}</li>
              ))}
            </ul>
          </section>
        </div>
        <div class='border-base-300 mt-10 border-t pt-6 text-center'>
          <p class='text-sm leading-relaxed'>
            © {currentYear()} {copy.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}
