import type { Child } from 'hono/jsx';

export interface MediaBlockProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  children: Child;
}

export function MediaBlock(props: MediaBlockProps) {
  const { imageSrc, imageAlt, imagePosition = 'right', children } = props;

  const imageOrder = imagePosition === 'left' ? 'xl:order-first' : 'xl:order-last';

  return (
    <div class='grid items-center gap-10 md:gap-12 xl:grid-cols-2 xl:gap-16'>
      <div class='reveal-on-scroll [--reveal-delay:120ms]'>{children}</div>
      <div class={`${imageOrder} reveal-on-scroll [--reveal-delay:40ms]`}>
        <img
          alt={imageAlt}
          class='img-ambient aspect-4/3 w-full object-cover'
          decoding='async'
          loading='lazy'
          src={imageSrc}
        />
      </div>
    </div>
  );
}
