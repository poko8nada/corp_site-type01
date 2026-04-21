import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(
    <div class='text-base-content px-4 py-10'>
      <p class='font-display text-base'>BAR KAGETSUKI NAKASU</p>
    </div>,
    { title: 'BAR KAGETSUKI NAKASU' },
  );
});
