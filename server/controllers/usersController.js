const bcrypt = require("bcrypt");
const debug = require("debug")("robots:controller:users");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");

const userLogin = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    debug(chalk.red("Username or password are worng"));
    const error = new Error("Username or password are worng");
    error.code = 403;
    next(error);
  } else {
    const userData = {
      id: user.id,
      name: user.username,
    };

    const rightPassword = await bcrypt.compare(password, user.password);

    if (!rightPassword) {
      debug(chalk.red("Received a wrong password"));
      const error = new Error("Username or password are worng");
      error.code = 403;
      next(error);
    } else {
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      debug(chalk.blueBright(`User ${userData.username} loged in`));

      res.status(201).json({ token });
    }
  }
};

module.exports = userLogin;
