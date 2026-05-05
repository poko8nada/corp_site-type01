export interface InfoItem {
  label: string;
  value: string;
  href?: string;
}

export interface InfoGroup {
  heading: string;
  items: readonly InfoItem[];
}

export interface InfoGridProps {
  sectionHeading: string;
  groups: readonly InfoGroup[];
}

export function InfoGrid(props: InfoGridProps) {
  const { sectionHeading, groups } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-2xl leading-snug tracking-tight sm:text-3xl'>
        {sectionHeading}
      </h3>
      <div class='mt-12 grid gap-12 sm:grid-cols-2 lg:gap-16'>
        {groups.map((group) => (
          <div key={group.heading}>
            <p class='text-xs font-semibold tracking-[0.18em] uppercase text-base-content/50'>
              {group.heading}
            </p>
            <dl class='mt-4 space-y-0'>
              {group.items.map((item) => (
                <div
                  class='border-b border-base-300/40 py-3.5 first:pt-0 last:border-0 last:pb-0'
                  key={item.label}
                >
                  <dt class='text-xs font-medium text-base-content/45'>{item.label}</dt>
                  <dd class='mt-0.5 text-sm leading-relaxed text-base-content/80'>
                    {item.href ? (
                      <a
                        class='text-primary transition-colors duration-300 hover:text-primary/70'
                        href={item.href}
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
