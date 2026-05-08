import type { Plugin } from '@opencode-ai/plugin';
import { existsSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'agents.md');
  const hasAgentsMd = existsSync(agentsPath);

  const reminders = [
    '(Please follow the instructions in agents.md.)',
    "(Make sure you're complying with agents.md before proceeding.)",
    '(Double-check agents.md and act accordingly.)',
    "(Don't forget — agents.md rules apply here too.)",
    '(Have you reviewed agents.md? Please do so before acting.)',
    '(agents.md exists for a reason. Please follow it.)',
    "(Stop and re-read agents.md if you're unsure how to proceed.)",
    "(Your behavior should reflect what's written in agents.md.)",
    '(agents.md is not optional. Please adhere to it.)',
    '(Before you do anything, confirm it aligns with agents.md.)',
    "(I shouldn't have to say this, but: follow agents.md.)",
    '(agents.md. Read it. Follow it. Every time.)',
    "(Please don't ignore agents.md. It's there for a reason.)",
    '(If agents.md covers this case, follow it — no exceptions.)',
    '(Seriously, agents.md. Please.)',
  ];
  let count = 0;

  return {
    'chat.message': async (input, output) => {
      if (!hasAgentsMd) return;
      const reminder = reminders[count % reminders.length];
      count++;

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
