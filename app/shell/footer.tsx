import type { ShellFooterCopy } from './config';

export type FooterPattern = 'standard' | 'minimal' | 'none';

export interface FooterProps {
  pattern: FooterPattern;
  copy: ShellFooterCopy;
}

function currentYear(): number {
  return new Date().getFullYear();
}

export function Footer(props: FooterProps) {
  const { pattern, copy } = props;

  if (pattern === 'none') {
    return null;
  }

  if (pattern === 'minimal') {
    return (
      <footer class='border-t border-neutral-200 bg-neutral-50'>
        <div class='mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p class='text-sm'>
            <span>{copy.copyrightName}</span>
            <span> · {copy.contactLines[0]}</span>
          </p>
          <p class='text-sm'>
            © {currentYear()} {copy.copyrightName}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer class='border-t border-neutral-200 bg-neutral-50'>
      <div class='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
        <div class='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8'>
          <section class='min-w-0 space-y-3'>
            <h2 class='text-sm'>{copy.companyHeading}</h2>
            <ul class='space-y-2 text-sm'>
              {copy.companyLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
          <section class='min-w-0 space-y-3'>
            <h2 class='text-sm'>{copy.contactHeading}</h2>
            <ul class='space-y-2 text-sm'>
              {copy.contactLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
          <section class='min-w-0 space-y-3'>
            <h2 class='text-sm'>{copy.legalHeading}</h2>
            <ul class='space-y-2 text-sm'>
              {copy.legalEntries.map((entry) => (
                <li key={entry.label}>
                  {entry.kind === 'link' ? (
                    <a class='underline-offset-4 hover:underline' href={entry.href}>
                      {entry.label}
                    </a>
                  ) : (
                    <span
                      class='cursor-not-allowed opacity-50'
                      data-shell-link-state='placeholder'
                      title={entry.reason}
                    >
                      {entry.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section class='min-w-0 space-y-3'>
            <h2 class='sr-only'>コピーライト</h2>
            <p class='text-sm'>
              © {currentYear()} {copy.copyrightName}
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
