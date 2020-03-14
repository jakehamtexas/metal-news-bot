import { ILink } from "../ILink";

export default interface IQuery {
  topN(n: number): Promise<ILink[]>;
}
