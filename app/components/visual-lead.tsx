export interface VisualLeadProps {
  eyebrow: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights?: readonly string[];
}

export function VisualLead(props: VisualLeadProps) {
  const { eyebrow, headline, description, imageSrc, imageAlt, highlights = [] } = props;

  return (
    <div class='relative flex min-h-svh items-end'>
      <img
        alt={imageAlt}
        class='absolute inset-0 h-full w-full object-cover'
        decoding='async'
        loading='eager'
        src={imageSrc}
      />
      <div class='pointer-events-none absolute inset-0' aria-hidden='true'>
        <div class='absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/15' />
        <div class='absolute inset-0 bg-radial-[ellipse_60%_50%_at_50%_75%] from-primary/20 to-transparent' />
        <div class='absolute inset-0 bg-radial-[ellipse_50%_35%_at_30%_90%] from-secondary/10 to-transparent' />
        <div class='absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-base-100 via-base-100/70 to-transparent' />
      </div>

      <div class='relative mx-auto w-full max-w-5xl px-6 pb-24 sm:px-8 sm:pb-32 lg:px-10 lg:pb-36'>
        <p class='text-xs font-medium tracking-[0.28em] uppercase text-white/50'>{eyebrow}</p>
        <h1 class='font-display mt-4 text-5xl leading-none tracking-tighter text-white sm:text-7xl lg:text-8xl'>
          {headline}
        </h1>
        <p class='mt-8 max-w-md text-base leading-relaxed text-white/60 sm:text-lg'>
          {description}
        </p>
        {highlights.length > 0 ? (
          <ul class='mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-wide text-white/40 sm:text-sm'>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div class='absolute inset-x-0 bottom-8 flex justify-center' aria-hidden='true'>
        <svg
          class='scroll-indicator h-5 w-5 text-white/30'
          fill='none'
          stroke='currentColor'
          stroke-width='1.5'
          viewBox='0 0 24 24'
        >
          <path d='M12 5v14M5 12l7 7 7-7' stroke-linecap='round' stroke-linejoin='round' />
        </svg>
      </div>
    </div>
  );
}
