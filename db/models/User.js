const { Schema, model } = require("mongoose");

const UserShcema = new Schema({
  username: { type: String },
  password: { type: String },
});

const User = model("User", UserShcema, "users");

module.exports = User;
