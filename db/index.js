require("dotenv").config();
const mongoose = require("mongoose");
const debug = require("debug")("robots-api:connection-database");
const chalk = require("chalk");

const connectionToDatabase = ({ username, password, database }) => {
  const connectionDBString = `mongodb+srv://${username}:${password}@mariamcluster.xiw3d.mongodb.net/${database}`;

  let connectionPromise = null;

  try {
    connectionPromise = new Promise((resolve, reject) => {
      mongoose.connect(connectionDBString, (error) => {
        if (error) {
          debug(chalk.red("Error connecting: ", error.message));
          reject();
        }

        debug("Connected to database");
        resolve();
      });
    });
  } catch (error) {
    debug(chalk.red("Error at connection Promise: ", error.message));
  }

  return connectionPromise;
};

module.exports = connectionToDatabase;
