import type { Plugin } from '@opencode-ai/plugin';
import { existsSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'agents.md');
  const hasAgentsMd = existsSync(agentsPath);

  const reminder = `Before responding, go through this list:
- Have you gathered enough context?
  - To ask user
  - To search web
  - To run skills, such as context7
- List the skills that may be related. Cuz your excution is not perfect`.trim();

  return {
    'chat.message': async (input, output) => {
      if (!hasAgentsMd) return;

      output.parts.push({
        type: 'text',
        id: crypto.randomUUID(),
        sessionID: input.sessionID,
        messageID: input.messageID ?? '',
        text: `\n\n${reminder}`,
      });
    },
  };
};
