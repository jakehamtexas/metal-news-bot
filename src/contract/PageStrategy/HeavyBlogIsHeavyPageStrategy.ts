import BlogPageStrategy from "./BlogPageStrategy";

class HeavyBlogIsHeavyPageStrategy extends BlogPageStrategy {
  public goToNext = this._getGoToNext(".nav-previous > a");
}

export default new HeavyBlogIsHeavyPageStrategy();
