export interface CtaBandProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CtaBand(props: CtaBandProps) {
  const { heading, description, ctaLabel, ctaHref } = props;

  return (
    <div class='hero border-base-300 bg-base-200/50 rounded-box border -mx-4 min-h-0 py-0 sm:-mx-6 lg:-mx-8'>
      <div class='hero-content flex-col gap-6 px-6 py-10 text-center sm:gap-8 sm:px-8 sm:py-12'>
        <div class='max-w-3xl'>
          <h3 class='font-display text-base-content text-2xl tracking-tight sm:text-3xl'>
            {heading}
          </h3>
          <p class='text-base-content/85 mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg'>
            {description}
          </p>
        </div>
        <div class='flex flex-wrap justify-center gap-3'>
          <a class='btn btn-primary px-8' href={ctaHref}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
