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
    <div class='relative flex min-h-[80vh] items-end'>
      <img
        alt={imageAlt}
        class='absolute inset-0 h-full w-full object-cover'
        decoding='async'
        loading='eager'
        src={imageSrc}
      />
      <div class='absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30' />
      <div class='absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-base-100 to-transparent' />

      <div class='relative mx-auto w-full max-w-5xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-10'>
        <p class='text-xs font-medium tracking-[0.25em] uppercase text-white/50'>{eyebrow}</p>
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
    </div>
  );
}
