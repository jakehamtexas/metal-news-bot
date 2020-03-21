import { IHeadline } from "../../contract/Headline";

const chunkByCharacterCount = (
  headlines: IHeadline[],
  characterCount: number
): IHeadline[][] => {
  let currentCount = 0;
  const chunks: IHeadline[][] = [];
  const chunk: IHeadline[] = [];
  for (let headline of headlines) {
    const headlineCharacterCount = headline.href.length;
    currentCount += headlineCharacterCount;

    if (currentCount >= characterCount) {
      chunks.push([...chunk]);
      chunk.length = 0;
      currentCount = headlineCharacterCount;
    }
    chunk.push(headline);
  }
  chunks.push(chunk);
  return chunks;
};
export default chunkByCharacterCount;
