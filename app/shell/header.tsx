import type { ShellNavEntry } from './config';

export type HeaderPattern = 'standard' | 'compact' | 'none';

export interface HeaderProps {
  pattern: HeaderPattern;
  brandText: string;
  drawerId: string;
  navEntries: readonly ShellNavEntry[];
  primaryCta: { readonly label: string; readonly href: string };
}

export function Header(props: HeaderProps) {
  const { pattern, brandText, drawerId, navEntries, primaryCta } = props;

  if (pattern === 'none') {
    return null;
  }

  const compact = pattern === 'compact';
  const pad = compact ? 'py-2' : 'py-3';

  return (
    <header class='border-b border-neutral-200 bg-white'>
      <div
        class={`mx-auto flex w-full max-w-6xl min-w-0 items-center gap-2 px-3 sm:gap-3 sm:px-4 ${pad}`}
      >
        <label
          aria-label='メニューを開く'
          class={`order-1 inline-flex shrink-0 cursor-pointer items-center justify-center rounded border border-neutral-300 lg:hidden ${compact ? 'h-8 w-8' : 'h-9 w-9'}`}
          htmlFor={drawerId}
        >
          <svg
            aria-hidden='true'
            class={compact ? 'h-4 w-4' : 'h-5 w-5'}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 6h16M4 12h16M4 18h16'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
        </label>

        <a
          class={`order-2 min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-1 text-left lg:order-1 lg:max-w-sm lg:flex-none ${compact ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}
          href='/'
          title={brandText}
        >
          {brandText}
        </a>

        <nav
          aria-label='グローバルナビ'
          class='order-3 hidden min-w-0 lg:order-2 lg:flex lg:flex-1 lg:justify-center'
        >
          <ul
            class={`flex flex-nowrap items-center gap-4 ${compact ? 'text-sm' : 'text-sm sm:text-base'}`}
          >
            {navEntries.map((entry) => (
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
        </nav>

        <div class='order-4 hidden shrink-0 lg:order-3 lg:block'>
          <a
            class={`inline-flex items-center justify-center rounded border border-neutral-300 px-3 text-center ${compact ? 'py-1.5 text-sm' : 'py-2 text-sm sm:text-base'}`}
            href={primaryCta.href}
          >
            {primaryCta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
