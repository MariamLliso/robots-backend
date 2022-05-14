require("dotenv").config();
const debug = require("debug")("robots-api:root");
const chalk = require("chalk");
const port = require("./cli");
const connectionToDatabase = require("./db");
const initializeServer = require("./server/initializeServer");

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DATABASE;

(async () => {
  try {
    await connectionToDatabase({ username, password, database });
    await initializeServer(port);
  } catch {
    debug(chalk.red("Error initializing server"));
  }
})();
