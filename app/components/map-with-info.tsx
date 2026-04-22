export interface MapInfoRow {
  label: string;
  value: string;
  valueHref?: string;
}

export interface MapWithInfoProps {
  heading: string;
  rows: readonly MapInfoRow[];
  /** 地図埋め込み前の短い注記 */
  mapNote?: string;
}

export function MapWithInfo(props: MapWithInfoProps) {
  const { heading, rows, mapNote } = props;

  return (
    <div class='grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8'>
      <div class='card bg-base-100 border-base-300/60 border shadow-sm'>
        <div class='card-body gap-6'>
          <h3 class='card-title font-display text-2xl tracking-tight sm:text-3xl'>{heading}</h3>
          <dl class='divide-base-300/80 border-base-300/80 divide-y border-y'>
            {rows.map((row) => (
              <div
                class='grid gap-1 py-4 sm:grid-cols-[minmax(0,7.5rem)_minmax(0,1fr)] sm:gap-6'
                key={row.label}
              >
                <dt class='text-base-content/55 text-sm font-semibold'>{row.label}</dt>
                <dd class='text-base-content/90 text-sm leading-relaxed sm:text-base'>
                  {row.valueHref ? (
                    <a class='link link-hover' href={row.valueHref}>
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div class='card bg-base-200/80 border border-dashed border-base-300 shadow-none'>
        <div
          aria-label='地図プレースホルダー'
          class='card-body text-base-content/45 flex aspect-4/3 flex-col items-center justify-center gap-2 py-10 text-center text-sm lg:aspect-auto lg:min-h-72'
          role='img'
        >
          <span class='font-medium'>地図プレースホルダー</span>
          {mapNote ? <span class='text-xs opacity-80'>{mapNote}</span> : null}
        </div>
      </div>
    </div>
  );
}
