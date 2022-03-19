import express from "express";
import { helloRouter } from "./routes/hello";
import { getPostsRouter } from "./routes/get-all";
import { getPostRouter } from "./routes/get";

const app = express();

app.use(express.json());

app.use(helloRouter);
app.use(getPostsRouter);
app.use(getPostRouter);
app.listen(3000, () => {
  console.log("Server running at localhost:3000");
});
