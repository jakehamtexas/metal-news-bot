import {
  GetHeadlinesFunctionSignature,
  GoToNextFunctionSignature
} from "../contract/PageStrategy";
import { IHeadline } from "../contract/Headline";
import { Page } from "puppeteer";

const getHeadlines = async (page: Page): Promise<IHeadline[]> => {
  return [];
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
