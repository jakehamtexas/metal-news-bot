import { EOL } from "os";
import { IHeadline } from "../../../contract/Headline";

const format = (headlines: IHeadline[]) =>
  headlines.map(({ href }) => href).join(EOL);

export default format;
