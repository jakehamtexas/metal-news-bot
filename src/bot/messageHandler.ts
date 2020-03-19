import { BotCommand } from "../constant";
import { helpText } from "./bot-command";
import { Message } from "discord.js";
import { ICommand } from "../contract/";
import topN from "./bot-command/top-n";

const getCommand = ({ content }: Message): ICommand => {
  const [botCommand, text, option] = content.replace("!", "").split(" ");
  return { botCommand, text, option };
};

export default (botId: string | null | undefined) => {
  const messageHandler = async (message: Message) => {
    if (botId) {
      helpText(message, botId);
      if (message.content.startsWith("!")) {
        const command = getCommand(message);
        switch (command.botCommand) {
          case BotCommand.Top:
            await topN(message, command);
            break;
        }
      }
    }
  };
  return messageHandler;
};
