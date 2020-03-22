import { join } from "path";
import { cwd as getCurrentWorkingDirectory } from "process";
export default join(
  getCurrentWorkingDirectory(),
  "content",
  "bad-n-zoidberg.jpg"
);
