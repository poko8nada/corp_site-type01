import type { ShellNavEntry } from './config';

export interface SiteDrawerNavProps {
  entries: readonly ShellNavEntry[];
}

export function SiteDrawerNav(props: SiteDrawerNavProps) {
  const { entries } = props;

  return (
    <ul class='flex flex-col gap-1 border border-neutral-200 p-2'>
      {entries.map((entry) => (
        <li key={entry.label}>
          {entry.kind === 'link' ? (
            <a class='block rounded px-3 py-2 underline-offset-4 hover:underline' href={entry.href}>
              {entry.label}
            </a>
          ) : (
            <span
              class='block cursor-not-allowed px-3 py-2 opacity-50'
              data-shell-link-state='placeholder'
              title={entry.reason}
            >
              {entry.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
