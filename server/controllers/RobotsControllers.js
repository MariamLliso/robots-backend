const Robot = require("../../db/models/Robot");

const getRobots = async (req, res) => {
  const robots = await Robot.find();
  res.status(200).json({ robots });
};

const deleteRobot = async (req, res) => {
  const { idRobot } = req.params;
  const robot = await Robot.findById(idRobot);
  await Robot.findByIdAndDelete(idRobot);
  res.status(200).json(robot);
};

module.exports = { getRobots, deleteRobot };
