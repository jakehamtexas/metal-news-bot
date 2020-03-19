import { Message } from "discord.js";

import { TopNFactory } from "./TopNFactory";
import format from "./format";
import { ICommand } from "../../../contract";

const isReasonable = (n: number) => {
  const someArbitraryLimit = 50;
  return n <= someArbitraryLimit;
};
const getTopN = async (n: number, option: string): Promise<string | null> => {
  const factory = new TopNFactory(option);
  const headlines = await factory.List(n);
  return format(headlines);
};

const topN = async (message: Message, { text, option }: ICommand) => {
  message.channel.send(`Looking for the top ${text} headlines in ${option}.`);
  const n = parseInt(text);
  if (isReasonable(n)) {
    const topN = await getTopN(n, option.trim().toLowerCase());
    message.channel.send(topN);
  } else message.channel.send("That N is too big, senpai!");
};

export default topN;
