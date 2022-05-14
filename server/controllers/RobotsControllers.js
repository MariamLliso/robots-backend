const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

module.exports = { getRobots };
