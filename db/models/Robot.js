const { Schema, model } = require("mongoose");

const RobotSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  speed: {
    type: Number,
    min: 0,
    max: 10,
  },
  resistance: {
    type: Number,
    min: 0,
    max: 10,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Robot = model("Robots", RobotSchema, "robots");

module.exports = Robot;
