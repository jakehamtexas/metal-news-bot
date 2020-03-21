import { IPageStrategy } from ".";
import { Page } from "puppeteer";
import { IHeadline } from "../Headline";

export default abstract class BlogPageStrategy implements IPageStrategy {
  public async getHeadlines(page: Page): Promise<IHeadline[]> {
    return await page.evaluate(() => {
      const articles = document.getElementsByTagName("article");
      const getAnchor = (articleElement: HTMLElement): HTMLAnchorElement =>
        articleElement.getElementsByTagName("a")[0];
      return Array.from(articles)
        .map(getAnchor)
        .map(({ href, innerText: text }) => ({
          href,
          text
        }));
    });
  }

  protected _getStaticBlogGoToNext(
    selector: string
  ): (page: Page) => Promise<boolean> {
    return async (page: Page) => {
      const hasSelector = !!(await page.$$(selector));
      if (hasSelector) {
        await page.click(selector);
      }
      return hasSelector;
    };
  }

  abstract goToNext(page: Page): Promise<boolean>;
}
