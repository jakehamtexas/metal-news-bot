import { IHeadline } from "../../contract/Headline";

const chunkByCharacterCount = (
  headlines: IHeadline[],
  characterCount: number
): IHeadline[][] => {
  let currentCount = 0;
  const chunks: IHeadline[][] = [];
  const chunk: IHeadline[] = [];
  for (let headline of headlines) {
    if (currentCount < characterCount) {
      chunk.push(headline);

      const headlineCharacterCount = headline.href.length;
      currentCount += headlineCharacterCount;
    } else {
      chunks.push(chunk);
      chunk.length = 0;
    }
  }
  chunks.push(chunk);
  return chunks;
};
export default chunkByCharacterCount;
