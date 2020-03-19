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
      case WebResourceOption.HeavyBlogIsHeavy:
      default:
        return MetalNewsManager.heavyBlogIsHeavy.getTopN(n);
    }
  }
}
