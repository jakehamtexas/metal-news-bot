import HeavyBlogIsHeavyQuery from "./HeavyBlogIsHeavyQuery";
import IQuery from "./IQuery";
class MetalNewsQuery {
  public heavyBlogIsHeavy: IQuery;
  constructor() {
    this.heavyBlogIsHeavy = new HeavyBlogIsHeavyQuery();
  }
}
export default new MetalNewsQuery();
