import type { Plugin } from '@opencode-ai/plugin';
import { existsSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'agents.md');
  const hasAgentsMd = existsSync(agentsPath);

  const reminder = `
Before responding, go through this checklist:
[ ] Have you gathered enough context? (Understand the full scope before writing any code)
[ ] Skills: If ANY skill even remotely applies to this task, MUST execute it. Skipping a skill is NOT an option. When in doubt, run it.
`.trim();

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
