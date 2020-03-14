import HeavyBlogIsHeavyQuery from "./HeavyBlogIsHeavyQuery";
class MetalNewsQuery {
  public heavyBlogIsHeavy: HeavyBlogIsHeavyQuery;
  constructor() {
    this.heavyBlogIsHeavy = new HeavyBlogIsHeavyQuery();
  }
}
export default new MetalNewsQuery();
