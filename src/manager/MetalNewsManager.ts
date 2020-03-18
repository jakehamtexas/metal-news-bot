import { PageRA } from "../resource-access";
import { HeavyBlogIsHeavyPageStrategy } from "../contract/PageStrategy";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA;
  constructor() {
    const baseUrl = `https://www.heavyblogisheavy.com/`;
    this.heavyBlogIsHeavy = new PageRA(baseUrl, HeavyBlogIsHeavyPageStrategy);
  }
}
export default new MetalNewsManager();
