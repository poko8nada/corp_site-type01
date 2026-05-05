export interface MapInfoRow {
  label: string;
  value: string;
  valueHref?: string;
}

export interface MapWithInfoProps {
  heading: string;
  mapNote: string;
  rows: readonly MapInfoRow[];
}

export function MapWithInfo(props: MapWithInfoProps) {
  const { heading, mapNote, rows } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {heading}
      </h3>
      <div class='mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16'>
        <dl class='space-y-0'>
          {rows.map((row) => (
            <div
              class='border-b border-base-300/30 flex gap-4 py-4 first:pt-0 last:border-0 last:pb-0'
              key={row.label}
            >
              <dt class='text-base-content/40 w-28 shrink-0 text-sm'>{row.label}</dt>
              <dd class='text-base-content/80 text-sm'>
                {row.valueHref ? (
                  <a class='text-primary hover:underline' href={row.valueHref}>
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        <div
          aria-label={mapNote}
          class='bg-base-200 text-base-content/30 flex aspect-4/3 w-full items-center justify-center text-center text-sm lg:aspect-auto lg:min-h-80'
          role='img'
        >
          <span class='max-w-48 px-4'>{mapNote}</span>
        </div>
      </div>
    </div>
  );
}
