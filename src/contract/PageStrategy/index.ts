import { Page } from "puppeteer";
import { IHeadline } from "../Headline";
import { IPageStrategy } from "./IPageStrategy";

type GetHeadlinesFunctionSignature = (page: Page) => Promise<IHeadline[]>;
type GoToNextFunctionSignature = (page: Page) => Promise<boolean>;
export {
  IPageStrategy,
  GetHeadlinesFunctionSignature,
  GoToNextFunctionSignature
};
