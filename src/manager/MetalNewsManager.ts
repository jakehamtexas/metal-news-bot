import { PageRA } from "../resource-access";
import {
  HeavyBlogIsHeavyPageStrategy,
  InvisibleOrangesPageStrategy,
  MetalSucksPageStrategy
} from "../contract/PageStrategy";
class MetalNewsManager {
  public heavyBlogIsHeavy: PageRA;
  public invisibleOranges: PageRA;
  public metalSucks: PageRA;
  constructor() {
    this.heavyBlogIsHeavy = this._getHeavyBlogIsHeavy();
    this.invisibleOranges = this._getInvisibleOranges();
    this.metalSucks = this._getMetalSucks();
  }

  private _getHeavyBlogIsHeavy() {
    const baseUrl = `https://www.heavyblogisheavy.com/`;
    return new PageRA(baseUrl, HeavyBlogIsHeavyPageStrategy);
  }
  private _getInvisibleOranges() {
    const baseUrl = `http://www.invisibleoranges.com/`;
    return new PageRA(baseUrl, InvisibleOrangesPageStrategy);
  }
  private _getMetalSucks() {
    const baseUrl = `https://www.metalsucks.com/`;
    return new PageRA(baseUrl, MetalSucksPageStrategy);
  }
}
export default new MetalNewsManager();
