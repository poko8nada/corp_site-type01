import type { Child } from 'hono/jsx';

export interface MediaBlockProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  children: Child;
}

export function MediaBlock(props: MediaBlockProps) {
  const { imageSrc, imageAlt, imagePosition = 'right', children } = props;

  const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

  return (
    <div class='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
      <div>{children}</div>
      <div class={imageOrder}>
        <img
          alt={imageAlt}
          class='w-full rounded-lg object-cover shadow-sm'
          decoding='async'
          loading='lazy'
          src={imageSrc}
        />
      </div>
    </div>
  );
}
