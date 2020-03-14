import { asyncUsing } from "../util";
import { Page } from "puppeteer";
import { IPageStrategy } from "../contract/PageStrategy/IPageStrategy";
import { IHeadline } from "../contract/Headline";
import { HeadlessBrowser } from "../contract/HeadlessBrowser";
import {
  GoToNextFunctionSignature,
  GetHeadlinesFunctionSignature
} from "../contract/PageStrategy";

class PageRA<TPageStrategy extends IPageStrategy> {
  private baseUrl: string;
  private pageStrategy: IPageStrategy;
  constructor(
    TPageStrategy: {
      new (
        getHeadlinesFunc: GetHeadlinesFunctionSignature,
        goToNextFunc: GoToNextFunctionSignature
      ): TPageStrategy;
    },
    getHeadlinesFunc: GetHeadlinesFunctionSignature,
    goToNextFunc: GoToNextFunctionSignature
  ) {
    this.pageStrategy = new TPageStrategy(getHeadlinesFunc, goToNextFunc);
  }

  public async getTopN(n: number): Promise<IHeadline[]> {
    let links: IHeadline[];
    await asyncUsing<HeadlessBrowser>(
      new HeadlessBrowser(this.baseUrl),
      async browser => {
        const page = await browser.getPage();
        links = await this.getHeadlines(page, n);
      }
    );
    return links || [];
  }
  private async getHeadlines(page: Page, n: number): Promise<IHeadline[]> {
    const links: IHeadline[] = [];
    const { getHeadlines, goToNext } = this.pageStrategy;
    while (n > 0) {
      const pageHeadlines = await getHeadlines(page);
      links.concat(pageHeadlines.slice(n));
      n -= pageHeadlines.length;
      if (n > 0) {
        const completingNavigation = page.waitForNavigation();
        goToNext(page);
        await completingNavigation;
      }
    }
    return links;
  }
}

export default PageRA;
