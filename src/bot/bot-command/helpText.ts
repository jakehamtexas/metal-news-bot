import { Message } from "discord.js";

const helpText = (
  { mentions: { users }, content, channel: { send } }: Message,
  botId: string
) => {
  if (users.has(botId) && content.includes("help")) {
    send(`metal-news-bot
Commands:
\`@metal-news-bot help\` prints this help text
\`!top <n> [hbih]\` gets the latest n headlines from any registered blog.
`);
  }
};
export default helpText;
