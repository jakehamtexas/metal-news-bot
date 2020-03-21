import { PageRA } from "../resource-access";
import {
  HeavyBlogIsHeavyPageStrategy,
  InvisibleOrangesPageStrategy
} from "../contract/PageStrategy";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA;
  public invisibleOranges: PageRA;
  constructor() {
    this.heavyBlogIsHeavy = this._getHeavyBlogIsHeavy();
    this.invisibleOranges = this._getInvisibleOranges();
  }

  private _getHeavyBlogIsHeavy() {
    const baseUrl = `https://www.heavyblogisheavy.com/`;
    return new PageRA(baseUrl, HeavyBlogIsHeavyPageStrategy);
  }
  private _getInvisibleOranges() {
    const baseUrl = `http://www.invisibleoranges.com/`;
    return new PageRA(baseUrl, InvisibleOrangesPageStrategy);
  }
}
export default new MetalNewsManager();
