import { Page } from "puppeteer";
import { IHeadline } from "../Headline";

export interface IPageStrategy {
  getHeadlines(page: Page): Promise<IHeadline[]>;
  goToNext(page: Page): Promise<void>;
}
