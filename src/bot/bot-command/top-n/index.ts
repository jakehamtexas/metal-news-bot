import { Message } from "discord.js";

import { TopNFactory } from "./TopNFactory";
import format from "./format";
import { ICommand } from "../../../contract";
import {
  WebResourceOptionValuesAsString,
  WebResourceOption
} from "../../../constant";
import chunkByCharacterCount from "../chunkByCharacterCount";
import getErrorImagePath from "./errorImagePath";
import errorImagePath from "./errorImagePath";

const isReasonable = (n: number) => {
  const someArbitraryLimit = 5;
  return n <= someArbitraryLimit;
};

const topN = async (
  message: Message,
  { text, option }: ICommand,
  optionalParam: string
) => {
  const n = parseInt(text);
  const [resource] =
    Object.entries(WebResourceOption).find(([, value]) => value === option) ||
    [];
  if (isNaN(n) || !resource || n <= 0) {
    message.channel.send(
      `Make sure your message format follows \'!top <n> ${WebResourceOptionValuesAsString}\'.`
    );
    return;
  }
  if (n <= 0) {
    const zoidberg = errorImagePath;
    message.channel.send({ files: [zoidberg] });
    return;
  }
  message.channel.send(`Looking for the top ${n} headlines in ${resource}.`);
  if (!isReasonable(n) && optionalParam === "dickmove") {
    message.channel.send(`You're going to flood the chat! What a dick move.`);
  } else if (optionalParam === "dickmove") {
    message.channel.send(
      "You were a dick with a small N, which is altogether a different kind of dick move."
    );
  }
  if (isReasonable(n) || (!isReasonable(n) && optionalParam === "dickmove")) {
    const factory = new TopNFactory(option);
    try {
      const topN = await factory.List(n);
      const chunked = chunkByCharacterCount(topN, 2000);
      chunked
        .map(format)
        .forEach(formattedText => message.channel.send(formattedText));
    } catch (e) {
      message.channel.send(e);
      console.log(e);
    }
  } else
    message.channel.send("That N is too big for my tiny parameter, senpai!"); //suffer
};

export default topN;
