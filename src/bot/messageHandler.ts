import { BotCommand } from "../constant";
import { helpText, topN } from "./bot-command";
import { Message } from "discord.js";

const getMessageParts = ({
  content
}: Message): [BotCommand, string, string] => {
  const [botCommand, text, option] = content.replace("!", "").split(" ");
  return [botCommand as BotCommand, text, option];
};

export default (botId: string | null | undefined) => {
  const messageHandler = async (message: Message) => {
    if (botId) {
      helpText(message, botId);
      if (message.content.startsWith("!")) {
        const [command, text, option] = getMessageParts(message);
        switch (command.trim().toLowerCase() as BotCommand) {
          case BotCommand.Top:
            await topN(message, text, option);
            break;
        }
      }
    }
  };
  return messageHandler;
};
