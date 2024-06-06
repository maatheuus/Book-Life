import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import app from "./app.js";

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

connection();
async function connection() {
  try {
    await connect(DB);
  } catch (error) {
    console.log(error.message);
  }
}

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
