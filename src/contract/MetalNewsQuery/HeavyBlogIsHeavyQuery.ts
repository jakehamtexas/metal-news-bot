import { Page } from "puppeteer";
import { ILink } from "..";
import IQuery from "./IQuery";
class HeavyBlogIsHeavyQuery implements IQuery {
  public async topN(n: number): Promise<ILink[]> {
    throw new Error("Method not implemented.");
  }
}

export default HeavyBlogIsHeavyQuery;
