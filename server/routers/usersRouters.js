const express = require("express");
const userLogin = require("../controllers/usersController");

const userRouter = express.Router();

userRouter.post("/", userLogin);

module.exports = userRouter;
