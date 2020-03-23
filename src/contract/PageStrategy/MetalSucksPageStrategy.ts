import { Page } from "puppeteer";
import BlogPageStrategy from "./BlogPageStrategy";
import { IPageStrategy } from ".";
import { IHeadline } from "../Headline";

const goToNext = async (page: Page): Promise<boolean> => {
  const firstPageNextButtonSelector = "a.readmore-btn";
  const proceedingPageNextButtonSelector = "a.nextpostslink";
  const hasFirstPageSelector = !!(await page.$$(firstPageNextButtonSelector));
  const hasProceedingPageSelector = !!(await page.$$(
    proceedingPageNextButtonSelector
  ));
  if (hasFirstPageSelector) {
    await page.click(firstPageNextButtonSelector);
  } else if (hasProceedingPageSelector) {
    await page.click(proceedingPageNextButtonSelector);
  }
  return hasFirstPageSelector || hasProceedingPageSelector;
};

const getHeadlines = async (page: Page): Promise<IHeadline[]> =>
  page.evaluate(() => {
    const articles = document.getElementsByTagName("article");
    const getAnchor = (articleElement: HTMLElement): HTMLAnchorElement => {
      const anchors = Array.from(articleElement.getElementsByTagName("a"));
      const fullArticleAnchor = anchors.find(a => a.className === "full-cover");
      const [, discusThreadAnchor] = anchors;
      return fullArticleAnchor || discusThreadAnchor;
    };

    return Array.from(articles)
      .map(getAnchor)
      .map(({ href, innerText: text }) => ({
        href,
        text
      }));
  });

class MetalSucksPageStrategy implements IPageStrategy {
  public goToNext = goToNext;
  public getHeadlines = getHeadlines;
}

export default new MetalSucksPageStrategy();
