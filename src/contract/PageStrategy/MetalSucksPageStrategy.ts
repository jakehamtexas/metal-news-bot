import { Page } from "puppeteer";
import BlogPageStrategy from "./BlogPageStrategy";

const goToNext = async (page: Page): Promise<boolean> => {
  const firstPageNextButtonSelector = "";
  const proceedingPageNextButtonSelector = "";
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

class HeavyBlogIsHeavyPageStrategy extends BlogPageStrategy {
  public goToNext = goToNext;
}

export default new HeavyBlogIsHeavyPageStrategy();
