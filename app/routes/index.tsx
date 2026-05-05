import { frameBrandText } from '@/sections/frame';
import { HomePage } from '@/sections/home';
import { createRoute } from 'honox/factory';

export default createRoute((c) => {
  return c.render(<HomePage />, { title: frameBrandText });
});
