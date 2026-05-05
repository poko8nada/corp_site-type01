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
      <div class='absolute inset-0 bg-linear-to-t from-base-100 via-base-100/60 to-base-100/20' />

      <div class='relative mx-auto w-full max-w-5xl px-6 pb-20 sm:px-8 sm:pb-28 lg:px-10'>
        <p class='text-primary text-xs font-medium tracking-[0.25em] uppercase'>{eyebrow}</p>
        <h1 class='font-display mt-4 text-5xl leading-none tracking-tight sm:text-7xl lg:text-8xl'>
          {headline}
        </h1>
        <p class='text-base-content/60 mt-8 max-w-md text-base leading-relaxed sm:text-lg'>
          {description}
        </p>
        {highlights.length > 0 ? (
          <ul class='text-base-content/40 mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-wide sm:text-sm'>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
