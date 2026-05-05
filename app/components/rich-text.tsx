export interface RichTextProps {
  heading: string;
  paragraphs: readonly string[];
}

export function RichText(props: RichTextProps) {
  const { heading, paragraphs } = props;

  return (
    <div>
      <h3 class='font-display text-base-content text-3xl leading-snug tracking-tight sm:text-4xl'>
        {heading}
      </h3>
      <div class='text-base-content/60 mt-8 space-y-6 text-base leading-[1.95] sm:text-lg sm:leading-[1.95]'>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
