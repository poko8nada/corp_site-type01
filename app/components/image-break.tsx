export interface ImageBreakProps {
  src: string;
  alt: string;
}

export function ImageBreak(props: ImageBreakProps) {
  const { src, alt } = props;

  return (
    <div aria-hidden='true' class='w-full'>
      <img
        alt={alt}
        class='h-64 w-full object-cover sm:h-80 lg:h-96'
        decoding='async'
        loading='lazy'
        src={src}
      />
    </div>
  );
}
