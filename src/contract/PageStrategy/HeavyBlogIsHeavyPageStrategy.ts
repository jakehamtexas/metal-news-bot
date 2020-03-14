import { IPageStrategy } from "./IPageStrategy";
import { Page } from "puppeteer";
import { IHeadline } from "../Headline";
import { GetHeadlinesFunctionSignature, GoToNextFunctionSignature } from ".";

class HeavyBlogIsHeavyPageStrategy implements IPageStrategy {
  private _getHeadlines: GetHeadlinesFunctionSignature;
  private _goToNext: GoToNextFunctionSignature;
  constructor(
    getHeadlines: GetHeadlinesFunctionSignature,
    goToNext: GoToNextFunctionSignature
  ) {
    this._getHeadlines = getHeadlines;
    this._goToNext = goToNext;
  }
  getHeadlines = (page: Page): Promise<IHeadline[]> => this._getHeadlines(page);
  goToNext = (page: Page): Promise<void> => this._goToNext(page);
}

export default HeavyBlogIsHeavyPageStrategy;
