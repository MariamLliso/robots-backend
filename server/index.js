const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(notFoundError);
app.use(generalError);

module.exports = app;
