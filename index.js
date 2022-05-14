require("dotenv").config();
const debug = require("debug")("robots-api:root");
const chalk = require("chalk");
const connectionToDatabase = require("./db");

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DATABASE;

(async () => {
  try {
    await connectionToDatabase({ username, password, database });
  } catch {
    debug(chalk.red("Error initializing server"));
  }
})();
