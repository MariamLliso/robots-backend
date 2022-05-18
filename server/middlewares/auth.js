require("dotenv").config();
const debug = require("debug")("robots:middlewares:auth");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization.includes("Bearer ")) {
      debug(chalk.redBright("Authorization does not includes headers"));
      throw new Error();
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET);
    debug(chalk.green("Received a valid token"));

    next();
  } catch (error) {
    const customError = new Error("Invalid token");
    customError.statusCode = 401;
    next(customError);
  }
};

module.exports = auth;
