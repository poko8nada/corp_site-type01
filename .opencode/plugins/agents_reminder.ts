import type { Plugin } from '@opencode-ai/plugin';
import { existsSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'agents.md');
  const hasAgentsMd = existsSync(agentsPath);

  const reminder = `Before responding, Never skip the following routine:
    - First, explain user's intent and what user need.
    - Then, list Skills that may be relevant.`.trim();

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
