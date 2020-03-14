import HeavyBlogIsHeavyPageStrategy from "./HeavyBlogIsHeavyPageStrategy";
import { Page } from "puppeteer";
import { IHeadline } from "../Headline";

type GetHeadlinesFunctionSignature = (page: Page) => Promise<IHeadline[]>;
type GoToNextFunctionSignature = (page: Page) => Promise<void>;
export {
  HeavyBlogIsHeavyPageStrategy,
  GetHeadlinesFunctionSignature,
  GoToNextFunctionSignature
};
