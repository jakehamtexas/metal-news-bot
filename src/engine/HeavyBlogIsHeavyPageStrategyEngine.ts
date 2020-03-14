import {
  GetHeadlinesFunctionSignature,
  GoToNextFunctionSignature
} from "../contract/PageStrategy";
import { IHeadline } from "../contract/Headline";
import { Page } from "puppeteer";

const getAnchor = (articleElement: HTMLElement): HTMLAnchorElement =>
  articleElement.getElementsByTagName("a")[0];

const getHeadlines = async (page: Page): Promise<IHeadline[]> => {
  return await page.evaluate(() => {
    const articles = document.getElementsByTagName("article");
    return Array.from(articles)
      .map(getAnchor)
      .map(({ href, innerText: text }) => ({
        href,
        text
      }));
  });
};
const goToNext = async (page: Page): Promise<void> => {};

class HeavyBlogIsHeavyPageStrategyEngine {
  public getHeadlines: GetHeadlinesFunctionSignature;
  public goToNext: GoToNextFunctionSignature;
  constructor() {
    this.getHeadlines = getHeadlines;
    this.goToNext = goToNext;
  }
}

export default new HeavyBlogIsHeavyPageStrategyEngine();
