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
      <div class={`mt-12 grid gap-5 sm:gap-6 ${gridCols}`}>
        {items.map((item, index) => (
          <div
            class='reveal-on-scroll card-elevate p-6 sm:p-8 lg:p-10 cursor-pointer'
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
