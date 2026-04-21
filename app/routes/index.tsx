import { createRoute } from 'honox/factory';
import { siteShell, shellLayoutForRoute } from '../../content/site';

export default createRoute((c) => {
  return c.render(
    <div class='px-4 py-10'>
      <p class='text-base'>{siteShell.defaultTitle}</p>
    </div>,
    { title: siteShell.defaultTitle, ...shellLayoutForRoute('home') },
  );
});
