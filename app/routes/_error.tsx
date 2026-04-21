import type { ErrorHandler } from 'hono';
import { shellLayoutForRoute } from '../../content/site';

const handler: ErrorHandler = (e, c) => {
  if ('getResponse' in e) {
    return e.getResponse();
  }
  // oxlint-disable-next-line no-console -- log unexpected errors at the edge
  console.error(e.message);
  c.status(500);
  return c.render('Internal Server Error', shellLayoutForRoute('home'));
};

export default handler;
