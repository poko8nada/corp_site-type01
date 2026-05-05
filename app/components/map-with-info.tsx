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
              class='flex gap-4 border-b border-base-300/60 py-4 first:pt-0 last:border-0 last:pb-0'
              key={row.label}
            >
              <dt class='w-28 shrink-0 text-sm font-medium text-base-content/50'>{row.label}</dt>
              <dd class='text-sm text-base-content/80'>
                {row.valueHref ? (
                  <a
                    class='text-primary transition-colors duration-500 hover:text-primary/70'
                    href={row.valueHref}
                  >
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
          class='flex aspect-4/3 w-full items-center justify-center rounded-lg border border-base-300/50 bg-base-200/60 text-center text-sm text-base-content/40 lg:aspect-auto lg:min-h-80'
          role='img'
        >
          <span class='max-w-48 px-4'>{mapNote}</span>
        </div>
      </div>
    </div>
  );
}
