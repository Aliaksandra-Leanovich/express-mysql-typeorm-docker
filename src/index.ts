import app from "./app";
import { initializeDatabase } from "./data-source";
import * as dotenv from "dotenv";

dotenv.config();

(async () => {
  await initializeDatabase();
  app.listen(process.env.SERVER_PORT, function () {
    console.log("The app is running on port " + process.env.SERVER_PORT);
  });
})();
