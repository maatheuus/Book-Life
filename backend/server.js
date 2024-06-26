import { connect } from "mongoose";
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
    // console.log(error.message);
    throw new Error(error.message);
  }
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + process.env.PORT);
});
