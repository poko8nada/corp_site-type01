export interface CtaBandProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CtaBand(props: CtaBandProps) {
  const { heading, description, ctaLabel, ctaHref } = props;

  return (
    <div class='flex flex-col items-center gap-6 text-center'>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {heading}
      </h3>
      <p class='text-base-content/50 max-w-sm text-base leading-relaxed'>{description}</p>
      <a class='btn btn-primary mt-4 px-10 tracking-widest uppercase' href={ctaHref}>
        {ctaLabel}
      </a>
    </div>
  );
}
