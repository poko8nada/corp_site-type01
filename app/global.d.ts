import type { SiteShellRenderProps } from '../content/site';
import 'hono';

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: SiteShellRenderProps): Response | Promise<Response>;
  }

  interface Env {
    Variables: {};
    Bindings: {};
  }
}
