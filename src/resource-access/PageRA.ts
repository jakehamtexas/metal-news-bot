import { asyncUsing } from "../util";
import { Page } from "puppeteer";
import { IHeadline } from "../contract/Headline";
import { HeadlessBrowser } from "../contract/HeadlessBrowser";
import { IPageStrategy } from "../contract/PageStrategy";

class PageRA {
  private baseUrl: string;
  private pageStrategy: IPageStrategy;
  constructor(baseUrl: string, pageStrategy: IPageStrategy) {
    this.baseUrl = baseUrl;
    this.pageStrategy = pageStrategy;
  }

  public async getTopN(n: number): Promise<IHeadline[]> {
    let links: IHeadline[] = [];
    await asyncUsing<HeadlessBrowser>(
      new HeadlessBrowser(this.baseUrl),
      async browser => {
        const page = await browser.getPage();
        links = [...links, ...(await this.getHeadlines(page, n))];
      }
    );
    return links;
  }
  private async getHeadlines(page: Page, n: number): Promise<IHeadline[]> {
    let links: IHeadline[] = [];
    const { getHeadlines, goToNext } = this.pageStrategy;
    while (n > 0) {
      const pageHeadlines = await getHeadlines(page);
      links = [...links, ...pageHeadlines.slice(0, n)];
      n -= pageHeadlines.length;
      if (n > 0) {
        const completingNavigation = page.waitForNavigation();
        if (await goToNext(page)) await completingNavigation;
      }
    }
    return links;
  }
}

export default PageRA;
