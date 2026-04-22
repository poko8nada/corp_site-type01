export interface RichTextProps {
  heading: string;
  paragraphs: readonly string[];
}

export function RichText(props: RichTextProps) {
  const { heading, paragraphs } = props;

  return (
    <div class='card bg-base-100 border-base-300/60 mx-auto max-w-3xl border shadow-sm'>
      <div class='card-body gap-6 sm:gap-8'>
        <h3 class='card-title font-display text-2xl tracking-tight sm:text-3xl'>{heading}</h3>
        <div class='text-base-content/85 space-y-5 text-base leading-relaxed sm:text-lg'>
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
