export interface ImageBreakProps {
  src: string;
  alt: string;
}

export function ImageBreak(props: ImageBreakProps) {
  const { src, alt } = props;

  return (
    <div aria-hidden='true' class='w-full overflow-hidden'>
      <img
        alt={alt}
        class='reveal-on-scroll [--reveal-delay:20ms] h-64 w-full object-cover sm:h-80 lg:h-96'
        decoding='async'
        loading='lazy'
        src={src}
      />
    </div>
  );
}
