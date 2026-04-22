export interface VisualLeadProps {
  /** 肩書き・カテゴリ（例: 業態） */
  eyebrow: string;
  headline: string;
  description: string;
  /** 画像プレースホルダー用（将来の img alt に流用） */
  imageAlt: string;
}

export function VisualLead(props: VisualLeadProps) {
  const { eyebrow, headline, description, imageAlt } = props;

  return (
    <div class='hero bg-transparent min-h-0 w-full py-0'>
      <div class='hero-content w-full max-w-none flex-col items-start justify-start gap-10 px-0 py-0 text-left lg:flex-row lg:items-center lg:gap-14'>
        <div class='flex min-w-0 flex-1 flex-col gap-5'>
          <p class='text-primary text-xs font-semibold uppercase tracking-[0.2em]'>{eyebrow}</p>
          <h1 class='font-display text-base-content text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
            {headline}
          </h1>
          <p class='text-base-content/85 max-w-prose text-base leading-relaxed sm:text-lg'>
            {description}
          </p>
        </div>
        <div class='card bg-base-200/80 w-full max-w-none border border-dashed border-base-300 shadow-none lg:max-w-md'>
          <div
            aria-label={imageAlt}
            class='card-body text-base-content/45 flex aspect-[4/3] flex-col items-center justify-center gap-2 py-10 text-center text-sm leading-snug'
            role='img'
          >
            <span class='font-medium'>画像プレースホルダー</span>
            <span class='text-xs opacity-80'>{imageAlt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
