import { EOL } from "os";
import { IHeadline } from "../../../contract/Headline";

const format = (headlines: IHeadline[]) =>
  headlines.map(({ href, text }) => `${href}${EOL}${text}`).join(EOL);

export default format;
