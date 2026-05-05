export interface TextCardGridItem {
  heading?: string;
  body: string;
}

export interface TextCardGridProps {
  sectionHeading: string;
  items: readonly TextCardGridItem[];
  columns?: 2 | 3;
}

export function TextCardGrid(props: TextCardGridProps) {
  const { sectionHeading, items, columns = 3 } = props;
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  const revealDelayByIndex = [
    '[--reveal-delay:0ms]',
    '[--reveal-delay:70ms]',
    '[--reveal-delay:140ms]',
    '[--reveal-delay:210ms]',
  ] as const;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {sectionHeading}
      </h3>
      <div class={`mt-10 grid gap-5 sm:mt-12 sm:gap-6 ${gridCols}`}>
        {items.map((item, index) => (
          <div
            class={`reveal-on-scroll card-elevate p-6 sm:p-8 lg:p-10 ${
              revealDelayByIndex[Math.min(index, revealDelayByIndex.length - 1)]
            }`}
            key={`${item.heading ?? ''}${index}`}
          >
            {item.heading ? (
              <p class='font-display text-xl tracking-tight text-base-content sm:text-2xl'>
                {item.heading}
              </p>
            ) : null}
            <p
              class={`text-base-content/82 text-sm leading-relaxed sm:text-base ${item.heading ? 'mt-3' : ''}`}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
