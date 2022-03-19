import express from "express";
import { helloRouter } from "./routes/hello";
import { UpdatePostRouter } from "./routes/update_post";

const app = express();

app.use(express.json());
app.use(UpdatePostRouter);
app.use(helloRouter);
app.listen(3000, () => {
  console.log("Server running at localhost:3000");
});
