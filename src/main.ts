import Express from "express";
import { MetalNewsManager } from "./manager";
const app: Express.Application = Express();
const port: number = 8080;

app.set("port", port);

app.get("/", async req => {
  const { quantity } = req.body;
  const {
    heavyBlogIsHeavy: { getTopN }
  } = MetalNewsManager;
  const topN = await getTopN(quantity || 5);
  console.log(topN);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
