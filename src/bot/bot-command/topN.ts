import { WebResourceOption } from "../../constant";
import { MetalNewsManager } from "../../manager";

const getTopN = async (
  n: number,
  option: WebResourceOption
): Promise<string | null> => {
  const getResult = async () => {
    switch (option) {
      case WebResourceOption.HeavyBlogIsHeavy:
      default:
        return MetalNewsManager.heavyBlogIsHeavy.getTopN(n);
    }
  };
  const isReasonable = (n: number) => {
    const someArbitraryLimit = 50;
    return n <= someArbitraryLimit;
  };
  if (isReasonable(n)) {
    const result = await getResult();
    return result.map(
      ({ href, text }) =>
        `
      ${href}
    ${text}
    `
    ).join(`
    `);
  }
  return null;
};

const topN = async (message: any, text: string, option: string) => {
  message.channel.send(`Looking for the top ${text} headlines in ${option}.`);
  const sendable = await getTopN(
    parseInt(text),
    option.trim().toLowerCase() as WebResourceOption
  );
  if (sendable) message.channel.send(sendable);
  else message.channel.send("That N is too big, senpai!");
};

export default topN;
