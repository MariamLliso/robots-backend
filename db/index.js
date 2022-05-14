require("dotenv").config();
const mongoose = require("mongoose");
const debug = require("debug")("robots-api:connection-database");
const chalk = require("chalk");

const connectionToDatabase = (connectionString) => {
  const connectionPromise = new Promise();
  try {
    connectionPromise((resolve, reject) => {
      mongoose.connect(connectionString, (error) => {
        if (error) {
          debug(chalk.red("Error connecting: ", error.message));
          reject();
        }

        debug("Connected to database");
        resolve();
      });
    });
  } catch (error) {
    debug(chalk.red("Error at connectionPromise: ", error.message));
  }
};

module.exports = connectionToDatabase;
