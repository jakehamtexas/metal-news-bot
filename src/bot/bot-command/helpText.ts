import { Message } from "discord.js";

const helpText = (message: Message, botId: string) => {
  console.log(message.content);
  if (
    message.mentions &&
    message.mentions.users.has(botId) &&
    message.content.includes("help")
  ) {
    message.channel.send(`metal-news-bot
Commands:
\`@metal-news-bot help\` prints this help text
\`!top <n> [hbih]\` gets the latest n headlines from any registered blog.
    Options:
      - \'hbib\': Heavy Blog Is Heavy https://www.heavyblogisheavy.com
`);
  }
};
export default helpText;
