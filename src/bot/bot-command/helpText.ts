import { Message } from "discord.js";
import { WebResourceOptionValuesAsString } from "../../constant";

const helpText = (message: Message, botId: string) => {
  if (
    message.mentions &&
    message.mentions.users.has(botId) &&
    message.content.includes("help")
  ) {
    message.channel.send(`metal-news-bot
Commands:
\`@metal-news-bot help\` prints this help text
\`!top <n> ${WebResourceOptionValuesAsString} <?dickmove>\` gets the latest n headlines from any registered blog. If you want to be a dick, you can add \`dickmove\` to the end of the command to force large N.
    Options:
      - \'hbib\': Heavy Blog Is Heavy https://www.heavyblogisheavy.com
`);
  }
};
export default helpText;
