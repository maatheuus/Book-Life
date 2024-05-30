import express from "express";
import { config } from "dotenv";
config({ path: "./config.env" });

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});
