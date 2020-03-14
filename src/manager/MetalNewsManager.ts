import { PageRA } from "../resource-access";
import { HeavyBlogIsHeavyPageStrategyEngine } from "../engine";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA;
  constructor() {
    this.heavyBlogIsHeavy = this.getHeavyBlogIsHeavy();
  }

  private getHeavyBlogIsHeavy(): PageRA {
    const { getHeadlines, goToNext } = HeavyBlogIsHeavyPageStrategyEngine;
    return new PageRA(getHeadlines, goToNext);
  }
}
export default new MetalNewsManager();
