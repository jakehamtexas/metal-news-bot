import BlogPageStrategy from "./BlogPageStrategy";

class HeavyBlogIsHeavyPageStrategy extends BlogPageStrategy {
  public goToNext = this._getStaticBlogGoToNext(".nav-previous > a");
}

export default new HeavyBlogIsHeavyPageStrategy();
