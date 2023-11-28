
import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();

const port = process.env.PORT;
async function main() {
  try {
    await mongoose.connect(process.env.Database_URL as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err, "in server.ts");
  }
}

main();
