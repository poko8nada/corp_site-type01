import type { NotFoundHandler } from 'hono';
import { shellLayoutForRoute } from '../../content/site';

const handler: NotFoundHandler = (c) => {
  c.status(404);
  return c.render('404 Not Found', shellLayoutForRoute('home'));
};

export default handler;
