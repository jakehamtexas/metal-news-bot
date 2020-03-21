import { WebResourceOption } from "../../../constant";
import { IHeadline } from "../../../contract/Headline";
import { MetalNewsManager } from "../../../manager";

export class TopNFactory {
  private _option: string;
  constructor(option: string) {
    this._option = option;
  }

  public async List(n: number): Promise<IHeadline[]> {
    switch (this._option) {
      case WebResourceOption.InvisibleOranges:
        return MetalNewsManager.invisibleOranges.getTopN(n);
      case WebResourceOption.HeavyBlogIsHeavy:
        return MetalNewsManager.heavyBlogIsHeavy.getTopN(n);
      default:
        throw new Error("I don't recognize that resource!");
    }
  }
}
