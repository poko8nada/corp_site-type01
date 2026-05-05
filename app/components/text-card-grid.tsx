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

  return (
    <div>
      <h3 class='font-display text-base-content text-2xl leading-snug tracking-tight sm:text-3xl'>
        {sectionHeading}
      </h3>
      <div class={`mt-12 grid gap-0 border-t border-base-300/40 ${gridCols}`}>
        {items.map((item, index) => (
          <div
            class='reveal-on-scroll border-b border-base-300/40 py-8 sm:py-10 md:border-b-0 md:border-l md:first:border-l-0 md:px-8 md:py-0 lg:px-10'
            key={`${item.heading ?? ''}${index}`}
          >
            {item.heading ? (
              <p class='font-display text-lg tracking-tight text-base-content sm:text-xl'>
                {item.heading}
              </p>
            ) : null}
            <p
              class={`text-base-content/55 text-sm leading-relaxed sm:text-base ${item.heading ? 'mt-4' : ''}`}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
