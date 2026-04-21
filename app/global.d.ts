import 'hono';
import type { ShellRenderProps } from './routes/_renderer';

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: ShellRenderProps): Response | Promise<Response>;
  }

  interface Env {
    Variables: {};
    Bindings: {};
  }
}

declare module '@fontsource-variable/*' {}
declare module '@fontsource/*' {}
