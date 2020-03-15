import { PageRA } from "../resource-access";
import { HeavyBlogIsHeavyPageStrategy } from "../contract/PageStrategy";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA;
  constructor() {
    this.heavyBlogIsHeavy = new PageRA(HeavyBlogIsHeavyPageStrategy);
  }
}
export default new MetalNewsManager();
