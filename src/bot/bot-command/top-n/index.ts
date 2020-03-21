import { Message } from "discord.js";

import { TopNFactory } from "./TopNFactory";
import format from "./format";
import { ICommand } from "../../../contract";
import {
  WebResourceOptionValuesAsString,
  WebResourceOption
} from "../../../constant";
import chunkByCharacterCount from "../chunkByCharacterCount";
import { IHeadline } from "../../../contract/Headline";

const isReasonable = (n: number) => {
  const someArbitraryLimit = 50;
  return n <= someArbitraryLimit;
};
const getTopN = async (n: number, option: string): Promise<IHeadline[]> => {
  const factory = new TopNFactory(option);
  return await factory.List(n);
};

const topN = async (message: Message, { text, option }: ICommand) => {
  const n = parseInt(text);
  const [resource] =
    Object.entries(WebResourceOption).find(
      ([key, value]) => value === option
    ) || [];
  if (isNaN(n) || !resource) {
    message.channel.send(
      `Make sure your message format follows \'!top <n> ${WebResourceOptionValuesAsString}\'.`
    );
    return;
  }
  message.channel.send(`Looking for the top ${n} headlines in ${resource}.`);
  if (isReasonable(n)) {
    const topN = await getTopN(n, option.trim().toLowerCase());
    const chunked = chunkByCharacterCount(topN, 2000);
    chunked
      .map(format)
      .forEach(formattedText => message.channel.send(formattedText));
  } else message.channel.send("That N is too big, senpai!");
};

export default topN;
