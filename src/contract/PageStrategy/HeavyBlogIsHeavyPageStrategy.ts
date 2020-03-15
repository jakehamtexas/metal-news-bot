import { IPageStrategy } from "../contract/PageStrategy";
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
const goToNext = async (page: Page): Promise<boolean> => {
  const selector = `.nav-previous`; // This navs to older posts.
  const hasSelector = !!(await page.$(selector));
  if (hasSelector) {
    await page.click(selector);
  }
  return hasSelector;
};

class HeavyBlogIsHeavyPageStrategy implements IPageStrategy {
  public getHeadlines = getHeadlines;
  public goToNext = goToNext;
}

export default new HeavyBlogIsHeavyPageStrategy();