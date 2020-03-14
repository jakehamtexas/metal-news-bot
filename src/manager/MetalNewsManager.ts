import { PageRA } from "../resource-access";
import { HeavyBlogIsHeavyPageStrategy } from "../contract/PageStrategy";
import { HeavyBlogIsHeavyPageStrategyEngine } from "../engine";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA<HeavyBlogIsHeavyPageStrategy>;
  constructor() {
    this.heavyBlogIsHeavy = this.getHeavyBlogIsHeavy();
  }

  private getHeavyBlogIsHeavy(): PageRA<HeavyBlogIsHeavyPageStrategy> {
    const { getHeadlines, goToNext } = HeavyBlogIsHeavyPageStrategyEngine;
    return new PageRA(HeavyBlogIsHeavyPageStrategy, getHeadlines, goToNext);
  }
}
export default new MetalNewsManager();
