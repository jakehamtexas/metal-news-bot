import BlogPageStrategy from "./BlogPageStrategy";

class HeavyBlogIsHeavyPageStrategy extends BlogPageStrategy {
  public goToNext = this._getStaticBlogGoToNext(
    "#content_main > div > div > div > a"
  );
}

export default new HeavyBlogIsHeavyPageStrategy();
