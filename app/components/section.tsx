import type { PropsWithChildren } from 'hono/jsx';

/** Wrapper that provides an sr-only heading for accessibility. Add a surface class for visual distinction. */
export interface SectionProps extends PropsWithChildren {
  /** sr-only 見出しに使うテキスト */
  label: string;
  /** DOM の id 属性 */
  id: string;
  /** outer 要素に付与するクラス */
  class?: string;
}

export function Section(props: SectionProps) {
  const { label, id, class: className = '', children } = props;
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId} class={className} id={id}>
      <h2 class='sr-only' id={headingId}>
        {label}
      </h2>
      {children}
    </section>
  );
}
