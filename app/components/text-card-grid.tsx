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
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {sectionHeading}
      </h3>
      <div class={`mt-12 grid gap-12 md:gap-10 ${gridCols}`}>
        {items.map((item, index) => (
          <div key={`${item.heading ?? ''}${index}`}>
            {item.heading ? (
              <p class='text-primary text-xs font-medium tracking-[0.2em] uppercase'>
                {item.heading}
              </p>
            ) : null}
            <p class={`text-base-content/60 leading-relaxed ${item.heading ? 'mt-3' : ''}`}>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
