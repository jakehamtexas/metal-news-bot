import { IDisposable } from "./IDisposable";
import { Page, Browser, launch, Request } from "puppeteer";

const blockedResourceTypes = [
  "image",
  "media",
  "font",
  "texttrack",
  "object",
  "beacon",
  "csp_report",
  "imageset"
];
const getIsBlockedResource = (request: Request): boolean =>
  blockedResourceTypes.indexOf(request.resourceType()) !== -1;

const skippedResources = [
  "quantserve",
  "adzerk",
  "doubleclick",
  "adition",
  "exelator",
  "sharethrough",
  "cdn.api.twitter",
  "google-analytics",
  "googletagmanager",
  "google",
  "fontawesome",
  "facebook",
  "analytics",
  "optimizely",
  "clicktale",
  "mixpanel",
  "zedo",
  "clicksor",
  "tiqcdn"
];
const getIsSkippableResource = (request: Request): boolean => {
  const requestUrl = request
    .url()
    .split("?")[0]
    .split("#")[0];
  const isSkippedResource = skippedResources.some(
    resource => requestUrl.indexOf(resource) !== -1
  );
  return isSkippedResource;
};

export class HeadlessBrowser implements IDisposable {
  private readonly _url: string;

  private readonly _browser: Promise<Browser>;
  constructor(url: string, isHeadless: boolean = true) {
    this._browser = launch({ headless: isHeadless, args: ["--no-sandbox"] });
    this._url = url;
  }

  public async getPage(): Promise<Page> {
    const browser = await this._browser;
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();
    await page.setRequestInterception(true);
    page.on("request", request => {
      const isBlockedResource = getIsBlockedResource(request);
      const isSkippableResource = getIsSkippableResource(request);
      if (isBlockedResource || isSkippableResource) {
        request.abort();
      } else {
        request.continue();
      }
    });
    await page.goto(this._url);
    return page;
  }
  public async dispose(): Promise<void> {
    const browser = await this._browser;
    await browser.close();
  }
}
