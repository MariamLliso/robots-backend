const debug = require("debug")("robots:server:errors");
const chalk = require("chalk");

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "Endpoint not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.statusCode ? error.message : "General error";
  debug(chalk.red(`${statusCode}: ${errorMessage}`));

  res.status(statusCode).json(errorMessage);
};

module.exports = { notFoundError, generalError };
